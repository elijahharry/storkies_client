import { useState, useEffect } from "react";
import Router from "next/router";
import axios from "axios";

import {
  Button,
  Typography,
  makeStyles,
  CircularProgress,
  LinearProgressWithLabel,
  LinearProgress,
} from "@material-ui/core";

const AddFavorites = ({ old, revalidate }) => {
  const classes = useStyles();
  const [images, setImages] = useState("");
  const [sending, setSending] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadProgress(0);
    setSending(true);
    const formData = new FormData();
    const imgArray = Array.from(images);
    formData.append("old", JSON.stringify(old));
    imgArray.forEach((img) => formData.append("images", img));
    const res = await fetch("/api/access");
    res.json().then(async (data) => {
      try {
        await axios.post(`${process.env.BACKEND}/fav`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${data.token}`,
          },
          onUploadProgress: (data) => {
            setUploadProgress(Math.round((100 * data.loaded) / data.total));
          },
        });
        setImages("");
        revalidate();
        setSending(false);
        setUploadProgress(0);
      } catch (e) {
        console.log(e);
        setSending(false);
        setUploadProgress(0);
      }
    });
  };

  useEffect(() => {
    console.log(uploadProgress);
  }, [uploadProgress]);

  const [date, setDate] = useState({
    day: new Date(old.last_updated).toLocaleDateString(),
    time: new Date(old.last_updated).toLocaleTimeString(),
  });

  useEffect(() => {
    setDate({
      day: new Date(old.last_updated).toLocaleDateString(),
      time: new Date(old.last_updated).toLocaleTimeString(),
    });
  }, [old]);

  return !sending ? (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Typography variant="h6" align="center">
        Last updated on {date.day} at {date.time}
      </Typography>
      <Typography variant="body1" align="center">
        Please note that uploading new images will delete all of the previous
        favorites.
      </Typography>
      <div className={classes.row}>
        <input
          type="file"
          multiple
          name="images"
          onClick={(e) => (e.target.value = null)}
          onChange={(e) => setImages(e.target.files)}
          required
          className={classes.input}
        />
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          size="large"
        >
          Submit
        </Button>
      </div>
    </form>
  ) : (
    <div className={classes.loading}>
      <CircularProgress thickness={6} size={60} color="secondary" />
      <Typography variant="h5" align="center">
        <strong>
          {uploadProgress !== 100
            ? "Uploading images..."
            : "Processing data..."}
        </strong>
      </Typography>

      <Typography variant="body2" align="center">
        {uploadProgress !== 100
          ? "Your images might take a while to upload. Hang tight."
          : "Please wait while we process all the images."}
      </Typography>
      <div className={classes.upload_progress}>
        <LinearProgress
          color="primary"
          style={{ width: 400, height: 10 }}
          variant="determinate"
          value={uploadProgress}
        />
        <span>
          <strong>{uploadProgress}%</strong> Uploaded
        </span>
      </div>
    </div>
  );
};

export default AddFavorites;

const useStyles = makeStyles((theme) => ({
  form: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(4),
    height: 200,
    "& p": {
      width: "70%",
      [theme.breakpoints.down("sm")]: {
        width: "auto",
      },
    },
    [theme.breakpoints.down("sm")]: {
      height: 250,
    },
  },
  input: {
    margin: `${theme.spacing(3)}px 0`,
  },
  loading: {
    height: 220,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h5": {
      marginTop: theme.spacing(3),
    },
    "& p": {
      marginTop: theme.spacing(0.5),
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      height: 250,
    },
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  upload_progress: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& span": {
      fontSize: ".7rem",
      textTransform: "uppercase",
      marginTop: 10,
      color: theme.palette.primary.main,
    },
  },
}));
