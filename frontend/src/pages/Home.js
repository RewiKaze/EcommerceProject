import "../css/Home.css";
import Typography from "@material-ui/core/Typography";
const Home = () => {
  return (
    <>
      <div className="firstSection">
        <Typography variant="h1">
          Shopping,<br></br>Shipping,<br></br>Sleeping
        </Typography>
        <div>Carousel</div>
      </div>
      <div className="secondSection"></div>
    </>
  );
};

export default Home;
