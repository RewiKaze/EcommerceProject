import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  Button,
} from "@material-ui/core";
import logo from "../image/logo.png";

const CardItem = () => {
  return (
    <Card
      style={{
        flex: "0 0 calc(100vw / 5)",
        margin: "1em",
        textAlign: "center",
      }}
    >
      <Typography>
        <CardMedia
          style={{
            height: "10vw",
            margin: "auto",
            marginTop: "1em",
            borderRadius: "10px",
            backgroundPosition: "center",
          }}
          image={logo}
        />
        <CardContent>
          <h2>NameItem</h2>
          Description
          <div></div>
          <Button>View</Button>
        </CardContent>
      </Typography>
    </Card>
  );
};
export default CardItem;
