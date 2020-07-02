import React from "react";
import { Drawer, List, ListItem } from "@material-ui/core";

const Dashboard = () => {
  return (
    <>
      <Drawer variant="permanent" anchor="left">
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
