import React from "react";
import { Drawer, Icon, List, ListItem, Typography } from "@material-ui/core";

const Dashboard = () => {
  return (
    <>
      <Drawer variant="permanent" anchor="left">
        <Typography>
          <Icon className="fas fa-rocket" />
          Welcome, Ryan
        </Typography>
        <List>
          <ListItem>Dashboard</ListItem>
          <ListItem>Profile</ListItem>
          <ListItem>Subscription</ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Dashboard;
