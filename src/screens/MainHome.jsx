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

import { PDFViewer } from "@react-pdf/renderer";
import Documents from "./Documents";

export const MainHome = (props) => {
  const classes = mainHomeStyles();

  return (
    <div>
      <Grid className={classes.root}>
        <Container
          sm={4}
          md={12}
          className={[classes.image, homeStyles.full].join("")}
          fullWidth={true}
          maxWidth='xl'
        >
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='white'
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
            Cotiza en segundos y contrata en minutos, todas nuestras opciones te
            protegen con Responsabilidad Civil Obligatoria
          </Typography>
        </Container>
      </Grid>
      <Grid xs={12}>
        <Container>
          <BusquedaSeguro />
          {/* <Container>
            <PDFViewer width='500px' height='500px'>
              <Documents />
            </PDFViewer>
          </Container> */}
        </Container>
      </Grid>
    </div>
  );
};
