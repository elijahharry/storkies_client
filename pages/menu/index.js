import React from "react";
import Nav from "@components/Main/Nav/Nav";
import Head from "@components/Main/Head/Head";
import Menu from "@components/Menu/Menu";
import Promo from "@components/Main/Promo/Promo";

const DeliveryPage = () => {
  return (
    <>
      <Head title="Delivery" />
      <Promo />
      <Nav dark={true} />
      <main>
        <Menu />
      </main>
    </>
  );
};

export default DeliveryPage;
