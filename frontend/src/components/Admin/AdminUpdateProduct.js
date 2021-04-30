import React, { useEffect, useState, useCallback } from "react";
import {
  Grid,
  Button,
  TextField,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { useQuery, useMutation } from "@apollo/client";
import { PRODUCT_QUERY } from "../../graphql/productQuery";
import { UPDATE_PRODUCT_MUTATION } from "../../graphql/updateProduct";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  formControl: {
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AdminUpdateProduct = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { _id } = useParams();

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [updateProduct] = useMutation(UPDATE_PRODUCT_MUTATION);
  const { loading, data, error } = useQuery(PRODUCT_QUERY, {
    variables: { _id },
    fetchPolicy: "network-only",
  });
  const handleNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const handleSlugChange = useCallback((e) => {
    setSlug(e.target.value);
  }, []);
  const handleDescriptionChange = useCallback((e) => {
    setDescription(e.target.value);
  }, []);
  const handlePriceChange = useCallback((e) => {
    setPrice(e.target.value);
  }, []);
  const handleTypeChange = useCallback((e) => {
    setType(e.target.value);
  }, []);
  const handleQuantityChange = useCallback((e) => {
    setQuantity(e.target.value);
  }, []);
  const handleImageUrlChange = useCallback((e) => {
    setImageUrl(e.target.value);
  }, []);

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      //   const variables = {
      //     record: {
      //       updateProduct,
      //       _id: data.products.find((each) => each._id === _id)._id,
      //       name,
      //       description,
      //       price,
      //       type,
      //       quantity,
      //       imageUrl,
      //       slug,
      //     },
      //   };
      //   console.log(variables);
      console.log(data.products.find((each) => each._id === _id)._id);
      await updateProduct({
        // _id: 1,
        // variables,
        // // refetchQueries: [{ query: PRODUCT_QUERY }],
        variables: {
          id: data.products.find((each) => each._id === _id)._id ?? 0,
          record: {
            updateProduct,
            name,
            description,
            price,
            type,
            quantity,
            imageUrl,
            slug,
          },
        },
      });
      setName("");
      setSlug("");
      setDescription("");
      setPrice("");
      setType("");
      setQuantity("");
      setImageUrl("");
      history.push("/admin/product");
      alert("Update Product Success!!!");
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
      alert(err);
    }
  };
  // [updateProduct,name, description, price, type, quantity, imageUrl, slug]

  // const saveProduct = async (e) => {
  //   e.preventDefault()
  //   console.log(productData)
  //   try {
  //     await updateProduct({
  //       variables: {
  //         id: data?.products?._id ?? 0,
  //         record: productData
  //       }
  //     })
  //     history.push("/admin/product");
  //     alert("Update Product Success!!!");
  //   } catch (error) {
  //     console.log(error)
  //     alert("Update Product Fail!!!");
  //   }
  // }

  if (loading) {
    return "Loading ...";
  }
  if (error) {
    return "Error !!";
  }
  const filteredData = data.products.find((each) => each._id === _id);

  return (
    <React.Fragment>
      {/*{console.log(filteredData)}*/}
      {/*Dashboard*/}
      {data ? (
        <div>
          <h1 style={{ color: "#202C39" }}>
            EDIT PRODUCT (ID:{filteredData._id} )
          </h1>
          <hr />

          <form onSubmit={saveProduct}>
            <Grid container spacing={3}>
              <Grid item xs={5}>
                <TextField
                  label="Product Name"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  placeholder={filteredData.name}
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={type}
                    onChange={handleTypeChange}
                    placeholder={filteredData.type}
                    label="Type"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"BEDROOM"}>Bedroom</MenuItem>
                    <MenuItem value={"BATHROOM"}>Bathroom</MenuItem>
                    <MenuItem value={"KITCHEN"}>Kitchen</MenuItem>
                    <MenuItem value={"LIVINGROOM"}>Living Room</MenuItem>
                    <MenuItem value={"OTHER"}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Slug"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                  value={slug}
                  onChange={handleSlugChange}
                  placeholder={filteredData.slug}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  label="Description"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder={filteredData.description}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  label="Price (THB)"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                  value={price}
                  onChange={handlePriceChange}
                  placeholder={filteredData.price}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Quantity"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  label="imageUrl"
                  variant="outlined"
                  style={{ width: "100%" }}
                  type="text"
                  value={imageUrl}
                  onChange={handleImageUrlChange}
                  placeholder={filteredData.imageUrl}
                />
              </Grid>
            </Grid>
            <br />
            <hr />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              value="Submit"
            >
              Update
            </Button>
            {"  "}
            <Link
              to={{
                pathname: `/admin/product`,
              }}
              style={{ textDecoration: "none" }}
            >
              <Button variant="outlined" color="secondary">
                Back
              </Button>
            </Link>
          </form>
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </React.Fragment>
  );
};

export default AdminUpdateProduct;
