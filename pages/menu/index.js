import React from "react";
import Head from "@components/Main/Head/Head";
import Menu from "@components/Menu/Menu";
import Promo from "@components/Main/Promo/Promo";
import Main from "@components/Main/Main";

const DeliveryPage = () => {
  return (
    <>
      <Head title="Delivery" />
      <Promo />
      <Main dark={true} title="Delivery">
        <Menu />
      </Main>
    </>
  );
};

export default DeliveryPage;
