import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import PromotionItem from "../components/PromotionItem";

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

            <Grid item xs={12} style={{paddingInline:20}}>
              <h1 style={{color:'#f29559'}}>Hot Deal!!!!</h1>
              <hr/>
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
