import { useState } from "react";

import { Button, ButtonBase } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import useStyles from "./styles";

const IDUpload = ({ contact, setContact }) => {
  const classes = useStyles();
  const [photo, setPhoto] = useState(null);

  const handleUpload = (e) => {
    setContact({ ...contact, id_photo: e.target.files[0] });
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const empty = () => {
    setContact({ ...contact, id_photo: null });
    setPhoto(null);
  };

  return (
    <>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
        type="file"
        onChange={handleUpload}
      />
      <label htmlFor="raised-button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          fullWidth
          className={classes.upload}
        >
          <ContactMailIcon /> Upload Photo of ID (Front)
        </Button>
      </label>
      <div className={classes.uploads}>
        {photo ? (
          <>
            <img src={photo} />
            <ButtonBase onClick={empty} className={classes.empty}>
              <CloseIcon />
            </ButtonBase>
          </>
        ) : (
          <span>Waiting for license photo...</span>
        )}
      </div>
      {photo && (
        <p className={classes.verify}>
          Confirm: You uploaded a photo of the <strong>front</strong> of your
          ID, correct?
        </p>
      )}
    </>
  );
};

export default IDUpload;
