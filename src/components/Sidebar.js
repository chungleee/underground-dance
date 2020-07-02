import React from "react";
import { Drawer, Icon, List, ListItem, Typography } from "@material-ui/core";

const Sidebar = () => {
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
    <Drawer variant="permanent" anchor="left">
      <Typography>
        <Icon className="fas fa-rocket" />
        Welcome, Ryan
      </Typography>
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
