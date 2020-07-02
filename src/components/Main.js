import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Typography,
  AppBar,
  Tabs,
  Tab,
  Divider,
} from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  theme: {
    backgroundColor: "black",
    color: "white",
  },
});

const Main = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box style={{ width: "75%" }}>
        <Container className={classes.theme}>
          <Typography style={{ padding: "1rem 0" }} variant="h4">
            Dashboard
          </Typography>
          <Divider />
          <AppBar className={classes.theme} position="static">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="ROCKETS" {...a11yProps(0)} />
              <Tab label="SATELLITES" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
        </Container>
        <TabPanel value={value} index={0}>
          <Typography>Active Rockets</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography>Satellites</Typography>
        </TabPanel>
      </Box>
    </>
  );
};

export default Main;
