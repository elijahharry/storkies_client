import { useScreenSize } from "context/ScreenSize";
import Link from "next/link";
import Image from "next/image";

import { Typography, useTheme } from "@material-ui/core";
import useStyles from "./styles";

const Footer = ({ color }) => {
  const screen = useScreenSize();
  const classes = useStyles();
  const date = new Date().getFullYear();
  const theme = useTheme();

  let backgroundColor;
  if (!color) {
    backgroundColor = "#416D4AD9";
    backgroundColor = "#4f9cffc7";
  } else {
    backgroundColor = `${color}D9`;
  }
  // backgroundColor = `#416D4AD9`;
  // backgroundColor = `#4f9cffc7`;
  backgroundColor = theme.palette.blue.main + "c7";

  return (
    <footer id="footer" key={color ? "footer-colored" : "footer-default"}>
      <div className={classes.footer}>
        <div
          className={classes.footer__overlay}
          style={{ backgroundColor: backgroundColor }}
        >
          <div className={classes.content + " container"}>
            <img src="/svg/logo.svg" className={classes.content_logo} />
            <div className={classes.footer_links}>
              <Link href="/about" passHref>
                <Typography variant="body1">About</Typography>
              </Link>
              {/* <Link href="/partners" passHref>
                <Typography variant="body1">Partners</Typography>
              </Link> */}
              <Link href="shop" passHref>
                <Typography variant="body1">Merch</Typography>
              </Link>
              <Typography href="/delivery" variant="body1">
                Delivery
              </Typography>
              <Link href="/cart" passHref>
                <Typography variant="body1">Cart</Typography>
              </Link>
            </div>
            <Typography
              variant="body2"
              align="center"
              className={classes.copyright}
            >
              Copyright {date} © Storkies California
            </Typography>
            {screen.width > 960 && (
              <Typography
                variant="body2"
                align="center"
                className={classes.copyright}
              >
                All rights reserved. Fly high.
              </Typography>
            )}
          </div>
        </div>
        {/* <Image
          src="/images/footer-2.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        /> */}
      </div>
    </footer>
  );
};

export default Footer;
