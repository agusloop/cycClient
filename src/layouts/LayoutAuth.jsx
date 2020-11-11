import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import PublicNav from "../components/PublicNav";
import { Route } from "react-router-dom";
import { MyProfile } from "../screens/user/Profile/MyProfile";
import { MyEmail } from "../components/users/myEmail/MyEmail";
import { MyPhone } from "../components/users/myPhone/MyPhone";
import RutaPrivada from "../routes/RutaPrivada";
import Sidebar from "./Sidebar/Sidebar";

export const LayoutAuth = (props) => {
  return (
    <>
      <Grid container>
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={10}>
          <Container>
            <Grid item xs={12}>
              <RutaPrivada
                path='/auth/profile'
                exact={true}
                component={MyProfile}
              />
              <RutaPrivada
                path='/auth/email'
                exact={true}
                component={MyEmail}
              />
              <Route path='/auth/telefono' exact={true} component={MyPhone} />
            </Grid>
          </Container>
          <Typography>CyC Consulting </Typography>
        </Grid>
      </Grid>
    </>
  );
};
