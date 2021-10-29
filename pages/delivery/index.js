import React from "react";

import Main from "@components/Main/Main";

import { Container, Typography } from "@material-ui/core";

const DeliveryPage = () => {
  return (
    <Main dark={true}>
      <section>
        <Container
          maxWidth="lg"
          style={{
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <script src="https://storkies.wm.store​/static/js/embed.js"></script>
          {/* <Typography variant="h2" align="center" gutterBottom>
            Flight Delayed
          </Typography>
          <Typography variant="h5" align="center">
            Coming soon!
          </Typography> */}
        </Container>
      </section>
    </Main>
  );
};

export default DeliveryPage;
