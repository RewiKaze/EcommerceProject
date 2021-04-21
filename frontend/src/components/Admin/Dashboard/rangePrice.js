import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Chart } from "react-google-charts";


const useStyles = makeStyles((theme) => ({
    paper1: {
        padding: theme.spacing(2),
        backgroundColor:"#202C39"
    },
}));

const RangePrice = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper1}><h3 style={{color:'white'}}>Range Price</h3>
            <hr/>
            <Chart
                width={'100%'}
                height={'175px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Task', 'Range'],
                    ['100-500', 11],
                    ['500-1000', 2],
                    ['1000+', 2],

                ]}
                rootProps={{ 'data-testid': '1' }}
            />
        </Paper>
    );
};

export default RangePrice;
