import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function MyCard(props) {
  const { suggestion } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {suggestion.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {suggestion.createdAt}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {suggestion.score}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {suggestion.author}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MyCard;
