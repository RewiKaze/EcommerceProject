import React from 'react';
import "./../css/ProductSlug.css";
import { Grid, Paper } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Carousel from 'react-material-ui-carousel';
import product1 from "./../image/product/product1.png";

function Item(props) {
    return (
        <Paper>
            <img style={{ width: '5rem' }} src={props.item.image} />
        </Paper>
    )
}

const ProductSlug = () => {
    const [piece, setPiece] = React.useState(0);
    const pieceChange = (event) => {
        setPiece(event.target.value);
    };
    var items = [
        {
            image: product1
        },
    ]

    return (
        // product show
        <React.Fragment>
            <div className="Product-sell">
                <ArrowBackIosIcon></ArrowBackIosIcon>
                <Grid item xs={6}>
                    <p className="head-name">Gold Coast Mirrored Desk : Bargie U12-166, Weathered White / Wooden / Mirror Finish | Ready Stock</p>
                    <hr></hr>
                    <div style={{ display: 'flex' }}>
                        <span>1K&nbsp;</span>
                        <span style={{ color: '#9E9E9E' }}>&nbsp;Sold |&nbsp;</span>
                        <div className="tag-product"> bedroom </div>
                    </div>
                    <p className="price-product">$ 89.00</p>
                    <div style={{ display: 'flex' }}>
                        <span style={{ marginRight: '2rem' }}>Shipping</span>
                        <div style={{ width: '50%' }}>
                            <div style={{ display: 'flex', alignContent: 'center' }}>
                                <LocalShippingIcon style={{ color: '#F29559' }}></LocalShippingIcon>
                                <span style={{ color: '#9E9E9E' }}>&nbsp;Standard delivery</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignContent: 'center' }}>
                                    <LocalAtmIcon style={{ color: '#F29559' }}></LocalAtmIcon>
                                    <span style={{ color: '#9E9E9E' }}>&nbsp;Shipping Fee</span>
                                </div>
                                <span style={{ color: '#9E9E9E' }}>500 THB</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: '1rem' }}>
                        <span style={{ marginRight: '2rem', alignSelf: 'center' }}>Quantity</span>
                        <TextField
                            id="standard-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={piece} onChange={pieceChange}
                        />
                        <span style={{ marginRight: '2rem', alignSelf: 'center' }}>3 piece available</span>
                    </div>
                    <div style={{ marginTop: '3rem', display: 'flex' }}>
                        <Button className="Button1" style={{ width: '30%', marginRight: '1rem' }}>
                            <ShoppingCartIcon></ShoppingCartIcon>
                        &nbsp;ADD to CART
                    </Button>
                        <Button className="Button2" style={{ width: '30%' }}>
                            &nbsp;BUY NOW
                    </Button>
                    </div>
                </Grid>
                <Grid item xs={6} style={{ marginLeft: '1rem', display: 'flex', flexDirection: 'column' }}>
                    <img src={product1} className="img-product" />
                    <Carousel maxWidth="sm">
                        {
                            items.map((item, i) => <Item key={i} item={item} />)
                        }
                    </Carousel>
                </Grid>
            </div>

            {/* product detail */}
            <div className="Product-Detail">
                <span style={{ color: "#F29559", marginBottom: '1rem' }}>Product Specifications</span>
                <div className="Product-Speci">
                    <div className="Detail-box">
                        <Grid item xs={3} style={{ color: '#F29559' }}>
                            <span>Catagory</span><br></br>
                            <span>Brand</span><br></br>
                            <span>Model</span><br></br>
                            <span>Warranty Period</span><br></br>
                            <span>Stock</span>
                        </Grid>
                        <Grid item xs={8} style={{ color: '#202C39' }}>
                            <span>bedroom</span><br></br>
                            <span>Bargie</span><br></br>
                            <span>XXXXXX</span><br></br>
                            <span>Bargie</span><br></br>
                            <span>3</span>
                        </Grid>
                    </div>
                </div>
                <span style={{ color: "#F29559", marginBottom: '1rem' }}>Product Description</span>
                <div className="Product-Speci">
                    <div className="Detail-box">
                        <span style={{ color: '#202C39' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur sem ornare ipsum, id et duis nibh facilisi. Integer mi enim hac aliquam. Libero pharetra at senectus diam malesuada nulla tempus. Ante lorem pretium vitae molestie aliquet. Volutpat accumsan consectetur maecenas vestibulum, amet, in. Dignissim turpis a, potenti imperdiet erat purus.
                        Headphones<br></br>
                        Style<br></br>
                        In-ear (Earbud)<br></br>
                        Usage Scenario<br></br>
                        Gaming<br></br>
                        VoIP/Internet calls<br></br>
                        Multimedia<br></br>
                        Connector<br></br>
                        3.5 mm(1/8”) connector Audio/mic combo<br></br>
                        General Info <br></br>
                        Platform <br></br>
                        PC <br></br>
                        MAC <br></br>
                        Mobile device <br></br>
                        PlayStation® 4 <br></br>
                        PlayStation® 3 <br></br>
                        Xbox One®<br></br>
                        Xbox 360®<br></br>
                        Nintendo Switch<br></br>
                        Headphones<br></br>
                        Driver<br></br>
                        Driver diameter : 10.8 mm<br></br>
                        Microphone<br></br>
                        Omni-directional<br></br>
                        Impedance<br></br>
                        16 Ohm<br></br>
                        Frequency Response (headphones)<br></br>
                        20 ~ 40000 Hz<br></br>
                        Noise Cancellation<br></br>
                        Passive (noise isolation) :<br></br>
                        Microphone<br></br>
                        Pick-up Pattern<br></br>
                        In-line Microphone:<br></br>
                        Omni-directional<br></br>
                        Frequency Response<br></br>
                        In-line Microphone:<br></br>
                        50 ~ 10000 Hz<br></br>
                        Sensitivity<br></br>
                        In-line Microphone:<br></br>
                        Sensitivity : -40 dB ± 3 dB<br></br>
                        General Info<br></br>
                        Cable Length<br></br>
                        1.25 meter<br></br>
                        Weight<br></br>
                        16 g<br></br>
                        Note<br></br>
                        Package Contents:<br></br>
                        -ROG Cetra Core gaming in-ear headphone<br></br>
                        -Carry case<br></br>
                        -Audio/Mic splitter cable<br></br>
                        -Ear fins in 3 varying sizes<br></br>
                        -Silicon tips in 3 varying sizes<br></br>
                        -Foam tips (one pair)<br></br>
                        -Quick Start Guide
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ProductSlug;
