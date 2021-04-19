import React from 'react';
import {Grid,Button } from '@material-ui/core';

import InStock from "./Dashboard/inStock";
import CategoryList from "./Dashboard/categoryList";
import RangePrice from "./Dashboard/rangePrice";
import OrderList from "./Dashboard/orderList";
import PromotionList from "./Dashboard/promotionList";

const AdminDashboard = () =>{
    return(
        <React.Fragment>

            {/*Dashboard*/}
            <h1 style={{color:'#202C39'}}>DASHBOARD</h1>
            <hr/>
            <Grid container spacing={3}>

                {/*Product*/}
                <Grid item xs={7}>
                        <h2 style={{color:'#202C39'}}>
                            Product{'   '}
                            <span>
                                <Button color="primary" size="small" variant="outlined">
                                    See more
                                </Button>
                            </span>
                        </h2>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                            <InStock/>
                            </Grid>
                            <Grid item xs={6}>
                                <CategoryList/>
                            </Grid>
                            <Grid item xs={6}>
                               <RangePrice/>
                            </Grid>
                        </Grid>

                </Grid>

                {/*Order*/}
                <Grid item xs={5}>
                    <h2 style={{color:'#202C39'}}>
                        Order{'   '}
                        <span>
                            <Button color="primary" size="small" variant="outlined">
                                See more
                            </Button>
                        </span>
                    </h2>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <OrderList/>
                        </Grid>
                    </Grid>
                </Grid>

                {/*Promotion*/}
                <Grid item xs={12}>
                    <h2 style={{color:'#202C39'}}>
                        Promotion{'   '}
                        <span>
                            <Button color="primary" size="small" variant="outlined">
                                See more
                            </Button>
                        </span>
                    </h2>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <PromotionList/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
export default AdminDashboard

