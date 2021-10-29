import { Button, Container, Typography } from "@material-ui/core";
import useStyles from "./styles";

const User = ({ user }) => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Typography variant="h1" align="center">
          Admin Dash
        </Typography>
        <Typography variant="subtitle2" align="center">
          Logged in as {user.name}
        </Typography>
        <Button
          href="/api/auth/logout?returnTo=/admin"
          variant="contained"
          color="primary"
          size="large"
        >
          Log-out
        </Button>
      </Container>
    </section>
  );
};

export default User;
