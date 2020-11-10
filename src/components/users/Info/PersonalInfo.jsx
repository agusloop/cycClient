import React, { useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
registerLocale("es", es);

export const PersonalInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [personalInfo, setPersonalInfo] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    email: "",
    password: "",
    fecha: new Date(),
  });

  //Manejar la información del DatePicker
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Fecha", selectedDate);
  };
  //Maneja la información recibida de los inputs
  const handleInputs = (e) => {
    e.preventDefault();
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  //Manejador de toda la informacion del Formulario
  // const handlePersonalInformacion = (e) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Informacion del Usuario
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name='nombre'
              label='Nombre'
              fullWidth
              variant='outlined'
              onChange={handleInputs}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='apellidoPaterno'
              name='apellidoPaterno'
              label='Apellido Paterno'
              fullWidth
              variant='outlined'
              onChange={handleInputs}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='apellidoMaterno'
              name='apellidoMaterno'
              label='Apellido Materno'
              variant='outlined'
              fullWidth
              onChange={handleInputs}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='email'
              name='email'
              label='Email'
              variant='outlined'
              fullWidth
              onChange={handleInputs}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='password'
              name='password'
              label='Password'
              variant='outlined'
              fullWidth
              onChange={handleInputs}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePicker
              name='fecha'
              selected={selectedDate}
              value={selectedDate}
              onChange={handleDateChange}
              locale='es'
              showYearDropdown
              dropdownMode='select'
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
