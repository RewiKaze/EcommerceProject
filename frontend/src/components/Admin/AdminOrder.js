import React from "react";
import {
    Grid,
    Button,
    TextField,
    InputLabel,
    Select,
    FormControl,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import OrderItem from "./Adminorder/showOrder";
import { NavLink } from "react-router-dom";

const AdminOrder = () => {
    return (
        <React.Fragment>
            {/*Dashboard*/}
            <h1 style={{ color: "#202C39" }}>
                PRODUCT{" "}
                <span>
          <Button
              component={NavLink}
              to="/admin/product/create"
              variant="contained"
              style={{ backgroundColor: "#F2DC92" }}
          >
            <AddIcon /> Create Product
          </Button>
        </span>
            </h1>
            <hr />
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                    />
                </Grid>
                <Grid item xs={3}>
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
                <Grid item xs={3}>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                        <InputLabel htmlFor="outlined-age-native-simple">Price</InputLabel>
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
                <Grid item xs={3}>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                        <InputLabel htmlFor="outlined-age-native-simple">Status</InputLabel>
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
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <OrderItem />
                    </Grid>
                </Grid>
                {/*<Grid item xs={12}>*/}
                {/*    <ProductDemo/>*/}
                {/*</Grid>*/}
            </Grid>
            {/*<hr/>*/}
            {/*<TableProduct/>*/}
        </React.Fragment>
    );
};

export default AdminOrder;
