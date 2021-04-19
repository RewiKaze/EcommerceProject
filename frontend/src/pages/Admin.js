import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const AdminDashboard = React.lazy(()=>import('../components/Admin/AdminDashboard'))
const AdminProduct = React.lazy(()=>import('../components/Admin/AdminProduct'))
const AdminCreateProduct = React.lazy(()=>import('../components/Admin/AdminCreateProduct'))
const AdminUpdateProduct = React.lazy(()=>import('../components/Admin/AdminUpdateProduct'))
const AdminPromotion = React.lazy(()=>import('../components/Admin/AdminPromotion'))
const AdminCreatePromotion = React.lazy(()=>import('../components/Admin/AdminCreatePromotion'))
const AdminUpdatePromotion  = React.lazy(()=>import('../components/Admin/AdminUpdatePromotion'))

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin:5
    },
    paper: {
        padding: theme.spacing(2),
        borderRadius:0,
    },
}));

const Admin = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper} style={{backgroundColor:"#202C39", color:'#F29559'}}>ADMIN DASHBOARD</Paper>
                </Grid>
                <Grid item xs={9}>
                    <AdminDashboard style={{padding:10}}/>
                    <AdminProduct style={{padding:10}}/>
                    <AdminCreateProduct style={{padding:10}}/>
                    <AdminUpdateProduct style={{padding:10}}/>
                    <AdminPromotion style={{padding:10}}/>
                    <AdminCreatePromotion style={{padding:10}}/>
                    <AdminUpdatePromotion style={{padding:10}}/>
                </Grid>
            </Grid>
        </div>
    );
}
export default Admin;
