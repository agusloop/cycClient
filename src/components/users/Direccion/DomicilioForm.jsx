import React, { useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import { createUsuario } from "../../../api/usuarios/usuariosApi";
// import { getDomicilioByZIP } from "../../api/domicilios/domiciliosAPI";

export const DomicilioForm = () => {
  //ESTADOS
  const [usuario, setUsuario] = useState({
    dir1: "",
    dir2: "",
    ciudad: "",
    estado: "",
    zip: null,
    pais: "",
  });

  //EFFECTS

  //Maneja la información recibida de los inputs
  const handleInputs = (e) => {
    e.preventDefault();
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleInfoUsuario = (e) => {
    e.preventDefault();

    createUsuario(usuario);
  };

  return (
    <>
      <Typography variant='h6'>Información acerca del Domicilio</Typography>
      <form onSubmit={handleInfoUsuario}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <TextField
              required
              name='dir1'
              label='Direccion 1'
              fullWidth
              autoComplete='shipping address-line1'
              variant='outlined'
              onChange={handleInputs}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='address2'
              name='dir2'
              label='Direccion 2 '
              fullWidth
              onChange={handleInputs}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='city'
              name='ciudad'
              label='Ciudad'
              fullWidth
              onChange={handleInputs}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='state'
              name='estado'
              label='Estado / Provincia'
              fullWidth
              onChange={handleInputs}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name='zip'
              label='Zip / Codigo Postal'
              fullWidth
              onChange={handleInputs}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name='pais'
              label='Pais'
              fullWidth
              onChange={handleInputs}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color='secondary' name='saveAddress' value='yes' />
              }
              label='Use this address for payment details'
            />
          </Grid>
        </Grid>
        <Button type='submit' variant='contained' color='primary'>
          Enviar Info
        </Button>
      </form>
    </>
  );
};
