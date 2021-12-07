import React from "react";
import Nav from "@components/Main/Nav/Nav";
import Head from "@components/Main/Head/Head";
import Menu from "@components/Menu/Menu";
import Promo from "@components/Main/Promo/Promo";
import Footer from "@components/Main/Footer/Footer";

const DeliveryPage = () => {
  return (
    <>
      <Head title="Delivery" />
      <Promo />
      <Nav dark={true} />
      <main style={{ backgroundColor: "rgb(243, 246, 248)" }}>
        <Menu />
      </main>
      <Footer />
    </>
  );
};

export default DeliveryPage;
