import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ErrorAlert() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="error">
        I have Filled this form in the last 24 hours so i cannot fill it again
      </Alert>
    </div>
  );
}
