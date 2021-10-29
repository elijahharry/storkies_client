import { useState } from "react";
import ManageBrands from "./Brands/ManageBrands";
import ManageProducts from "./Products/ManageProducts";
import ManageFavorites from "./Favorites/ManageFavorites";

import { Tabs, Tab, TabPanel, makeStyles } from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import LoyaltyIcon from "@material-ui/icons/Loyalty";

const Manage = ({ tab, setTab, brands, favorites, products, revalidate }) => {
  const classes = useStyles();

  return (
    <div className={classes.manage}>
      <div className={classes.tabs}>
        <Tabs
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          value={tab}
          onChange={(e, n) => setTab(n)}
        >
          {brands && (
            <Tab icon={<LoyaltyIcon />} label="brands" value="brands" />
          )}
          {products && (
            <Tab icon={<LocalMallIcon />} label="products" value="products" />
          )}
          {favorites && (
            <Tab icon={<CameraAltIcon />} label="favorites" value="favorites" />
          )}
        </Tabs>
      </div>
      {tab === "brands" && brands && (
        <ManageBrands brands={brands} revalidate={revalidate} />
      )}
      {tab === "products" && products && (
        <ManageProducts
          products={products}
          brands={brands}
          revalidate={revalidate}
        />
      )}
      {tab === "favorites" && favorites && (
        <ManageFavorites favorites={favorites} revalidate={revalidate} />
      )}
    </div>
  );
};

export default Manage;

const useStyles = makeStyles((theme) => ({
  manage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(10),
  },
  tabs: {
    backgroundColor: "#fff",
    boxShadow: theme.shadows[1],
    marginBottom: theme.spacing(3),
  },
}));
