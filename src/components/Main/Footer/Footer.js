import { useScreenSize } from "context/ScreenSize";
import Link from "next/link";
import Image from "next/image";

import { Typography, useTheme, Container } from "@material-ui/core";
import useStyles from "./styles";

const Footer = ({ color }) => {
  const screen = useScreenSize();
  const classes = useStyles();
  const date = new Date().getFullYear();
  const theme = useTheme();

  return (
    <footer id="footer" className={classes.footer}>
      <Container maxWidth="lg" className={classes.content}>
        <div className={classes.main}>
          <Link href="/" passHref>
            <a className={classes.logos}>
              <img src="/svg/logo-dark.svg" className={classes.content_logo} />
              <img src="/svg/fly-high.svg" className={classes.flyhigh} />
            </a>
          </Link>
          <div className={classes.text}>
            {/* <span>Site Menu</span> */}
            {/* <div className={classes.titles}>
              <span className="menu-title">Site Menu</span>
            </div> */}
            <ul className={classes.links}>
              <Link href="/about" passHref>
                <a>
                  <li className={classes.link}>About</li>
                </a>
              </Link>
              <Link href="/shop" passHref>
                <a>
                  <li className={classes.link}>Shop</li>
                </a>
              </Link>
              <Link href="/cart" passHref>
                <a>
                  <li className={classes.link}>Cart</li>
                </a>
              </Link>
              <a href="/delivery">
                <li className={classes.link}>Delivery</li>
              </a>
            </ul>
            <Typography
              className={classes.copyright_text}
              variant="body2"
              align="center"
            >
              Copyright {date} © Storkies. All rights reserved.
            </Typography>
          </div>
        </div>
        {/* <div className={classes.copyright}>
          <Typography component="span" variant="body2" align="center">
            Copyright {date} © Storkies. All rights reserved.
          </Typography>
        </div> */}
      </Container>
      {/* <img className={classes.clouds} src="/svg/cloud-slide-xl.svg" /> */}
      <img className={classes.clouds_static} src="/svg/clouds-group.svg" />
    </footer>
  );
};

export default Footer;
