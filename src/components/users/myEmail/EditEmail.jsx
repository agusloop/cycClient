import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  InputLabel,
  FormControl,
  Select,
  Button,
  MenuItem,
} from "@material-ui/core";

export const EditEmail = () => {
  //ESTADOS
  const [email, setEmail] = useState({
    ema_email: "",
    ema_tipo: "",
  });

  const { ema_email, ema_tipo } = email;

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
    e.preventDefault();
  };
  return (
    <Grid md={10} spacing={10}>
      <Box textAlign='center'>
        <Typography variant='h5'>Editar Email</Typography>
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
            Editar
          </Button>
        </form>
      </Box>
    </Grid>
  );
};
