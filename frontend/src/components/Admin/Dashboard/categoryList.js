import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {useQuery} from "@apollo/client";
import {CATEGORY_QUERY} from "../../../graphql/categoryQuery";

const useStyles = makeStyles((theme) => ({
    paper1: {
        padding: theme.spacing(2),
        backgroundColor:"#202C39"
    },
}));

const CategoryList = () => {
    const classes = useStyles();
    const { loading, error, data } = useQuery(CATEGORY_QUERY)
    if (loading) {
        return 'Loading ...'
    }
    if (error) {
        return 'Error !!'
    }

    const categoryItem = () => {
        return(data?.category?.map((category) => (
            <p style={{fontWeight:'bold', color:'#F2dC92'}}>{category.name} : <span style={{color:'#F29559'}}>10</span></p>
        )))
    }
    return (

        <Paper className={classes.paper1}><h3 style={{color:'white'}}>Category List</h3>
            <hr/>
            {categoryItem()}
            <hr/>
            <h4 style={{color:'white'}}>All Product : 30</h4>
        </Paper>
    );
};

export default CategoryList;
