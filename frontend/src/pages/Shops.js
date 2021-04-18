import { TextField, Container } from "@material-ui/core";
import CardItem from "../components/CardItem";

const Shops = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        style={{
          marginTop: "1em",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          style={{ width: "75vw" }}
        />

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </Container>
    </>
  );
};

export default Shops;
