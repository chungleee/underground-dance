import React from "react";
import {
  Divider,
  Icon,
  List,
  ListItem,
  Typography,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  sidebar: {
    minWidth: "25%",
    borderRight: "1px solid lightgrey",
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
    <sidebar className={classes.sidebar}>
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
    </sidebar>
  );
};

export default Sidebar;
