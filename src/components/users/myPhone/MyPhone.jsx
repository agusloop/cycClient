import React, { useContext, useState, useEffect } from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import PhoneContext from "../../../context/phones/phonesContext";
import { ListPhones } from "./ListPhones";
export const MyPhone = () => {
  //Crear Context
  const phoneContext = useContext(PhoneContext);

  const { getPhonesbyUser } = phoneContext;

  useEffect(() => {
    getPhonesbyUser();
  }, []);

  return (
    <Grid container>
      <Grid md={10} spacing={8}>
        <Box textAlign='center'>
          <Typography variant='h2'>Mis Telefonon</Typography>
        </Box>
        <ListPhones />
      </Grid>
    </Grid>
  );
};
