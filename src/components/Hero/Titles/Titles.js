import { Container, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Titles = ({ title, subtitle, main }) => {
  const classes = useStyles();
  return (
    <div className={classes.titles}>
      <div className={classes.title}>
        <Typography variant="h1" align="center" className={classes.title}>
          <strong>{title}</strong>
        </Typography>
      </div>
      <div className={classes.subtitle}>
        <Typography
          variant="subtitle1"
          align="center"
          className={classes.subtitle}
        >
          {subtitle}
        </Typography>
      </div>
    </div>
  );
};

export default Titles;
