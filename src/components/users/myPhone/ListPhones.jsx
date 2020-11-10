import React, { useContext, useEffect } from "react";

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
import PhoneContext from "../../../context/phones/phonesContext";

export const ListPhones = () => {
  const phoneContext = useContext(PhoneContext);
  const { phones } = phoneContext;

  return (
    <Grid container>
      {phones.length > 0 &&
        phones.map((phone) => (
          <Box md={4} key={phone.id} justifyContent='center' display='flex'>
            <Box ml={4}>
              <Card variant='outlined'>
                <CardContent>
                  <Box textAlign='center'>
                    <Typography variant='h3'>
                      Telefono: {phone.tel_numero}
                    </Typography>
                  </Box>

                  <Typography variante='subtitle1'>Tipo de Telefo:</Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button
                    variant='contained'
                    color='secondary'
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                  <Button
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

      <Box display='flex' flexDirection='row-reverse' mr={6}>
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Box>
    </Grid>
  );
};
