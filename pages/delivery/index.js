import React from "react";

import Main from "@components/Main/Main";

import { Container, Typography } from "@material-ui/core";

const DeliveryPage = () => {
  return (
    <Main key="delivery-page" dark={true}>
      <section key="delivery-menu">
        <Container
          maxWidth="lg"
          style={{
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <script src="https://storkies.wm.store​/static/js/embed.js"></script>
        </Container>
      </section>
    </Main>
  );
};

export default DeliveryPage;
