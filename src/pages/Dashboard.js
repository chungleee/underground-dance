import React from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
  },
});
const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
