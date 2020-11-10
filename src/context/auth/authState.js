import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
  OBTENER_USUARIOERROR,
} from "../../types/index";
//Peticiones a la api
import { createUsuario } from "../../api/usuarios/usuariosApi";
import {
  obtenerUsuarioAutenticado,
  loginUsuarios,
} from "../../api/auth/authAPI";
import tokenAuth from "../../config/tokenAuth";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("x-token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //::::::::::::::::::::::::::::::::::::::::::::::::::
  //:::::::::::::Funciones o Acciones:::::::::::::::::
  //::::::::::::::::::::::::::::::::::::::::::::::::::

  //Registrar usuario
  const registrarUsuario = async (user) => {
    try {
      const res = await createUsuario(user);

      if (!res) {
        dispatch({
          type: REGISTRO_ERROR,
        });
      }
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: res,
      });

      //Tener  la información del usuario autenticado
      usuarioAutenticado();
    } catch (error) {
      console.log("Error al registrar", error);
    }
  };

  //Retorna un usuario autenticado

  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("x-token");

    if (token) {
      //TODO: Enviar el token por los headers
      tokenAuth(token);
    }
    try {
      const res = await obtenerUsuarioAutenticado();
      console.log("Respuesta Autenticado", res);

      if (res.status !== 200) {
        dispatch({
          type: OBTENER_USUARIOERROR,
          payload: res.data,
        });
      }
      dispatch({
        type: OBTENER_USUARIO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  //::::::::::::::::::::::::::::::::::::::::::
  //:::::::LOGIN:::::::::::::
  //::::::::::::::::::::::::::::::::::::::::::
  const iniciarSesion = async (datos) => {
    console.log("Datos", datos);
    try {
      const res = await loginUsuarios(datos);

      if (!res) {
        return dispatch({
          type: LOGIN_ERROR,
        });
      }
      dispatch({
        type: LOGIN_EXITOSO,
        payload: res,
      });
      const usuario = usuarioAutenticado();
    } catch (error) {
      console.log("Error login", error.response);
    }
  };

  //::::::::::::::::::::::::::::::::::::::::::
  //:::::::LOGIN:::::::::::::
  //::::::::::::::::::::::::::::::::::::::::::

  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        registrarUsuario,
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
