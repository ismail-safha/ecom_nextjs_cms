import {
  AppBar,
  Badge,
  Box,
  Container,
  createTheme,
  CssBaseline,
  Switch,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";

import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import classes from "../utils/classes";
import jsCookie from "js-cookie";
import { Store } from "../utils/Store";

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart, userInfo } = state;
  console.log(state);

  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
    },
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
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    jsCookie.set("darkMode", newDarkMode ? "ON" : "OFF");
  };

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
            <Box display="flex" alignItems="center">
              <Link href="/">
                <Typography sx={classes.brand}>eco_shop</Typography>
              </Link>
            </Box>
            <Box>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <Link href="cart">
                <Typography component="span">
                  {cart.cartItems.length > 0 ? (
                    <Badge
                      color="secondary"
                      badgeContent={cart.cartItems.length}
                    >
                      Cart
                    </Badge>
                  ) : (
                    "Cart"
                  )}
                </Typography>
              </Link>
              {userInfo ? (
                <Link href="/profile">
                  <>{userInfo.name}</>
                </Link>
              ) : (
                <Link href="/login">
                  <>Login</>
                </Link>
              )}
            </Box>
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
