import useStyles from "./styles";
import { Typography } from "@material-ui/core";
const Price = ({ price, color, show }) => {
  const classes = useStyles();

  const colorClass = color === "primary" ? classes.primary : classes.secondary;

  return (
    <>
      {show ? (
        <div className={`${classes.tag} ${colorClass}`}>
          <Typography variant="h4">${price}</Typography>
        </div>
      ) : (
        <div
          className={`${classes.tag} ${classes.skeleton} MuiSkeleton-root MuiSkeleton-wave`}
        >
          <Typography variant="h4">${price}</Typography>
        </div>
      )}
    </>
  );
};

export default Price;
