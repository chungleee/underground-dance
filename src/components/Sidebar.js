import React from "react";
import {
  Divider,
  Drawer,
  Icon,
  List,
  ListItem,
  Typography,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    minWidth: "300px",
  },
  welcomeLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: "2em",
    paddingTop: "2em",
  },
  logoColor: {
    color: "#229AF8",
  },
  icon: { marginRight: "2em" },
});

const Sidebar = () => {
  const classes = useStyles();
  const listItems = [
    {
      icon: "fas fa-home fa-2x",
      item: "Dashboard",
    },
    {
      icon: "fas fa-users fa-2x",
      item: "Profile",
    },
    {
      icon: "fas fa-credit-card fa-2x",
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
        <Icon
          className="fas fa-rocket"
          fontSize="large"
          classes={{ root: classes.logoColor }}
        />
        <Typography>
          Welcome,{" "}
          <Typography component="span" className={classes.logoColor}>
            Ryan
          </Typography>
        </Typography>
      </div>
      <Divider />
      <List>
        {listItems.map((item) => {
          return (
            <ListItem button>
              <ListItemIcon className={`${item.icon} ${classes.icon}`} />
              <ListItemText primary={item.item} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
