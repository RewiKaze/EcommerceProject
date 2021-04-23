import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    paper1: {
        padding: theme.spacing(2),
        backgroundColor:"#202C39"
    },
}));

const CategoryList = () => {
    const classes = useStyles();
    return (

        <Paper className={classes.paper1}><h3 style={{color:'white'}}>Category List [All: 50]</h3>
            <hr/>
            <b style={{color:'#F2D492'}}>Bedroom: </b> <b style={{color:'#F29559'}}>10</b> <br/>
            <b style={{color:'#F2D492'}}>Bathroom: </b> <b style={{color:'#F29559'}}>10</b> <br/>
            <b style={{color:'#F2D492'}}>Kitchen: </b> <b style={{color:'#F29559'}}>10</b> <br/>
            <b style={{color:'#F2D492'}}>Living Room: </b> <b style={{color:'#F29559'}}>10</b> <br/>
            <b style={{color:'#F2D492'}}>Other: </b> <b style={{color:'#F29559'}}>10</b>
        </Paper>
    );
};

export default CategoryList;
