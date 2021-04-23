// import { TextField, Container } from "@material-ui/core";
// import CardItem from "../components/CardItem";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Divider, Grid, TextField} from '@material-ui/core';
import CardItem from "../components/CardItem";
import { useQuery } from '@apollo/client'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin:20,
    },
    paper: {
        padding: theme.spacing(2),
    },
}));

const Shops = () => {
    const classes = useStyles();
  return (
      <React.Fragment>
          <div className={classes.root}>
              <Grid container spacing={3} style={{marginTop:10}}>
                  <Grid item xs={12}>
                      <Grid container spacing={3}>
                          <Grid item xs={8}>
                      <TextField
                          label="Search"
                          variant="outlined"
                          style={{ width: "100%"}}
                      />
                          </Grid>
                          <Grid item xs={2}>
                              <FormControl variant="outlined" style={{width:"100%"}}>
                                  <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
                                  <Select
                                      native
                                      label="Category"
                                      inputProps={{
                                          name: 'Category',
                                          id: 'outlined-age-native-simple',
                                      }}
                                  >
                                      <option aria-label="None" />
                                  </Select>
                              </FormControl>
                          </Grid>
                          <Grid item xs={2}>
                              <TextField
                                  label="Tags"
                                  variant="outlined"
                                  style={{ width: "100%"}}
                              />
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid item xs={3}>
                      <Paper className={classes.paper} style={{ color: "#f29559", fontWeight:'bold'}}>CATEGORY<hr/>
                          <p style={{fontWeight:'lighter'}}>All</p>
                          <p style={{fontWeight:'lighter'}}>Bedroom</p>
                          <p style={{fontWeight:'lighter'}}>Bathroom</p>
                          <p style={{fontWeight:'lighter'}}>Kitchen</p>
                          <p style={{fontWeight:'lighter'}}>Living room</p>
                          <p style={{fontWeight:'lighter'}}>Other</p>
                      </Paper>
                  </Grid>
                  <Grid item xs={9}>
                      <Grid container spacing={3}>
                    <CardItem/>
                      </Grid>
                  </Grid>

              </Grid>
          </div>
      </React.Fragment>
  );
};

export default Shops;
