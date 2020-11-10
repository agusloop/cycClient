import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  FormLabel,
  Checkbox,
  Button,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
registerLocale("es", es);
//::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::INICIO DEL COMPONENTE::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::
export const CrearCuenta = (props) => {
  const authContext = useContext(AuthContext);

  //Extraer la funcion de registrar al usuario
  const { mensaje, autenticado, registrarUsuario } = authContext;

  const [startDate, setStartDate] = useState(new Date());
  const [personalInfo, setPersonalInfo] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    email: "",
    password: "",
    genero: "",
    telefono: "",
    user_tel_tipo: "Movil",
    codigo: undefined,
  });
  //Desestructura al usuario
  const {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    email,
    password,
    genero,
    telefono,
    codigo,
    user_tel_tipo,
  } = personalInfo;
  //EFFECTS
  //Validar que el usuario este autenticado
  useEffect(() => {
    autenticado && props.history.push("/dashboard");
  }, [autenticado]);

  //Maneja la información recibida de los inputs
  const handleInputs = (e) => {
    e.preventDefault();
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleCrearCuenta = async (e) => {
    e.preventDefault();
    const newUsuario = {
      user_nombres: nombre,
      user_paterno: apellidoPaterno,
      user_materno: apellidoMaterno,
      user_main_email: email,
      user_password: password,
      user_fecha_naci: startDate,
      user_sexo: genero,
      user_tel_cel: telefono,
      user_tel_tipo,
      user_codigo_postal: codigo,
    };

    registrarUsuario(newUsuario);
  };

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Crear Cuenta
      </Typography>
      <form onSubmit={handleCrearCuenta}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              name='nombre'
              label='Nombre'
              fullWidth
              variant='outlined'
              onChange={handleInputs}
              value={nombre}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              name='apellidoPaterno'
              label='Apellido Paterno'
              fullWidth
              variant='outlined'
              onChange={handleInputs}
              value={apellidoPaterno}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              name='apellidoMaterno'
              label='Apellido Materno'
              variant='outlined'
              fullWidth
              onChange={handleInputs}
              value={apellidoMaterno}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              name='email'
              label='Email'
              variant='outlined'
              fullWidth
              onChange={handleInputs}
              value={email}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              type='password'
              name='password'
              label='Password'
              variant='outlined'
              fullWidth
              onChange={handleInputs}
              value={password}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              name='telefono'
              label='Ingresa tu telefono'
              variant='outlined'
              fullWidth
              onChange={handleInputs}
              value={telefono}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <DatePicker
              name='fecha'
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              locale='es'
              showYearDropdown
              dropdownMode='select'
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormLabel>Selecciona tu Genero</FormLabel>
            <RadioGroup row onChange={handleInputs}>
              <FormControlLabel
                value='Mujer'
                name='genero'
                label='Mujer'
                control={<Radio />}
              />

              <FormControlLabel
                value='Hombre'
                name='genero'
                label='Hombre'
                control={<Radio />}
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              name='codigo'
              label='Ingresa tu Codigo Postal'
              variant='outlined'
              fullWidth
              onChange={handleInputs}
              value={codigo}
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
          Crear Cuenta
        </Button>
      </form>
    </>
  );
};
