import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const Drawer = () => {
  return (
    <div>
      <p>Hola desde mi Drawer</p>
      <Router>
        <PublicNav />
        <>
          <Switch>
            <Route exact path='/registro'>
              <RegisterUser />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/'>
              <MainHome />
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
};
