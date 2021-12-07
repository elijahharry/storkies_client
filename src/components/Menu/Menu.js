import React, { useEffect, useState } from "react";
import Script from "next/script";
import { makeStyles } from "@material-ui/core";
import { es } from "date-fns/locale";

const Menu = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setMenu(true);
      const timer = setTimeout(() => {
        document
          .getElementById("menu-wrapper")
          .appendChild(document.getElementById("dutchie--embed__iframe"));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const classes = useStyles();

  return (
    <section className={classes.menu}>
      <div id="menu-wrapper">
        <Script
          async=""
          type="text/javascript"
          src="https://dutchie.com/api/v2/embedded-menu/619eb1cbf539ef00a1b12c96.js"
          id="dutchie--embed__script"
        />
        {/* <iframe
          class="dutchie--iframe"
          id="dutchie--embed__iframe"
          frameborder="0"
          title="Dutchie Menu"
          src="https://dutchie.com/embedded-menu/storkies/?_ga=2.147004471.1433734023.1638864482-1876823631.1638504972"
          allow="camera;microphone;geolocation;gyroscope"
          style={{
            width: "100%",
            minWidth: "100%",
            border: "none",
            height: "2107px !important",
          }}
        ></iframe> */}
      </div>
    </section>
  );
};

export default Menu;

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: "rgb(243, 246, 248)",
    paddingTop: 110,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 80,
    },
  },
}));
