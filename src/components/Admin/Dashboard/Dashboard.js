import { useState, useEffect } from "react";
import * as api from "@utils/server";
import User from "./User/User";
import Manage from "./Manage/Manage";
import axios from "axios";

import {
  Grid,
  Container,
  makeStyles,
  CircularProgress,
  Typography,
} from "@material-ui/core";

const Dashboard = ({ user }) => {
  const classes = useStyles();

  const [brands, setBrands] = useState(null);
  const [favorites, setFavorites] = useState(null);
  const [products, setProducts] = useState(null);
  const [changes, setChanges] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    const { brands, favorites, products } = await api.fetchAll();
    setBrands(brands);
    setFavorites(favorites);
    setProducts(products);
    setLoading(false);
  }, [changes]);

  const fetchEm = async (type) => {
    try {
      const { data } = await axios.get(`${process.env.BACKEND}/${type}/fetch`);
      return data;
    } catch (error) {
      return null;
    }
  };

  const revalidate = () => {
    setLoading(true);
    setChanges(changes + 1);
  };

  const [tab, setTab] = useState("brands");

  return (
    <>
      <User user={user} />
      <section className="grey">
        <Container maxWidth="lg">
          {loading ? (
            <div className={classes.loading}>
              <CircularProgress thickness={9} size={80} />
              <Typography variant="h5" align="center" color="primary">
                <strong>Fetching fresh data...</strong>
              </Typography>
              <Typography variant="body2" align="center">
                Oh server, where art thou?
              </Typography>
            </div>
          ) : (
            <Manage
              tab={tab}
              setTab={setTab}
              brands={brands}
              favorites={favorites}
              products={products}
              loading={loading}
              revalidate={revalidate}
            />
          )}
        </Container>
      </section>
    </>
  );
};

export default Dashboard;

const useStyles = makeStyles((theme) => ({
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 550,
    flexDirection: "column",
    "& h5": {
      marginTop: theme.spacing(3),
    },
    "& p": {
      marginTop: theme.spacing(0.5),
    },
  },
}));
