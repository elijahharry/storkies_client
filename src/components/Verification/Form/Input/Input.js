import { TextField, makeStyles } from "@material-ui/core";

const Input = ({ label, name, value, handleChange, left, right }) => {
  const classes = useStyles();
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={handleChange}
      fullWidth
      className={`${left ? classes.left : ""} ${right ? classes.right : ""}`}
    />
  );
};

export default Input;

const useStyles = makeStyles((theme) => ({
  left: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },
  right: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
}));
