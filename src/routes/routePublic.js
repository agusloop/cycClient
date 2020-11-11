import { LayoutBasic } from "../layouts/LayoutBasic";

//Pages
import { MainHome } from "../screens/MainHome";
import { Login } from "../screens/Login";
import { CrearCuenta } from "../components/users/CrearCuenta";
const routesPublic = [
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: MainHome,
        exact: true,
      },
      {
        path: "/login",
        component: Login,
        exact: true,
      },
      {
        path: "/registro",
        component: CrearCuenta,
        exact: true,
      },
    ],
  },
];

export default routesPublic;
