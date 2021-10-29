import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Container, makeStyles } from "@material-ui/core";

const Promo = () => {
  const classes = useStyles();
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);

  let title = "Free Shipping on All Merch Orders to the United States!";
  let button = "Shop now";
  let link = "/shop";
  if (pathname.includes("shop") || pathname.includes("collections")) {
    title = "Spend $75, Get 20% off ALL Storkies Originals Collections!";
    button = "View cart";
    link = "/cart";
  }

  return (
    <Link href={link} passHref>
      <a>
        <div className={classes.promo}>
          <Container maxWidth="lg" className={classes.container}>
            <span>{title}</span>
            <Button className={`${classes.button} ${classes.button_secondary}`}>
              {button}
            </Button>
          </Container>
        </div>
      </a>
    </Link>
  );
};

export default Promo;

const useStyles = makeStyles((theme) => ({
  promo: {
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    padding: `${theme.spacing(0.5)}px 0`,
    height: 27,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& span": {
      //   ...theme.typography.body2,
      fontFamily: "Josefin Sans",
      fontSize: ".8rem",
      letterSpacing: 1,
      textTransform: "uppercase",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
  },
  button: {
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    height: "auto",
    marginLeft: 4,
    color: "#fff",
    opacity: 0.6,
    "&:hover": {
      opacity: 1,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  button_secondary: {},
}));
