import * as Yup from "yup";

const Schema = Yup.object().shape({
    user_name: Yup.string().required("El usuario es requerido!"),
    password: Yup.string().required("La contraseña es requerida!"),
  });
  
export default Schema;