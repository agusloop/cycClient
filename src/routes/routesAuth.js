import { LayoutAuth } from "../layouts/LayoutAuth";

//Pages
import { MyProfile } from "../screens/user/Profile/MyProfile";
import { Login } from "../screens/Login";
import { MyEmail } from "../components/users/myEmail/MyEmail";
import { MyPhone } from "../components/users/myPhone/MyPhone";

const routesAuth = [
  {
    path: "/auth",
    component: LayoutAuth,
    exact: false,
    routes: [
      {
        path: "/auth/profile",
        component: MyProfile,
        exact: true,
      },
      {
        path: "/auth/email",
        component: MyEmail,
        exact: true,
      },
      {
        path: "/auth/telefono",
        component: MyPhone,
        exact: true,
      },
    ],
  },
];

export default routesAuth;
