import React from "react";
import navStyles from "./UserNav.module.css";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";
//ICONOS
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { NavLink, withRouter } from "react-router-dom";

const UserNav = (props) => {
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
      onClick: () => history.push("/dashboard/myemail"),
    },
    {
      text: "Telefonos",
      icon: <ContactPhoneIcon />,
      onClick: () => history.push("/dashboard/myphone"),
    },
  ];

  return (
    <Grid md={2}>
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
    </Grid>
  );
};

export default withRouter(UserNav);
