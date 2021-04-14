import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  loginPage: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "calc(100vh - 4em)",
    flexDirection: "column",
  },
  loginBox: {
    width: "70vw",
    height: "60vh",
    backgroundColor: "lightgrey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
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
}));

const Login = () => {
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
          <Typography variant="h5">Login</Typography>
          <Typography variant="subtitle1">Create new? Here</Typography>
        </div>
        <TextField
          className={classes.input}
          label="Username"
          variant="filled"
        />
        <TextField
          className={classes.input}
          label="Password"
          variant="filled"
        />
        <div style={{ width: "80%" }}>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
