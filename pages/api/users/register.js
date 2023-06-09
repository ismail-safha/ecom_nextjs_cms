import client from "../../../utils/client";
import bcrypt from "bcryptjs";
import axios from "axios";
import { signToken } from "../../../utils/auth";
import config from "../../../utils/config";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  try {
    const projectId = config.projectId;
    const dataset = config.dataset;
    const tokenWithWriteAccess = process.env.SANITY_AUTH_TOKEN;
    const createMutations = [
      {
        create: {
          _type: "user",
          name: req.body.name,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password),
          isAdmin: false,
        },
      },
    ];
    // fetch user based on the email from the database
    const existsUser = await client.fetch(
      `*[_type == "user" && email == $email[0]`,
      {
        email: req.body.email,
      }
    );
    if (existsUser) {
      return res.status(401).send({ message: "Email already exists" });
    }
    const { data } = await axios.post(
      `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
      { mutations: createMutations },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${tokenWithWriteAccess}`,
        },
      }
    );

    const userId = data.results[0].id;
    const user = {
      _id: userId,
      name: req.body.name,
      email: req.body.email,
      isAdmin: false,
    };

    const token = signToken(user);
    res.send({ ...user, token });
  } catch {
    console.error("Failed to fetch register:", error);
    res.status(500).json({ error: "Failed to fetch register" });
  }
};

export default handler;
