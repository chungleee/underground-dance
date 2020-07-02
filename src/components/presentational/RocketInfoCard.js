import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  List,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "715px",
    border: "1px solid lightgrey",
    borderRadius: "15px",
  },
  content: {
    maxWidth: "450px",
  },
  listItem: {
    marginTop: "0.5rem",
  },
});
const RocketInfoCard = ({ launches }) => {
  const classes = useStyles();

  if (launches.length === 0) {
    return <div>...Loading...</div>;
  }
  return (
    <div className={classes.root}>
      <List>
        {launches.map((launch) => {
          return (
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar alt="" src={launch.links.flickr_images[0]} />
              </ListItemAvatar>
              <div className={classes.content}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <ListItemText primary={`${launch.rocket.rocket_name}`} />
                  <Typography>{`${launch.rocket.rocket.cost_per_launch} per launch`}</Typography>
                </div>
                <Typography>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit
                </Typography>
              </div>
              <ListItemSecondaryAction>
                <Button variant="contained" color="primary">
                  More info
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default RocketInfoCard;
