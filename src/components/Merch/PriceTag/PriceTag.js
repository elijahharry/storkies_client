import useStyles from "./styles";
import { Typography } from "@material-ui/core";
const PriceTag = ({ price }) => {
  const classes = useStyles();

  return (
    <div className={classes.tag}>
      <Typography variant="h4">{price}</Typography>
    </div>
  );
};

export default PriceTag;
