import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Paper, Grid, LinearProgress} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root1: {
        width: '100%',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper1: {
        padding: theme.spacing(2),
        backgroundColor:"#202C39"
    },
}));


const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: 'green',
    },
}))(LinearProgress);

const BorderLinearProgress2 = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: 'red',
    },

}))(LinearProgress);


const InStock = () => {
    const classes = useStyles();
    return(
        <Paper className={classes.paper1} style={{color:'#F29559'}}>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <h3 style={{textAlign:'center'}}>In stock <br/> 77%</h3>
                </Grid>
                <Grid item xs={10}>
                    <Paper className={classes.paper}>
                        <div className={classes.root1}>
                            <BorderLinearProgress variant="determinate" value={77} />
                            <br/>
                            <BorderLinearProgress2 variant="determinate" value={23} />
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
);
};

export default InStock;
