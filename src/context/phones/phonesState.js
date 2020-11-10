import React, { useReducer } from "react";

import phoneReducer from "./phonesReducer";
import PhoneContext from "./phonesContext";
import {
  obtenerTelefonosAPI,
  createTelefonoAPI,
  deleteTelefonoAPi,
} from "../../api/telefonos/telefonosAPI";
import {
  GETPHONES_ERROR,
  GETPHONES_EXITOSO,
  AGREGAR_PHONEERROR,
  AGREGAR_PHONE,
  ELIMINAR_PHONE,
} from "../../types";

const PhoneState = (props) => {
  const initialState = {
    phones: [],
    mensaje: null,
  };

  const [state, dispatch] = useReducer(phoneReducer, initialState);

  //::::::::::::::::::::::::::::::::::::::::::::::::::
  //:::::::::::::Funciones o Acciones:::::::::::::::::
  //::::::::::::::::::::::::::::::::::::::::::::::::::

  const getPhonesbyUser = async () => {
    try {
      const res = await obtenerTelefonosAPI();
      if (!res || res.status !== 200) {
        dispatch({
          type: GETPHONES_ERROR,
          payload: res.data,
        });
      }

      dispatch({
        type: GETPHONES_EXITOSO,
        payload: res,
      });
    } catch (error) {}
  };

  const agregarTelefono = async (telObj) => {
    const token = localStorage.getItem("x-token");
    telObj.tel_user = token;
    try {
      const res = await createTelefonoAPI(telObj);
      console.log("Respuesta", res);
      if (!res || res.status !== 200) {
        console.log("Entre aqui");
        dispatch({
          type: AGREGAR_PHONEERROR,
          payload: res.data,
        });
      }

      dispatch({
        type: AGREGAR_PHONE,
        payload: res.data,
      });
      getPhonesbyUser();
    } catch (error) {}
  };

  const eliminarTelefono = async (idTel) => {
    try {
      const res = await deleteTelefonoAPi(idTel);
      dispatch({
        type: ELIMINAR_PHONE,
        payload: idTel,
      });
      getPhonesbyUser();
    } catch (error) {}
  };

  return (
    <PhoneContext.Provider
      value={{
        phones: state.phones,
        mensaje: state.mensaje,
        getPhonesbyUser,
        agregarTelefono,
        eliminarTelefono,
      }}
    >
      {props.children}
    </PhoneContext.Provider>
  );
};
export default PhoneState;
