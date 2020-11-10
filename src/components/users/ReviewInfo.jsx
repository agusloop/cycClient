import React from "react";
import Box from "@material-ui/core/Box";
import { Typography, Grid } from "@material-ui/core";

export const ReviewInfo = () => {
  return (
    <Box m={5}>
      <Typography variant='h6' gutterBottom>
        Checa tu Información
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h4' gutterBottom>
            Informacion Personal
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>Direcciones</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
