import React, { setState, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Paper,
  InputLabel,
  FormControl,
  Select,
} from "@material-ui/core";
import CardItem from "../components/CardItem";

// query Item
import { PRODUCT_QUERY } from "../graphql/productQuery";
import { useQuery } from "@apollo/client";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const Shops = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const { loading, error, data } = useQuery(PRODUCT_QUERY);
  if (loading) {
    return "Loading ...";
  }
  if (error) {
    return "Error !!";
  }
  // const indexOfLastProducts = currentPage * productsPerPage;
  // const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
  // const currentProducts = products.slice(
  //   indexOfFirstProducts,
  //   indexOfLastProducts
  // );

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={3} style={{ marginTop: 10 }}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <TextField
                  label="Search"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={2}>
                <FormControl variant="outlined" style={{ width: "100%" }}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Category
                  </InputLabel>
                  <Select
                    native
                    label="Category"
                    inputProps={{
                      name: "Category",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" />
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="Tags"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Paper
              className={classes.paper}
              style={{ color: "#f29559", fontWeight: "bold" }}
            >
              CATEGORY
              <hr />
              <p style={{ fontWeight: "lighter" }}>All</p>
              <p style={{ fontWeight: "lighter" }}>Bedroom</p>
              <p style={{ fontWeight: "lighter" }}>Bathroom</p>
              <p style={{ fontWeight: "lighter" }}>Kitchen</p>
              <p style={{ fontWeight: "lighter" }}>Living room</p>
              <p style={{ fontWeight: "lighter" }}>Other</p>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={3}>
              {console.log(data.products)}
              {data.products.map((each) => {
                return <CardItem product={each} />;
              })}
              <div>Pagination Here</div>
              {/* <CardItem products={data} /> */}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Shops;
