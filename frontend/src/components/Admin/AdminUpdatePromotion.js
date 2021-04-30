import React from "react";
import {Grid, Button, TextField} from "@material-ui/core";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {PROMOTION_QUERY} from "../../graphql/promotionQuery";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#202C39',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const AdminUpdatePromotion = () => {
    const { _id } = useParams();
    const { loading, data, error } = useQuery(PROMOTION_QUERY, { variables: { _id } , fetchPolicy: 'network-only'})
    if (loading) {
        return 'Loading ...'
    }
    if (error) {
        return 'Error !!'
    }
    const filteredData = data.promotions.find((each) => each._id === _id);
    return (
        <React.Fragment>
            {console.log(filteredData)}
            {/*Dashboard*/}
            <h1 style={{color:'#202C39'}}>EDIT PROMOTION (ID: {filteredData._id})</h1>
            <hr/>
                <form
                    // onSubmit={handleCreatePromotion}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={5}>
                            <TextField
                                label="Promotion Name"
                                variant="outlined"
                                style={{ width: "100%"}}
                                type="text"
                                placeholder={filteredData.name}
                                // value={name}
                                // onChange={handleNameChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                label="Amount"
                                variant="outlined"
                                style={{ width: "100%"}}
                                type="text"
                                placeholder={filteredData.amount}
                                // value={amount}
                                // onChange={handleAmountChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Discount (Percent)"
                                variant="outlined"
                                style={{ width: "100%"}}
                                type="text"
                                placeholder={filteredData.discount}
                                // value={discount}
                                // onChange={handleDiscountChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                label="ProductID"
                                variant="outlined"
                                style={{ width: "100%"}}
                                placeholder={filteredData.productId}
                                type="text"
                                // value={productId}
                                // onChange={handleProductIdChange}
                                required
                            />
                        </Grid>
                    </Grid>
                    <hr/>
                    <Button variant="contained" color="primary" type="submit" value="Submit">
                        Update
                    </Button>
                    {'  '}
                    <Button variant="outlined" color="secondary">
                        Back
                    </Button>
                </form>
            <br/>
                    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Detail</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
              Product ID:
              </StyledTableCell>
              <StyledTableCell>{filteredData.product._id}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
              Product Name:
              </StyledTableCell>
              <StyledTableCell>{filteredData.product.name}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
              Product Type:
              </StyledTableCell>
              <StyledTableCell>{filteredData.product.type}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
              Product Price:
              </StyledTableCell>
              <StyledTableCell>{filteredData.product.price}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
              Product Image:
              </StyledTableCell>
              <StyledTableCell><img src={filteredData.product.imageUrl}/></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
              Product Description:
              </StyledTableCell>
              <StyledTableCell>{filteredData.product.description}</StyledTableCell>
            </StyledTableRow>

        </TableBody>
      </Table>
    </TableContainer>


        </React.Fragment>
    );
};

export default AdminUpdatePromotion;
