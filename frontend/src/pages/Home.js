import "../css/Home.css";
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Container } from '@material-ui/core'
import first from "../image/home/1.png"
import second from "../image/home/2.png"
import third from "../image/home/3.png"
import fourth from "../image/home/4.png"
import heart from "../image/home/heart.png"
const Home = () => {
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
    <>
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
      {/* second */}
      <div className="secondSection">
        <Container>
          <div className="second-head">
            <span className="second-head-topic">Best Seller Product</span><br></br>
            <span className="second-head-title">The best of the year</span>
          </div>
          <div className="second-content">
            <div className="best-sell">
              <img className="best-sell-img" src={fourth} />
              <div class="best-sell-content">
                <span className="best-sell-name">Sofa</span>
                <img className="heart" src={heart} />
              </div>
              <span className="best-sell-price">$ 300.00</span>
            </div>
            <div className="best-sell">
              <img className="best-sell-img" src={fourth} />
              <div class="best-sell-content">
                <span className="best-sell-name">Sofa</span>
                <img className="heart" src={heart} />
              </div>
              <span className="best-sell-price">$ 300.00</span>
            </div>
            <div className="best-sell">
              <img className="best-sell-img" src={fourth} />
              <div class="best-sell-content">
                <span className="best-sell-name">Sofa</span>
                <img className="heart" src={heart} />
              </div>
              <span className="best-sell-price">$ 300.00</span>
            </div>
            <div className="best-sell">
              <img className="best-sell-img" src={fourth} />
              <div class="best-sell-content">
                <span className="best-sell-name">Sofa</span>
                <img className="heart" src={heart} />
              </div>
              <span className="best-sell-price">$ 300.00</span>
            </div>
          </div>
        </Container>
      </div>
      {/* third */}
      <div className="thirdSection">
        <div className="third-topic">
          <div>
            <span className="third-head">Good Furniture,</span>
            <span className="third-head bg-3">Good Mood</span>
          </div>
        </div>
        <div className="third-content"></div>
        <div className="third-foot"></div>
      </div>
    </>
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
