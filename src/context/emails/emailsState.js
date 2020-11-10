import React, { useReducer } from "react";
import EmailContext from "./emailsContext";
import emailReducer from "./emailReducer";
import {
  GETEMAILS_EXITOSO,
  GETEMAILS_ERROR,
  AGREGAR_EMAILERROR,
  AGREGAR_EMAIL,
  ELIMINAR_EMAIL,
} from "../../types";
import {
  GetAllEmails,
  createEmailAPI,
  deleteEmailAPi,
} from "../../api/emails/emailsAPI";

const EmailState = (props) => {
  const initialState = {
    emails: [],
    mensaje: null,
  };

  const [state, dispatch] = useReducer(emailReducer, initialState);

  //::::::::::::::::::::::::::::::::::::::::::::::::::
  //:::::::::::::Funciones o Acciones:::::::::::::::::
  //::::::::::::::::::::::::::::::::::::::::::::::::::

  const getEmailsbyUser = async () => {
    try {
      const res = await GetAllEmails();
      if (!res || res.status !== 200) {
        dispatch({
          type: GETEMAILS_ERROR,
          payload: res.data,
        });
      }

      dispatch({
        type: GETEMAILS_EXITOSO,
        payload: res,
      });
    } catch (error) {}
  };

  const agregarEmail = async (tareaObj) => {
    console.log("TareaObjeto State", tareaObj);
    const token = localStorage.getItem("x-token");
    console.log("Token Emaiks", token);
    tareaObj.ema_user = token;
    console.log("TareaObjeto Modifik", tareaObj);
    try {
      const res = await createEmailAPI(tareaObj);
      console.log("Respuesta", res);
      if (!res || res.status !== 200) {
        console.log("Entre aqui");
        dispatch({
          type: AGREGAR_EMAILERROR,
          payload: res.data,
        });
      }

      dispatch({
        type: AGREGAR_EMAIL,
        payload: res.data,
      });
      getEmailsbyUser();
    } catch (error) {}
  };

  const eliminarEmail = async (idEmail) => {
    try {
      const res = await deleteEmailAPi(idEmail);
      console.log("Respuesta de la api Elimionar", res);

      dispatch({
        type: ELIMINAR_EMAIL,
        payload: idEmail,
      });
      getEmailsbyUser();
    } catch (error) {}
  };

  return (
    <EmailContext.Provider
      value={{
        emails: state.emails,
        mensaje: state.mensaje,
        getEmailsbyUser,
        agregarEmail,
        eliminarEmail,
      }}
    >
      {props.children}
    </EmailContext.Provider>
  );
};

export default EmailState;
