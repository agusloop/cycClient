import React, { useContext, useEffect } from "react";
import UserNav from "../../../components/users/nav/UserNav";
import { Grid, Typography } from "@material-ui/core";
import AuthContext from "../../../context/auth/authContext";
import EmailContext from "../../../context/emails/emailsContext";

export const MyProfile = (props) => {
  //CREAR EL CONTEXTO
  const authContext = useContext(AuthContext);
  const { autenticado, usuarioAutenticado, mensaje, usuario } = authContext;

  const emailContext = useContext(EmailContext);
  const { getEmailsbyUser } = emailContext;

  //REACT - EFFECTS
  useEffect(() => {
    // autenticado === true ? alert("Estas") : props.history.push("/registro");
    usuarioAutenticado();
  }, [autenticado]);

  return autenticado !== true && !usuario ? (
    <Grid md={10} spacing={8}>
      <Typography>No estás autorizado para ver la informacion</Typography>
    </Grid>
  ) : (
    <Grid md={10} spacing={8}>
      <Typography variant='h2'>
        Bienvenido {usuario.data.user_nombres}
      </Typography>
    </Grid>
  );
};
