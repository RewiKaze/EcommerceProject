import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import product1 from './image/product1.png'
import product2 from './image/product2.png'

const Order = () => {
    return (
        <Grid item xs={9}>
            <Paper className={classes.paper}>
                <span style={{ fontWeight: '700', color: '#202C39' }}>My Order</span>
                <hr style={{ height: '0.005rem', backgroundColor: '#E5E5E5', borderWidth: '0', margin: '1rem' }}></hr>
                <div style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'left' }}>
                        <span>Show: </span>
                        <FormControl variant="outlined" className={classes.formControl} style={{ width: '20%' }}>
                            <InputLabel id="demo-simple-select-outlined-label">Sort</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={sort}
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>All</em>
                                </MenuItem>
                                <MenuItem value={10}>Today</MenuItem>
                                <MenuItem value={20}>Last 5 orders</MenuItem>
                                <MenuItem value={30}>Last 1 month</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div id="myorder1">
                        <div id="order1" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div id="product1" style={{ display: 'flex', alignContent: 'flex-start', width: '100%', padding: '1rem' }}>
                                <img src={product1} style={{ width: '7rem' }} />
                                <div style={{ textAlign: 'left', marginLeft: '1rem' }}>
                                    <span style={{ fontWeight: '600', color: '#202C39' }}>ตู้หนังสือ ขนาด 80 ซม. รุ่น Lybrary สีขาว</span><br></br>
                                    <span style={{ fontWeight: '600', color: '#202C39' }}>X1</span><br></br>
                                    <span style={{ fontWeight: '600', color: '#F29559' }}>Delivered on 17 Jan 2021</span>
                                </div>
                            </div>
                            <div style={{ alignSelf: 'flex-end', justifySelf: 'flex-end' }}>
                                <span style={{ fontWeight: '600', color: '#202C39' }}>$39</span>
                            </div>
                        </div>
                        <div id="order1" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div id="product2" style={{ display: 'flex', alignContent: 'flex-start', width: '100%', padding: '1rem' }}>
                                <img src={product2} style={{ width: '7rem' }} />
                                <div style={{ textAlign: 'left', marginLeft: '1rem' }}>
                                    <span style={{ fontWeight: '600', color: '#202C39' }}>Sofa very sofe sofe 200x200 cm Brown</span><br></br>
                                    <span style={{ fontWeight: '600', color: '#202C39' }}>X1</span><br></br>
                                    <span style={{ fontWeight: '600', color: '#F29559' }}>Delivered on 17 Jan 2021</span>
                                </div>
                            </div>
                            <div style={{ alignSelf: 'flex-end', justifySelf: 'flex-end' }}>
                                <span style={{ fontWeight: '600', color: '#202C39' }}>$39</span>
                            </div>
                        </div>
                        <span id="total" style={{ fontWeight: '700', fontSize: '2.3rem', display: 'flex', justifyContent: 'flex-end', color: '#202C39' }}>Total $78</span>
                        <hr style={{ height: '0.005rem', backgroundColor: '#E5E5E5', borderWidth: '0', margin: '1rem' }}></hr>
                    </div>
                </div>
            </Paper>
        </Grid>
    );
}
export default Order;