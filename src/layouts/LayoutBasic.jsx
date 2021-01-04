import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import PublicNav from "../components/PublicNav";
import { Route, Switch } from "react-router-dom";
import { MainHome } from "../screens/MainHome";
import { Login } from "../screens/Login";
import { CrearCuenta } from "../components/users/CrearCuenta";
//Error 404 siempre debe de ir al ultimo routes
import Error404 from "../screens/Error404";

export const LayoutBasic = (props) => {
  return (
    <>
      <PublicNav />
      <Container>
        <Container>
          <Grid item xs={12}>
            <Switch>
              <Route path='/' exact={true} component={MainHome} />
              <Route path='/login' exact={true} component={Login} />
              <Route path='/registro' exact={true} component={CrearCuenta} />
              <Route component={Error404} />
            </Switch>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

// function LoadRoutes({ routes }) {
//   return routes.map((r, i) => (
//     <Route key={i} path={r.path} exact={r.exact} component={r.component} />
//   ));
// }
