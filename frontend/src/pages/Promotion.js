
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid, TextField} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PromotionItem from "../components/PromotionItem";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:20,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const Promotion = () => {
  const classes = useStyles();
  return (
      <React.Fragment>
        <div className={classes.root}>
          <Grid container spacing={3} style={{marginTop:10}}>
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ color: "#f29559", fontWeight:'bold'}}>FILTER<hr/>
                <TextField
                    label="Search"
                    variant="outlined"
                    style={{ width: "100%", marginBottom:10}}
                />
                STATUS<hr/>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="checkedA" />}
                    label="ACTIVE"/>
                </FormGroup>
                TYPE<hr/>
                <FormGroup>
                  <FormControlLabel
                      control={<Checkbox name="checkedA" />}
                      label="DISCOUNT"/>
                  <FormControlLabel
                      control={<Checkbox name="checkedA" />}
                      label="FREESHIPPING"/>
                </FormGroup>
                CHECK CODE<hr/>
                <TextField
                    label="CODE"
                    variant="outlined"
                    style={{ width: "100%", marginBottom:10}}
                />
                Active : <span style={{color:'#00e676'}}>Availiable</span>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Grid container spacing={3}>
                <PromotionItem/>
              </Grid>
            </Grid>

          </Grid>
        </div>
      </React.Fragment>

  );
};

export default Promotion;
