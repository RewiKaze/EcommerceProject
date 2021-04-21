import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "relative",
    bottom: 0,
    width: "100%",
  },
  top: {
    height: "10em",
    backgroundColor: "#202c39",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
  },
  bottom: {
    height: "3em",
    backgroundColor: "#f29559",
    display: "flex",
    alignItems: "center",
    paddingLeft: "1em",
    fontWeight: "bold",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.top}>
        <h1 style={{ color: "#F2D492" }}>Contact Online</h1>
        @funiture @funiture Funiture Online
      </div>
      <div className={classes.bottom}>
        {" "}
        Copyright © 2021 Funiture All Rights Reserved
      </div>
    </div>
  );
};
export default Footer;
