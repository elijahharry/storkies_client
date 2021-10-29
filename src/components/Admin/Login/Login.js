import { Button } from "@material-ui/core";

const Login = () => {
  return (
    <section>
      <Button
        variant="contained"
        color="primary"
        href="/api/auth/login?returnTo=/admin"
      >
        Login
      </Button>
    </section>
  );
};

export default Login;
