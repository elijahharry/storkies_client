import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

import {
  Fade,
  Typography,
  Switch,
  Radio,
  RadioGroup,
  FormControlLabel,
  withStyles,
  Button,
  Grid,
} from "@material-ui/core";
import useStyles from "./styles";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const Gate = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [age, setAge] = useState("false");

  const [user, setUser] = useState({ over21: "false" });

  useEffect(() => {
    const checkLocal = () => {
      if (localStorage.getItem("user") !== null) {
        const grabbed = JSON.parse(localStorage.getItem("user"));
        setUser(grabbed);
      }
    };
    checkLocal();
  }, []);

  useEffect(() => {
    if (user.over21 === "true") {
      localStorage.setItem("user", JSON.stringify(user));
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ over21: age });
  };

  return (
    <Fade in={open} timeout={{ appear: 0, enter: 0, exit: 1000 }}>
      <section id="agegate" className={classes.age_verification}>
        <div className={classes.prompt}>
          <div className={classes.paper}>
            <img
              src="/svg/logo-dark-circle.svg"
              className={classes.logo}
              alt="Storkies logo"
            />
            <form
              onSubmit={handleSubmit}
              className={classes.form}
              onClick={() => 1 + 1}
            >
              <div className={classes.main}>
                <Typography
                  align="center"
                  variant="body1"
                  className={classes.text}
                >
                  Are you over the age of 21 or have a medical license to
                  purchase and consume cannabis?
                </Typography>
                <RadioGroup
                  row
                  name="over21"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  defaultChecked="false"
                  className={classes.radios}
                >
                  <FormControlLabel
                    className={classes.largeRadio}
                    control={<SecondaryRadio />}
                    value="false"
                    label="No"
                  />
                  <FormControlLabel
                    className={classes.largeRadio}
                    control={<PrimaryRadio />}
                    value="true"
                    label="Yes"
                    color="primary"
                  />
                </RadioGroup>
              </div>
              <div className={classes.enter}>
                {age === "true" ? (
                  <Button
                    style={{ color: "#FFF" }}
                    variant="contained"
                    color="secondary"
                    type="submit"
                    size="medium"
                    className={classes.enter_button}
                  >
                    <LockOpenIcon />
                    <span className={classes.enter__button_text}>Enter</span>
                  </Button>
                ) : (
                  <Button
                    style={{ backgroundColor: "#fff" }}
                    variant="contained"
                    size="medium"
                    disabled
                  >
                    <LockIcon />
                    <span className={classes.enter__button_text}>Locked</span>
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
        <div id="disclaimer" className={classes.disclaimer}>
          <Typography variant="overline" align="center">
            By entering, you acknowledge this site uses cookies to store your
            age.
          </Typography>
        </div>
      </section>
    </Fade>
  );
};

export default Gate;

const PrimaryRadio = withStyles({
  root: {
    padding: "9px",
    height: 15,
    weight: 15,
    "&.Mui-checked": {
      color: "#416D4A",
    },
  },
})(Radio);

const SecondaryRadio = withStyles({
  root: {
    padding: "9px",
    height: 15,
    weight: 15,
    "&.Mui-checked": {
      color: "#F49302",
    },
  },
})(Radio);
