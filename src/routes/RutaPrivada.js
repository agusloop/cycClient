import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const RutaPrivada = ({ component: Component, ...props }) => {
  console.log("Ruta privada", props);
  const authContext = useContext(AuthContext);
  const { autenticado, usuarioAutenticado } = authContext;
  //Para mantener el usuario autenticado aunque se recargue la pagina
  useEffect(() => {
    usuarioAutenticado();
  }, []);
  return (
    <Route
      {...props}
      render={(props) =>
        !autenticado ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  );
};

export default RutaPrivada;
