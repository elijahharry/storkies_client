import { useUser } from "@auth0/nextjs-auth0";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";

import { Typography } from "@material-ui/core";

const Admin = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <Typography variant="body1">Loading...</Typography>;

  return user ? <Dashboard user={user} /> : <Login />;
};

export default Admin;
