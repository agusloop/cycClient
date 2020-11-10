import {
  GETEMAILS_EXITOSO,
  GETEMAILS_ERROR,
  AGREGAR_EMAIL,
  AGREGAR_EMAILERROR,
  ELIMINAR_EMAIL,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GETEMAILS_EXITOSO:
      return {
        ...state,
        emails: action.payload,
      };

    case GETEMAILS_ERROR:
      return {
        ...state,
        mensaje: action.payload,
      };

    case AGREGAR_EMAIL:
      return {
        ...state,
        emails: [...state.emails, action.payload],
      };

    case AGREGAR_EMAILERROR:
      return {
        ...state,
        mensaje: action.payload,
      };
    case ELIMINAR_EMAIL:
      console.log("Action Eliminar", action.payload);
      return {
        ...state,
        emails: state.emails.filter((email) => email.id !== action.payload),
      };

    default:
      return state;
  }
};
