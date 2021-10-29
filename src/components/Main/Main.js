import { useState, useEffect, useRef } from "react";
import { useScreenSize } from "@context/ScreenSize";

import Footer from "@components/Main/Footer/Footer";
import Head from "@components/Main/Head/Head";
import Nav from "@components/Main/Nav/Nav";
import Promo from "./Promo/Promo";

import { makeStyles } from "@material-ui/core";

const Main = ({ key, title, desc, keywords, children, dark, color }) => {
  const classes = useStyles();
  const screen = useScreenSize();

  return (
    <>
      <Head title={title} desc={desc} keyword={keywords} />
      <Promo />
      <Nav dark={dark} />
      <main
        key={key ? `${key}-content-main` : "content-main"}
        className={classes.main}
        style={{ paddingTop: dark ? 130 : 0 }}
      >
        {children}
      </main>
      <Footer color={color} />
    </>
  );
};

export default Main;

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#fff",
    paddingBottom: theme.spacing(5),
  },
}));
