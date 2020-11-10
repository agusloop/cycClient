import React, { useContext, useState, useEffect } from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import EmailContext from "../../../context/emails/emailsContext";
import { ListadoEmails } from "./ListadoEmails";

export const MyEmail = () => {
  //Crear Contexto
  const emailContext = useContext(EmailContext);

  const { getEmailsbyUser, emails, mensaje, autenticado } = emailContext;

  useEffect(() => {
    getEmailsbyUser();
  }, []);

  return autenticado === null || autenticado === false ? (
    <Grid md={10} spacing={8}>
      <Typography>
        No estás autorizado para ver la informacion {mensaje.message}
      </Typography>
    </Grid>
  ) : (
    <Grid md={10} spacing={10}>
      <Box textAlign='center'>
        <Typography variant='h2'>Mis Emails</Typography>
      </Box>
      <ListadoEmails />
    </Grid>
  );
};
