import { UserProvider, useUser } from "@auth0/nextjs-auth0";

import Admin from "@components/Admin/Admin";
import Heading from "@components/Main/Head/Head";

const AdminDash = () => {
  return (
    <UserProvider>
      <Heading title="Admin" />
      <Admin />
    </UserProvider>
  );
};

export default AdminDash;
