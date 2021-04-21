import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Lottie from "lottie-react";
import waveAnimation from "../animation/wave.json";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  loginPage: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "calc(100vh - 4em)",
    flexDirection: "column",
    backgroundColor: "#F2D492",
  },
  loginBox: {
    width: "70vw",
    height: "60vh",
    backgroundColor: "lightgrey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    zIndex: 2,
  },
  input: {
    backgroundColor: "white",
    borderRadius: "3px",
    width: "80%",
    marginBottom: "2.5%",
  },
  titleLogin: {
    width: "80%",
    marginBottom: "2.5%",
  },
  form: {
    display: "contents",
  },
  anim: {
    width: "100%",
    zIndex: 1,
    position: "absolute",
    bottom: 0,
  },
}));
const Register = () => {
  const classes = useStyles();
  return (
    <div className={classes.loginPage}>
      <div>
        <Typography variant="h3">Welcome to Furnishop</Typography>
        <Typography variant="subtitle1" style={{ textAlign: "center" }}>
          something amazing
        </Typography>
      </div>
      <div className={classes.loginBox}>
        <div className={classes.titleLogin}>
          <Typography variant="h5">Register</Typography>
          <Typography variant="subtitle1">
            Already have one?{" "}
            <Link component={RouterLink} to="/Login">
              Here
            </Link>
          </Typography>
        </div>
        <form className={classes.form}>
          <TextField
            className={classes.input}
            label="Email"
            variant="filled"
            type="text"
            required={true}
          />
          <TextField
            className={classes.input}
            label="Username"
            variant="filled"
            type="text"
            required={true}
          />
          <TextField
            className={classes.input}
            label="Password"
            variant="filled"
            type="password"
            required={true}
          />
          <Button variant="contained" color="primary" type="submit">
            Sign up
          </Button>
        </form>
      </div>
      <Lottie
        animationData={waveAnimation}
        loop
        className={classes.anim}
      ></Lottie>
    </div>
  );
};

export default Register;
