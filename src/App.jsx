import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import { MainHome } from "./screens/MainHome";
import PublicNav from "./components/PublicNav";
import { Login } from "./screens/Login";
import { MyProfile } from "./screens/user/Profile/MyProfile";
import { CrearCuenta } from "./components/users/CrearCuenta";
import AuthState from "./context/auth/authState";
import EmailState from "./context/emails/emailsState";
import { PrivateRoutesUser } from "./routes/PrivateRoutesUser";
import tokenAuth from "./config/tokenAuth";
import PhoneState from "./context/phones/phonesState";

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
            <PublicNav />
            <Switch>
              <Route exact path='/registro' component={CrearCuenta} />

              <Route exact path='/login' component={Login} />
              <Route exact path='/dashboard' component={PrivateRoutesUser} />

              <Route exact path='/' component={MainHome} />
            </Switch>
          </Router>
        </PhoneState>
      </EmailState>
    </AuthState>
  );
}

export default App;
