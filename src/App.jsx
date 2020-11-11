import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AuthState from "./context/auth/authState";
import EmailState from "./context/emails/emailsState";

import tokenAuth from "./config/tokenAuth";
import PhoneState from "./context/phones/phonesState";
import { LayoutAuth } from "./layouts/LayoutAuth";
import { LayoutBasic } from "./layouts/LayoutBasic";
//MANTENER SESION SI EL USUARIO RECARGA LA PAGINA
const token = localStorage.getItem("x-token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <AuthState>
      <EmailState>
        <PhoneState>
          <Router>
            <Switch>
              <Route path='/auth' exact={false} component={LayoutAuth} />
              <Route path='/' exact={false} component={LayoutBasic} />
            </Switch>
          </Router>
        </PhoneState>
      </EmailState>
    </AuthState>
  );
}

export default App;
