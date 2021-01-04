import React from "react";
import moment from "moment";
import "./cotizaciones.css";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Box,
} from "@material-ui/core";
import gnpImg from "../../assets/image/GNP.png";
export const Cotizaciones = (props) => {
  const { data } = props.cotizacion;

  const fechaInicio = moment(data.SOLICITUD.FCH_INICIO_VIGENCIA).format(
    "DD-MM-YYYY"
  );
  const fechaFinal = moment(data.SOLICITUD.FCH_FIN_VIGENCIA).format(
    "DD-MM-YYYY"
  );

  console.log("Aqui", data.PAQUETES.PAQUETE);

  const array = data.PAQUETES.PAQUETE;
  const [{ TOTALES }] = array;
  const prima = TOTALES.TOTAL_PRIMA;
  const [{ CONCEPTO_ECONOMICO }] = prima;
  console.log("CP", CONCEPTO_ECONOMICO);
  const x = CONCEPTO_ECONOMICO[10];

  return (
    <Grid xs={6} className='mainContainer'>
      <Typography variant='h4' align='center' color='textPrimary'>
        Tu cotizacion
      </Typography>

      <Grid>
        <Card variant='outlined'>
          <CardContent>
            <CardMedia image={gnpImg} title='GNP' className='imgAuto' />
            <Grid xs={6}>
              {data.PAQUETES.PAQUETE.map((el) => (
                <Typography variant='h5' component='h2'>
                  Cobertura: {el.DESC_PAQUETE}
                </Typography>
              ))}

              <Typography variant='h5' component='h2'>
                {x.MONTO}
              </Typography>
              <Typography color='textSecondary'>Precio</Typography>
              <Typography variant='body2' component='p'></Typography>
            </Grid>

            <CardActions>
              <Grid xs={6}>
                <Typography variant='h6'>Fecha de Inicio:</Typography>
                <Typography color='primary'> {fechaInicio}</Typography>
              </Grid>
              <Grid xs={6}>
                <Typography variant='h6'>Fecha de Fin de Vigencia:</Typography>
                <Typography color='primary'>{fechaFinal}</Typography>
              </Grid>
            </CardActions>
          </CardContent>
          <CardActions>
            <Box display='flex' justifyContent='center'>
              <Box>
                <Button variant='contained' color='primary'>
                  Guardar Cotizacion
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Grid>

      {data && (
        <Typography
          variant='h2'
          align='center'
          color='textPrimary'
        ></Typography>
      )}
    </Grid>
  );
};
