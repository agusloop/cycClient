import React from "react";

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Drawer,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
//ICONOS
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
// import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { NavLink, withRouter } from "react-router-dom";

const Sidebar = (props) => {
  const { history, match } = props;
  const itemsList = [
    {
      text: "Mi información",
      icon: <AccountCircleIcon />,
      onClick: () => history.push("/dashboard"),
    },
    {
      text: "Emails",
      icon: <EmailIcon />,
      onClick: () => history.push("/auth/email"),
    },
    {
      text: "Telefonos",
      icon: <ContactPhoneIcon />,
      onClick: () => history.push("/auth/telefono"),
    },
  ];

  return (
    <Drawer open={true} variant='persistent'>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;

          return (
            <>
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </Drawer>
  );
};

export default withRouter(Sidebar);
