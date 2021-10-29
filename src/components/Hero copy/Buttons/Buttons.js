import Link from "next/link";
import { useScreenSize } from "context/ScreenSize";

import { Container, Button } from "@material-ui/core";
import useStyles from "./styles";

const Buttons = ({ primary, secondary }) => {
  const classes = useStyles();
  const screen = useScreenSize();

  let buttonSize = "medium";
  screen.width < 322 && (buttonSize = "small");

  return (
    <Container maxWidth="lg" style={{ color: "#FFF" }}>
      <Link href={primary.link} passHref>
        <Button
          className={classes.button}
          id={primary.color}
          variant="contained"
          size={buttonSize}
        >
          {primary.text}
        </Button>
      </Link>
      <Link href={secondary.link} passHref>
        <Button className={classes.button} size={buttonSize} color="inherit">
          {secondary.text}
        </Button>
      </Link>
    </Container>
  );
};

export default Buttons;
