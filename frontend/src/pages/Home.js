import "../css/Home.css";
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Container, Button } from '@material-ui/core'
import first from "../image/home/1.png"
import second from "../image/home/2.png"
import third from "../image/home/3.png"
// import fourth from "../image/home/4.png"
// import heart from "../image/home/heart.png"
import fifth from "../image/home/5.png"
import sixth from "../image/home/6.png"
import sevth from "../image/home/7.png"
import logo from "./../image/logo.png"
import s1 from "./../image/home/s1.png"
import s2 from "./../image/home/s2.png"
import s3 from "./../image/home/s3.png"
import s4 from "./../image/home/s4.png"
import f1 from "./../image/home/f1.png"
import f2 from "./../image/home/f2.png"
import f3 from "./../image/home/f3.png"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardItem from "../components/Home/showProduct"
import { Link } from "react-router-dom";
import PromotionItem from "../components/Home/showPromotion";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();
  var items = [
    {
      image: first
    },
    {
      image: second
    },
    {
      image: third
    }
  ]
  var items2 = [
    {
      logo: logo,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, auctor viverra viverra est. Id enim consectetur elit fermentum ultricies sed. Aliquam in odio nunc, mauris, senectus ut. Viverra pharetra tortor consectetur orci libero tincidunt et."
    },
    {
      logo: logo,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, auctor viverra viverra est. Id enim consectetur elit fermentum ultricies sed. Aliquam in odio nunc, mauris, senectus ut. Viverra pharetra tortor consectetur orci libero tincidunt et."
    },
    {
      logo: logo,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, auctor viverra viverra est. Id enim consectetur elit fermentum ultricies sed. Aliquam in odio nunc, mauris, senectus ut. Viverra pharetra tortor consectetur orci libero tincidunt et."
    },
    {
      logo: logo,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, auctor viverra viverra est. Id enim consectetur elit fermentum ultricies sed. Aliquam in odio nunc, mauris, senectus ut. Viverra pharetra tortor consectetur orci libero tincidunt et."
    },
  ]

  return (
    <React.Fragment>
      {/* first */}
      <div className="firstSection">
        <Typography variant="h1">
          <span className="head-topic">Shopping,</span><br></br>
          <span className="head-topic mid">Shipping,</span><br></br>
          <span className="head-topic">Sleeping</span>
          <p className="head-content">The best shopping online of furniture, create the world by your hand</p>
        </Typography>
        <div>
          <Carousel maxWidth="sm">
            {
              items.map((item, i) => <Item key={i} item={item} />)
            }
          </Carousel>
        </div>
      </div>


      {/*second*/}
      <div className="secondSection">
        <Container>
          <div className="second-head">
            <span className="text-topic">Hot Deals</span><br></br>
            <span className="text-title">Furniture and home inspiration</span>
          </div>
          <div className="second-content">
            <PromotionItem />
            {/*<div className="best-sell">*/}
            {/*  <img className="best-sell-img" src={fourth} />*/}
            {/*  <div className="best-sell-content">*/}
            {/*    <span className="best-sell-name">Sofa</span>*/}
            {/*    <img className="heart" src={heart} />*/}
            {/*  </div>*/}
            {/*  <span className="best-sell-price">$ 300.00</span>*/}
            {/*</div>*/}
            {/*<div className="best-sell">*/}
            {/*  <img className="best-sell-img" src={fourth} />*/}
            {/*  <div className="best-sell-content">*/}
            {/*    <span className="best-sell-name">Sofa</span>*/}
            {/*    <img className="heart" src={heart} />*/}
            {/*  </div>*/}
            {/*  <span className="best-sell-price">$ 300.00</span>*/}
            {/*</div>*/}
            {/*<div className="best-sell">*/}
            {/*  <img className="best-sell-img" src={fourth} />*/}
            {/*  <div className="best-sell-content">*/}
            {/*    <span className="best-sell-name">Sofa</span>*/}
            {/*    <img className="heart" src={heart} />*/}
            {/*  </div>*/}
            {/*  <span className="best-sell-price">$ 300.00</span>*/}
            {/*</div>*/}

            {/*<div className="best-sell">*/}
            {/*  <img className="best-sell-img" src={fourth} />*/}
            {/*  <div className="best-sell-content">*/}
            {/*    <span className="best-sell-name">Sofa</span>*/}
            {/*    <img className="heart" src={heart} />*/}
            {/*  </div>*/}
            {/*  <span className="best-sell-price">$ 300.00</span>*/}
            {/*</div>*/}
          </div>
        </Container>
      </div>
      <div className={classes.root} className="product-ses">
        <Grid spacing={3} >
          <Grid item xs={12} style={{paddingInline:50}}>
            <h1>Product Latest</h1>
            <hr />
            <Grid container  spacing={3}>
              {/*<Grid item xs={12}>*/}
              {/*/!*<h1>Hot Deal</h1>*!/*/}
              {/*</Grid>*/}
              {/*<PromotionItem/>*/}
              <CardItem />
            {/*</Grid>*/}
            </Grid>
          </Grid>
        </Grid>
        <div className="third-foot">
          <Link to={{
            pathname: `/product`,
          }} style={{ textDecoration: "none" }}>
            <Button className="button1 third-but">See All Products</Button>
          </Link>
        </div>
      </div>

      {/*<h1 className="text-topic"></h1>*/}
      {/* third */}
      <div className="thirdSection">
        <div className="third-topic">
          <div style={{ display: 'flex' }}>
            <span className="text-topic">Good Furniture,</span>
            <div style={{ backgroundColor: '#F29559' }}><span className="text-topic bg3"> Good Mood</span></div>
          </div>
          <div>
            <span className="text-title">Easy choose - Easy choice - Easy Life</span>
          </div>
        </div>
        <div className="third-content">
          <div className="third-content-left">
            <img src={fifth} className="third-img left" />
          </div>
          <div className="third-content-right">
            <img src={sixth} className="third-img right" style={{ marginBottom: '1rem' }} />
            <img src={sevth} className="third-img right" />
          </div>
        </div>
        <div className="third-foot">
          <Link to={{
            pathname: `/product`,
          }} style={{ textDecoration: "none" }}>
            <Button className="button1 third-but">See All Products</Button>
          </Link>
        </div>
      </div>

      {/* fourth */}
      <div className="fourthSection">
        <div className="fourth-topic">
          <div style={{ display: 'flex' }}>
            <span className="text-topic">Promotion of the day</span>
          </div>
          <div>
            <span className="text-title" style={{ color: '#F2D492' }}>The special gift for you</span>
          </div>
        </div>
        <div className="fourth-promo">
          <Grid item xs={8} className="left-promo">
            <div className="left-promo-content">
              <span style={{ fontSize: 'xxx-large', letterSpacing: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Limited For You</span>
              <div className="promo-card">
                <div className="promo-card-left">XX%</div>
                <div className="promo-line"></div>
                <div className="promo-card-right">
                  <span className="promo-text1">Sale for</span>
                  <span className="promo-text2">First time</span>
                  <span className="promo-text1">Opening</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="right-promo">
            <span className="promo-special">Special</span>
            <span className="promo-promo">Promotion</span>
            <div className="promo-total">
              <span>On Sale!!!</span>
            </div>
            <Link to={{
              pathname: `/promotion`,
            }} style={{ textDecoration: "none" }}>
            <Button className="promo-button">See more !</Button>
            </Link>
          </Grid>
        </div>
      </div>


      {/* fifth */}
      <div className="fifthSection">
        <div className="fifth-topic">
          <div style={{ display: 'flex' }}>
            <span className="text-topic" style={{ letterSpacing: '0.3rem' }}>Your Happiness = Our Happiness</span>
          </div>
        </div>
        {/*<div className="fifth-Carou">*/}
        {/*  <Carousel maxWidth="sm">*/}
        {/*    {*/}
        {/*      items2.map((item, i) => <Item2 key={i} item2={item} />)*/}
        {/*    }*/}
        {/*  </Carousel>*/}
        {/*</div>*/}
        <hr style={{width:'80%',marginTop:'2rem',marginBottom:'2rem'}}></hr>
        <div className="fifth-spon">
          <img src={s1} />
          <img src={s2} />
          <img src={s3} />
          <img src={s4} />
        </div>
        <div className="fifth-footer">
          <div className="fifth-footer-topic">
            <span className="fifth-topic2">@Funiture</span>
            <span style={{ marginBottom: "3rem" }}>Never stop to create your dream</span>
          </div>
          <div className="fifth-footer-content">
            <div className="fifth-head">
              <img src={f1} className="fifth-img" />
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "1rem" }}>
                <span className="fifth-trans">Easy shop</span>
                <span>Online shopping</span>
              </div>
            </div>
            <div className="fifth-head">
              <img src={f2} className="fifth-img" />
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "1rem" }}>
                <span className="fifth-trans">Easy paid</span>
                <span>Payment Medthod</span>
              </div>
            </div>
            <div className="fifth-head">
              <img src={f3} className="fifth-img" />
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "1rem" }}>
                <span className="fifth-trans">Stay home</span>
                <span>Stay safe from COVID-19</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

function Item(props) {
  return (
    <Paper className="carousel-head">
      <img className="image-head" src={props.item.image} />
    </Paper>
  )
}

function Item2(props) {
  return (
    <Paper className="carousel-head" style={{ display:'flex',marginLeft:'6rem',marginRight:'6rem',padding:'2rem'}}>
      <div>
        <img src={props.item2.logo} style={{width:'20rem'}}/>
      </div>
      <div>
        <p>{props.item2.description}</p>
      </div>
    </Paper>
  )
}

export default Home;
