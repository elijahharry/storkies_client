import React, { useEffect, useState } from "react";
import Script from "next/script";
import { makeStyles } from "@material-ui/core";
import { es } from "date-fns/locale";

const Menu = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setMenu(true);
    }
  }, []);

  const classes = useStyles();

  return (
    <section className={classes.menu}>
      {menu && (
        <div>
          <Script
            async=""
            id="dutchie--embed__script"
            type="text/javascript"
            src="https://dutchie.com/api/v2/embedded-menu/619eb1cbf539ef00a1b12c96.js"
          />
        </div>
      )}
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
