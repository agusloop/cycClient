import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  OBTENER_USUARIOERROR,
  CERRAR_SESION,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
    case LOGIN_EXITOSO:
      localStorage.setItem("x-token", action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: null,
      };
    case OBTENER_USUARIO:
      return {
        ...state,
        usuario: action.payload,
        token: action.payload.token,
        autenticado: true,
      };

    case OBTENER_USUARIOERROR:
      return {
        ...state,
        mensaje: action.payload,
      };
    case REGISTRO_ERROR:
      console.log("Entre a registro error");
      localStorage.removeItem("x-token");
      return {
        ...state,
        token: null,
        mensaje: action.payload,
      };

    case CERRAR_SESION:
    case LOGIN_ERROR:
      localStorage.removeItem("x-token");
      return {
        ...state,
        token: null,
        usuario: null,
        autenticado: null,
        mensaje: action.payload,
      };

    default:
      break;
  }
};
