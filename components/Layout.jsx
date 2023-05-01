import {
  AppBar,
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";

import Head from "next/head";
import Link from "next/link";
import classes from "../utils/classes";

export default function Layout({ title, description, children }) {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      mode: "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });
  return (
    <>
      <Head>
        <title>{title ? `${title}- Sanity eco_shop` : "Sanity eco_shop"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" sx={classes.appbar}>
          <Toolbar sx={classes.toolbar}>
            <Link href="/">
              <Typography sx={classes.brand}>eco_shop</Typography>
            </Link>
          </Toolbar>
        </AppBar>
        {/* content */}
        <Container component="main" sx={classes.main}>
          {children}
        </Container>
        {/* footer */}
        <Box component="footer" sx={classes.footer}>
          <Typography>All rights reserved. Sanity eco_shop.</Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}
