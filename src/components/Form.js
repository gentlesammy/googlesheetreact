import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CookieConsent, { Cookies } from "react-cookie-consent";
import ErrorAlert from "./ErrorAlert";
import CircularProgress from "@material-ui/core/CircularProgress";
import SpamCheck from "./SpamCheck";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://facebook.com/psalmsam">
        Google Sheet / React Form Connector
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Form() {
  const errorNoti = (msg) => toast.warning(`${msg}`);
  const successNoti = (msg) => toast.success(`${msg}`);
  const SpamChecker = SpamCheck();
  const classes = useStyles();
  const [eligible, setEligible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    confirmPhone: "",
    amount: 0,
    duration: 1,
  });
  useEffect(() => {
    console.log(process.env.REACT_APP_GOOGLE_SHEET_LINK);
    if (SpamChecker) {
      setEligible(true);
    } else {
      setEligible(false);
    }
  }, []);
  const {
    firstName,
    lastName,
    email,
    phone,
    confirmPhone,
    amount,
    duration,
  } = formData;
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //validate and sanitise input
    if (
      firstName == "" ||
      lastName == "" ||
      email == "" ||
      phone == "" ||
      confirmPhone == "" ||
      amount == "" ||
      duration == ""
    ) {
      return errorNoti("All Fields are required");
    } else if (firstName.length < 3) {
      return errorNoti("First Name cannot be less than 3 characters");
    } else if (lastName.length < 3) {
      return errorNoti("Last Name cannot be less than 3 characters");
    } else if (phone.length < 9) {
      return errorNoti("Phone Number cannot be less than 9 characters");
    } else if (phone != confirmPhone) {
      return errorNoti("Please ensure you retype your phone number correctly");
    } else if (amount < 1000) {
      return errorNoti("You cant require for amount less than 1000");
    } else if (duration < 2) {
      return errorNoti("You cant pay back at once");
    } else if (duration > 20) {
      return errorNoti("maximum payback time is 20 months");
    } else {
      console.log(formData);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AttachMoneyIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          LOAN REQUEST FORM
        </Typography>
        <ToastContainer />
        <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={onChangeHandler}
                autoFocus
                onChange={onChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={onChangeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={onChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="phone"
                variant="outlined"
                required
                fullWidth
                id="phone"
                label=" Phone Number"
                value={phone}
                onChange={onChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="confirmPhone"
                variant="outlined"
                required
                fullWidth
                id="comfirmphone"
                label=" Phone Number"
                value={confirmPhone}
                onChange={onChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="amount"
                variant="outlined"
                required
                fullWidth
                id="amount"
                label="Amount Needed"
                value={amount}
                onChange={onChangeHandler}
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="duration"
                variant="outlined"
                required
                fullWidth
                id="duration"
                type="number"
                label="Payment Duration (months)"
                value={duration}
                onChange={onChangeHandler}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="iagree" color="primary" />}
                label="I Agree to all terms and condition"
              />
            </Grid>
          </Grid>
          {eligible && (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              // disabled={eligible ? true : false}
            >
              Send Request Now
            </Button>
          )}

          {!eligible && (
            <Grid item xs={12}>
              <ErrorAlert />
            </Grid>
          )}
          {/* <CircularProgress color="inherit" /> */}
        </form>
        <CookieConsent>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
