import React from "react";
//MATERIAL COMPONENTS
import { Grid } from "@material-ui/core";
//ROUTER DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//SCREENS
import UserNav from "../components/users/nav/UserNav";
import { MyInfo } from "../components/users/Info/MyInfo";
import { MyEmail } from "../components/users/myEmail/MyEmail";
import { MyPhone } from "../components/users/myPhone/MyPhone";
import { MyProfile } from "../screens/user/Profile/MyProfile";
import tokenAuth from "../config/tokenAuth";

const token = localStorage.getItem("x-token");
if (token) {
  tokenAuth(token);
}

export const PrivateRoutesUser = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <UserNav />
        <Switch>
          <Route exact path='/dashboard' component={MyProfile} />

          <Route exact path='/dashboard/myemail' component={MyEmail} />

          <Route exact path='/dashboard/myphone' component={MyPhone} />
        </Switch>
      </div>
    </Router>
  );
};
