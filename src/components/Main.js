import React, { useState, useEffect } from "react";
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
import TabPanel from "./presentational/TabPanel";
import RocketInfoCard from "./presentational/RocketInfoCard";

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
  const [launches, setLaunches] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch("https://api.spacex.land/graphql/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query {
          launches(limit: 3) {
            rocket {
              rocket {
                cost_per_launch
                description
                diameter {
                  meters
                }
                height {
                  meters
                }
                name
              }
              rocket_name
            }
            launch_site {
              site_name_long
            }
            links {
              flickr_images
            }
          }
        }    
        `,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data.data);
        setLaunches(data.data.launches);
      });
  }, []);
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
          <RocketInfoCard launches={launches} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography>Satellites</Typography>
        </TabPanel>
      </Box>
    </>
  );
};

export default Main;
