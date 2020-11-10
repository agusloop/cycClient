import {
  GETPHONES_EXITOSO,
  GETPHONES_ERROR,
  AGREGAR_PHONE,
  ELIMINAR_PHONE,
  AGREGAR_PHONEERROR,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GETPHONES_EXITOSO:
      return {
        ...state,
        phones: action.payload,
      };

    case GETPHONES_ERROR:
      return {
        ...state,
        mensaje: action.payload,
      };

    case AGREGAR_PHONE:
      return {
        ...state,
        phones: [...state.emails, action.payload],
      };

    case AGREGAR_PHONEERROR:
      return {
        ...state,
        mensaje: action.payload,
      };
    case ELIMINAR_PHONE:
      console.log("Action Eliminar", action.payload);
      return {
        ...state,
        phones: state.emails.filter((email) => email.id !== action.payload),
      };

    default:
      return state;
  }
};
