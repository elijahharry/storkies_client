import { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";

import { TextField, Button, Typography, Container } from "@material-ui/core";
import useStyles from "./styles";

const MailChimp = () => {
  const classes = useStyles();
  const [subscriber, setSubscriber] = useState({
    first: "",
    last: "",
    email: "",
  });

  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: subscriber.email,
        first_name: subscriber.first,
        last_name: subscriber.last,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const { error } = await res.json();
    if (error) {
      setMessage(error);
    } else {
      setMessage("Success! 🎉 You are now subscribed to the newsletter.");
    }
  };

  return (
    <section id="#newsletter" className={classes.section}>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h5" align="center">
          Get the latest news on products & promos.
        </Typography>
        <AnimateSharedLayout>
          <motion.div layout={true} className={classes.holder}>
            <form layout={true} className={classes.mc} onSubmit={handleSubmit}>
              <TextField
                name="first"
                label="First name"
                value={subscriber.first}
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setSubscriber({
                    ...subscriber,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <TextField
                name="last"
                label="Last name"
                value={subscriber.last}
                fullWidth
                variant="outlined"
                onChange={(e) =>
                  setSubscriber({
                    ...subscriber,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <TextField
                name="email"
                label="Email"
                type="email"
                value={subscriber.email}
                required
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  setSubscriber({
                    ...subscriber,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                className="gradient-primary"
              >
                <Typography variant="body2">Be notified</Typography>
              </Button>
            </form>
          </motion.div>
          {message && (
            <motion.div
              layout={true}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className={classes.message}
            >
              <Typography variant="body1" align="center">
                {message}
              </Typography>
            </motion.div>
          )}
        </AnimateSharedLayout>
      </Container>
    </section>
  );
};

export default MailChimp;
