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
<div><script async="" id="dutchie--embed__script" src="https://dutchie.com/api/v2/embedded-menu/619eb1cbf539ef00a1b12c96.js"></script></div>
       </Container>
      </section>
    </Main>
  );
};

export default DeliveryPage;
