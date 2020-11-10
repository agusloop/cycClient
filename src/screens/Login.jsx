import React, { useState, useContext, useEffect } from "react";
import {
  Grid,
  Typography,
  TextField,
  Container,
  Link,
  Checkbox,
  Button,
  FormControlLabel,
} from "@material-ui/core";
import AuthContext from "../context/auth/authContext";
export const Login = (props) => {
  ///Contexto
  const authContext = useContext(AuthContext);
  const { autenticado, iniciarSesion } = authContext;

  //Estados
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuario;

  //REACT EFFECTS
  useEffect(() => {
    autenticado && props.history.push("/dashboard");
  }, [autenticado]);

  //Cuando cambia el valor del input
  const onChange = (e) => {
    //Spread operator para mantener los datos y no cambien
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //Validar que no haya campos vacios

    //Pasarlo al action
    const newDatos = {
      user_main_email: email,
      user_password: password,
    };
    iniciarSesion(newDatos);
  };

  return (
    <>
      <Container component='main' maxWidth='xs'>
        <div>
          <Typography component='h1' variant='h5'>
            Iniciar Sesion
          </Typography>
          <form onSubmit={onSubmit}>
            <TextField
              variant='outlined'
              required
              fullWidth
              label='Email Address'
              name='email'
              autoFocus
              value={email}
              onChange={onChange}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              value={password}
              onChange={onChange}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button type='submit' fullWidth variant='contained' color='primary'>
              Iniciar Sesion
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {"No tienes una cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};
