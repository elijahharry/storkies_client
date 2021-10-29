import parse from "html-react-parser";

import Multi from "./Multi/Multi";

import { Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";

const TextImage = ({ title, desc, decor, color, flipped, img, variants }) => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Grid
          container
          justify="center"
          alignItems="center"
          direction={flipped ? "row-reverse" : "row"}
          className={classes.grid}
        >
          <Grid item sm={12} md={6} spacing={3} align="left">
            <div className={classes.about__text}>
              {title && (
                <Typography
                  variant={variants?.title ? variants.title : "h3"}
                  color={color}
                  className={classes.text}
                  gutterBottom
                >
                  {title}
                </Typography>
              )}
              {desc && (
                <Typography
                  variant="body2"
                  className={classes.text}
                  gutterBottom
                >
                  {parse(desc)}
                </Typography>
              )}
              {decor && (
                <Typography
                  className={`signature ${classes.text} ${classes.decor}`}
                  color={color}
                >
                  - {decor}
                </Typography>
              )}
            </div>
          </Grid>
          <Grid item sm={12} md={6}>
            <Multi flipped={flipped} img={img} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default TextImage;
