import { useState, useEffect } from "react";
import axios from "axios";

import Input from "./Input/Input";
import DateInput from "./DateInput/DateInput";
import IDUpload from "./IDUpload/IDUpload";

import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();

  const [contact, setContact] = useState({
    first_name: "",
    last_name: "",
    birthdate: new Date(),
    id_photo: null,
    id_number: "",
    id_expiration: null,
  });
  useEffect(() => {
    let current = new Date();
    current.setFullYear(current.getFullYear() - 21);
    setContact({ ...contact, birthdate: current });
  }, []);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <div style={{ padding: `300px 0` }}>
      <form onSubmit={handleSubmit}>
        <div className={classes.row}>
          <Input
            name="first_name"
            label="First name"
            value={contact.first_name}
            handleChange={handleChange}
            left={true}
          />
          <Input
            name="last_name"
            label="Last name"
            value={contact.last_name}
            handleChange={handleChange}
            right={true}
          />
        </div>
        <div className={classes.row}>
          <DateInput
            label="Birth date"
            name="birthdate"
            contact={contact}
            setContact={setContact}
          />
        </div>
        <div className={classes.row}>
          <Input
            name="id_number"
            label="State ID Number"
            value={contact.id_number}
            handleChange={handleChange}
            left={true}
          />
          <DateInput
            label="State ID Expiration"
            name="id_expiration"
            contact={contact}
            setContact={setContact}
            right={true}
          />
        </div>
        <IDUpload contact={contact} setContact={setContact} />
      </form>
    </div>
  );
};

export default Form;
