import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { ScreenProvider } from "../context/ScreenSize";
import { CartProvider } from "context/Cart";
import { CssBaseline } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import FlyingStork from "@components/Main/FlyingStork/FlyingStork";

import Storkies from "@src/theme";
import Gate from "@components/Gate/Gate";

import GlobalStyles from "../src/global.styles";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ThemeProvider theme={Storkies}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ScreenProvider>
            <CartProvider>
              <CssBaseline />
              <GlobalStyles />
              <Gate />
              <Component {...pageProps} />
              <FlyingStork />
            </CartProvider>
          </ScreenProvider>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
