import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
} from "@material-ui/core";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const { loading, error, data } = useQuery(PRODUCT_QUERY);
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

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={3} style={{ marginTop: 10 }}>
          <Grid item xs={12} style={{paddingInline:20}}>
            <h1 style={{color:'#f29559'}}>All Product</h1>
            <hr/>
            <Grid container spacing={3}>
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
