import "../css/Home.css";
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Container, Button } from '@material-ui/core'
import first from "../image/home/1.png"
import second from "../image/home/2.png"
import third from "../image/home/3.png"
import fourth from "../image/home/4.png"
import heart from "../image/home/heart.png"
import fifth from "../image/home/5.png"
import sixth from "../image/home/6.png"
import sevth from "../image/home/7.png"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardItem from "../components/Home/showProduct"
import {Link} from "react-router-dom";
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


      <div className={classes.root}>
        <Grid  spacing={3}>
          <Grid item xs={11} style={{padding:20}}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
              <h1>Hot Deal</h1>
              </Grid>
              <PromotionItem/>
              <Grid item xs={12}>
                <h1>Product Latest</h1>
              </Grid>
              <CardItem />
            </Grid>

          </Grid>
        </Grid>
      </div>

      {/*<h1 className="text-topic"></h1>*/}
      {/* second */}
      {/*<div className="secondSection">*/}
      {/*  <Container>*/}
      {/*    <div className="second-head">*/}
      {/*      <span className="text-topic">Latest Product</span><br></br>*/}
      {/*      <span className="text-title">Furniture and home inspiration</span>*/}
      {/*    </div>*/}
      {/*    <div className="second-content">*/}
      {/*      <div className="best-sell">*/}
      {/*        <img className="best-sell-img" src={fourth} />*/}
      {/*        <div className="best-sell-content">*/}
      {/*          <span className="best-sell-name">Sofa</span>*/}
      {/*          <img className="heart" src={heart} />*/}
      {/*        </div>*/}
      {/*        <span className="best-sell-price">$ 300.00</span>*/}
      {/*      </div>*/}
      {/*      <div className="best-sell">*/}
      {/*        <img className="best-sell-img" src={fourth} />*/}
      {/*        <div className="best-sell-content">*/}
      {/*          <span className="best-sell-name">Sofa</span>*/}
      {/*          <img className="heart" src={heart} />*/}
      {/*        </div>*/}
      {/*        <span className="best-sell-price">$ 300.00</span>*/}
      {/*      </div>*/}
      {/*      <div className="best-sell">*/}
      {/*        <img className="best-sell-img" src={fourth} />*/}
      {/*        <div className="best-sell-content">*/}
      {/*          <span className="best-sell-name">Sofa</span>*/}
      {/*          <img className="heart" src={heart} />*/}
      {/*        </div>*/}
      {/*        <span className="best-sell-price">$ 300.00</span>*/}
      {/*      </div>*/}
      {/*      */}
      {/*      <div className="best-sell">*/}
      {/*        <img className="best-sell-img" src={fourth} />*/}
      {/*        <div className="best-sell-content">*/}
      {/*          <span className="best-sell-name">Sofa</span>*/}
      {/*          <img className="heart" src={heart} />*/}
      {/*        </div>*/}
      {/*        <span className="best-sell-price">$ 300.00</span>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </Container>*/}
      {/*</div>*/}
      {/* third */}
      <div className="thirdSection">
        <div className="third-topic">
          <div>
            <span className="text-topic">Good Furniture,</span>
            <span className="text-topic bg3"> Good Mood</span>
          </div>
          <div>
            <span className="text-title">Easy choose - Easy choice - Easy Life</span>
          </div>
        </div>
        <div className="third-content">
          <div className="third-content-left">
            <img src={fifth} className="third-img left"/>
          </div>
          <div className="third-content-right">
            <img src={sixth} className="third-img right"/>
            <img src={sevth} className="third-img right"/>
          </div>
        </div>
        <div className="third-foot">
          <Link to={{
            pathname: `/product/`,
          }} style={{ textDecoration: "none" }}>
          <Button className="button1 third-but">See All Products</Button>
          </Link>
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

export default Home;
