import React from "react";
//REACT ROUTER DOM
// import { useLocation } from "react-router-dom";

//MATERIAL UI
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
//COMPONENTES
import { BusquedaSeguro } from "../components/BusquedaSeguro";

//Estilos JS y CSS
import { mainHomeStyles } from "./styles/MainHome";
import homeStyles from "./styles/mainHome.module.css";

export const MainHome = (props) => {
  const classes = mainHomeStyles();

  return (
    <div>
      <Grid className={classes.root}>
        <Container
          sm={4}
          md={7}
          className={[classes.image, homeStyles.full].join("")}
        >
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='textPrimary'
            gutterBottom
          >
            Cotiza tu Seguro!
          </Typography>
          <Typography
            variant='h5'
            align='center'
            color='textSecondary'
            paragraph
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            nihil, et soluta maiores laboriosam vero magnam blanditiis rem
            veniam animi architecto? Velit animi quidem officiis molestias
            perferendis excepturi laborum nobis!
          </Typography>
          <BusquedaSeguro />
        </Container>
      </Grid>
    </div>
  );
};
