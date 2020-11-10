import React, { useState, useContext } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {
  Typography,
  Grid,
  TextField,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import AuthContext from "../../../context/auth/authContext";
import EmailContext from "../../../context/emails/emailsContext";
export const AddEmail = () => {
  //CONTEXTOS
  const authContext = useContext(AuthContext);
  const { usuario } = authContext;

  const emailContext = useContext(EmailContext);
  const { agregarEmail, getEmailsbyUser } = emailContext;

  //ESTADOS
  const [email, setEmail] = useState({
    ema_user: "",
    ema_email: "",
    ema_tipo: "",
    ema_password: "",
  });

  const { ema_email, ema_tipo, ema_password } = email;

  //LISTA
  const arrayTipo = [
    {
      text: "Personal",
      value: "Personal",
    },
    {
      text: "Trabajo",
      value: "Trabajo",
    },
    {
      text: "Casa",
      value: "Casa",
    },
  ];

  const handleInputChange = (e) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  };

  const sendForm = (e) => {
    console.log("Sejecuto");

    e.preventDefault();
    agregarEmail(email);
    //Resetear el form
    setEmail({
      ema_email: "",
      ema_tipo: "",
      ema_password: "",
    });

    console.log("aDNO ACA");
  };

  return (
    <Grid md={10} spacing={10}>
      <Box textAlign='centner'>
        <Typography variant='h5'>Agregar Email</Typography>
      </Box>
      <Box>
        <form onSubmit={sendForm}>
          <Grid container spacing={6}>
            <Grid item xs={4}>
              <TextField
                required
                label='Email'
                name='ema_email'
                fullWidth
                variant='outlined'
                value={ema_email}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                type='password'
                required
                label='Password'
                name='ema_password'
                fullWidth
                variant='outlined'
                value={ema_password}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={4}>
              <InputLabel>Tipo de Email</InputLabel>
              <FormControl>
                <Select
                  value={ema_tipo}
                  onChange={handleInputChange}
                  variant='outlined'
                  name='ema_tipo'
                >
                  {arrayTipo.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                      {item.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Button type='submit' variant='contained' color='primary'>
            Agregar Email
          </Button>
        </form>
      </Box>
    </Grid>
  );
};
