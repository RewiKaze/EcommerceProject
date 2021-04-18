import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { useHistory } from "react-router-dom"
import { useSession } from "../contexts/SessionContext";
import {useState, useCallback, useEffect} from "react";


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

const Login = (props) => {
  const history = useHistory();
  const { login, loginError, loadingLogin } = useSession();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUsernameChange = useCallback(
      (e) => {
        setUsername(e.target.value)
      },
      [],
  )
  const handlePasswordChange = useCallback(
      (e) => {
        setPassword(e.target.value)
      },
      [],
  )
  const handleLogin = useCallback(
      async (e) => {
        e.preventDefault()
        try{
          await login(username, password)
          history.push('/')
        } catch (err) {
          console.log(err);
          alert("Login failed");
        }

      },
      [login, password, username],
  )

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
        <form onSubmit={handleLogin}>
          <TextField
            className={classes.input}
            label="Username"
            variant="filled"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required={true}
          />
          <TextField
            className={classes.input}
            label="Password"
            variant="filled"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required={true}
          />
          <div style={{ width: "80%" }}>
            <Button variant="contained" color="primary" type="submit" >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
