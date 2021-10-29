import { useEffect } from "react";

import { makeStyles } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

const DateInput = ({
  name,
  label,
  value,
  contact,
  setContact,
  left,
  right,
}) => {
  const classes = useStyles();

  const handleChange = (date) => {
    setContact({ ...contact, [name]: date });
  };

  return (
    <KeyboardDatePicker
      autoOk
      variant="inline"
      inputVariant="outlined"
      label={label}
      format="MM/dd/yyyy"
      inputVariant="outlined"
      name={name}
      value={contact[name]}
      onChange={handleChange}
      className={`${left ? classes.left : ""} ${right ? classes.right : ""}`}
      fullWidth
    />
  );
};

export default DateInput;

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
