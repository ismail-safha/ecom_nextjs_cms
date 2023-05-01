const classes = {
  main: {
    marginTop: 2,
    minHeight: "80vh",
  },
  footer: {
    marginTop: 1,
    textAlign: "center",
  },
  appbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 1,
      textDecoration: "none",
    },
    "& a:hover": {
      color: "#ffef80",

      textDecorationLine: "underline",
    },
  },
  toolbar: {
    justifyContent: "space-between",
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
};

export default classes;
