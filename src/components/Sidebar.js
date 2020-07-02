import React from "react";
import {
  Divider,
  Drawer,
  Icon,
  List,
  ListItem,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    minWidth: "300px",
  },
  welcomeLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "2em",
    paddingTop: "2em",
  },
});

const Sidebar = () => {
  const classes = useStyles();
  const listItems = [
    {
      icon: "fas fa-home",
      item: "Dashboard",
    },
    {
      icon: "fas fa-users",
      item: "Profile",
    },
    {
      icon: "fas fa-credit-card",
      item: "Subscription",
    },
  ];
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.paper }}
    >
      <div className={classes.welcomeLogo}>
        <Icon className="fas fa-rocket" />
        <Typography>Welcome, Ryan</Typography>
      </div>
      <Divider />
      <List>
        {listItems.map((item) => {
          return (
            <ListItem>
              <Icon className={item.icon} />
              <Typography>{item.item}</Typography>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
