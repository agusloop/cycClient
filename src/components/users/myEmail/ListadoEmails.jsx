import React, { useContext, useEffect } from "react";
import moment from "moment";
import EmailContext from "../../../context/emails/emailsContext";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { AddEmail } from "./AddEmail";
import { EditEmail } from "./EditEmail";
import { useState } from "react";

export const ListadoEmails = (props) => {
  const emailContext = useContext(EmailContext);
  const { emails, eliminarEmail, getEmailsbyUser } = emailContext;

  const handleEliminarEmail = (id) => {
    eliminarEmail(id);
    getEmailsbyUser();
    console.log("pase aqui");
  };

  return (
    <Grid container>
      {emails.length > 0 &&
        emails.map((email) => (
          <Box md={4} key={email.id} justifyContent='center' display='flex'>
            <Box ml={4}>
              <Card variant='outlined'>
                <CardContent>
                  <Box textAlign='center'>
                    <Typography variant='h3'>
                      Email: {email.ema_email}
                    </Typography>
                  </Box>

                  <Typography variante='subtitle1'>
                    Tipo de Email: {email.ema_tipo}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button
                    onClick={() => handleEliminarEmail(email._id)}
                    variant='contained'
                    color='secondary'
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => handleEliminarEmail(email._id)}
                    variant='contained'
                    color='primary'
                    startIcon={<EditIcon />}
                  >
                    Editar
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Box>
        ))}

      <AddEmail />
      <EditEmail />

      <Box display='flex' flexDirection='row-reverse' mr={6}>
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Box>
    </Grid>
  );
};
