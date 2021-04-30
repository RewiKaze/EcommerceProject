import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Paper,
  InputLabel,
  FormControl,
  Select,
} from "@material-ui/core";
import { useParams} from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CardItem from "../components/CardItem";
import PageSelect from "../components/PageSelect";
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
  // const [products, setProducts] = useState([]);
  const { type } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);
  const { loading, data, error } = useQuery(PRODUCT_QUERY, {
    variables: { type },
    fetchPolicy: "network-only",
  });
  if (loading) {
    return "Loading ...";
  }
  if (error) {
    return "Error !!";
  }
  const indexOfLastProducts = currentPage * productsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
  const currentProducts = data.products.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredData = data.products.find((each) => each.type === type);
// const [checked, setchecked]
// const handleToggle =(filteredData) =>{

// }
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
              <FormControlLabel
          value="All"
          control={<Checkbox color="primary"/>}
          label="All"
          labelPlacement="All"
        /><br></br>
        <FormControlLabel
        value="Bedroom"
        control={<Checkbox color="primary" />}
        label="Bedroom"
        labelPlacement="Bedroom"
      /><br></br>
      <FormControlLabel
      value="Bathroom"
      control={<Checkbox color="primary" />}
      label="Bathroom"
      labelPlacement="Bathroom"
    /><br></br>
    <FormControlLabel
    value="Kitchen"
    control={<Checkbox color="primary" />}
    label="Kitchen"
    labelPlacement="Kitchen"
  /><br></br>
  <FormControlLabel
      value="Living room"
      control={<Checkbox color="primary" />}
      label="Living room"
      labelPlacement="Living room"
    />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={3}>
              {/* {console.log(data.products)} */}
              {currentProducts.map((each) => {
                return <CardItem product={each} />;
              })}
            </Grid>
          </Grid>
          <Grid container justify="center">
            <PageSelect
              productsPerPage={productsPerPage}
              totalProducts={data.products.length}
              paginate={paginate}
            />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Shops;
