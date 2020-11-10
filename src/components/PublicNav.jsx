import React from "react";
import { NavLink, useLocation, withRouter } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles({
  nav: {
    background: grey[400],
    borderRadius: 1,
    color: "red",
    marginBottom: 10,
  },
});

const PublicNav = (props) => {
  const classes = useStyles();

  if (props.location.pathname !== "/dashboard") {
    return (
      <AppBar position='static' className={classes.nav}>
        <Toolbar>
          <NavLink to='/'>
            <Button>Home</Button>
          </NavLink>
          <NavLink to='/registro'>
            <Button>Registro</Button>
          </NavLink>
          <NavLink to='/login'>
            <Button>Login</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    );
  }
  return false;
};
export default withRouter(PublicNav);
