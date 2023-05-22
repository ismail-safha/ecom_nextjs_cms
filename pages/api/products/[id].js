import client from "../../../utils/client";

const handler = async (req, res) => {
  try {
    // Fetch the product with the specified ID
    const product = await client.fetch(
      `*[_type == "Product" && _id == $id][0]`,
      {
        id: req.query.id,
      }
    );

    res.send(product);
  } catch {
    console.error("Failed to fetch product:", error);
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

export default handler;
