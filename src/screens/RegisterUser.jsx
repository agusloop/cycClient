import React, { useState } from "react";
//LIBRERIAS
import { Grid, Paper, Tabs, Tab, Button, Container } from "@material-ui/core";
import { PersonOutlineOutlined } from "@material-ui/icons";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import RateReviewIcon from "@material-ui/icons/RateReview";

//COMPONENTES
import { PersonalInfo } from "../components/users/PersonalInfo.jsx";
import { DomicilioForm } from "../components/users/DomicilioForm.jsx";
import { ReviewInfo } from "../components/users/ReviewInfo.jsx";

// Nombre de las  tabs para el proceso de registro
const steps = ["Personal", "Direccion", "Review"];
//Funcion para manejar las Tabs toma como parametro una tab
const getStepContenido = (step) => {
  switch (step) {
    case 0:
      return <PersonalInfo />;

    case 1:
      return <DomicilioForm />;
    case 2:
      return <ReviewInfo />;

    default:
      throw new Error("Unknown step");
  }
};

export const RegisterUser = () => {
  //Llamar al estado del Step
  const [activeStep, setActiveStep] = useState(0);
  //Handle Siguiente Tab
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  //Handle Previa Tab
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  //Manejador de CLicks en la tab
  const handleChangeTab = (e, newValue) => {
    setActiveStep(newValue);
  };

  return (
    <>
      <div>
        <Paper square>
          <Tabs
            indicatorColor='primary'
            textColor='primary'
            centered
            value={activeStep}
            onChange={handleChangeTab}
          >
            <Tab label='Personal' icon={<PersonOutlineOutlined />} />
            <Tab label='Domicilio' icon={<LocationOnOutlinedIcon />} />
            <Tab label='Checa tu informacion' icon={<RateReviewIcon />} />
          </Tabs>
        </Paper>
      </div>
      <Container maxWidth='md'>
        <Grid
          container
          direction='row'
          justify='space-around'
          alignItems='center'
        >
          {getStepContenido(activeStep)}
          <div>
            {/* Verificar que el buton sea mayor a cero para  mostrar el back */}
            {activeStep !== 0 && (
              <Button variant='outlined' color='primary' onClick={handleBack}>
                Atrás
              </Button>
            )}
            <Button variant='outlined' color='primary' onClick={handleNext}>
              {/* Valida que que si llego al final de las operaciones mostrará "Place" */}
              {activeStep === steps.length - 1 ? "Registrarse" : "Siguiente"}
            </Button>
          </div>
        </Grid>
      </Container>
    </>
  );
};
