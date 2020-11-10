import React from "react";

import usuarioContext from "./usuarioContext";
import usuarioReducer from "./usuarioReducer";

const usuarioState = (props) => {
  const initialState = {
    nuevo: false,
  };

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(usuarioReducer, initialState);
};
