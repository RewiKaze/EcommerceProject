
import React, { useCallback, useState } from "react";
import { gql, useMutation } from "@apollo/client";

//Mutation
const CREATE_PROMOTION = gql`
    mutation($record: CreateOnePromotionInput!) {
        createPromotion(record: $record) {
          recordId
        }
      }
`;
const PromotionCreateDemo = () =>{
    const [name, setName]= useState("");
    const [code, SetCode]= useState("");
    const [description, setDescription]= useState("");
    const [imageUrl, setImageUrl]= useState("");
    const [amount, setAmount]= useState("");
    // const [active, setActive]= useState("");
    const [discount, setDiscount]= useState("");
    const [endDate, setEndDate]= useState("");
    const [productId, setProductId]= useState("");
    const [createPromotion] = useMutation(CREATE_PROMOTION);

    const handleNameChange = useCallback((e) => {
        setName(e.target.value);
    }, []);
    const handleCodeChange = useCallback((e) => {
        SetCode(e.target.value);
    }, []);
    const handleDescriptionChange = useCallback((e) => {
        setDescription(e.target.value);
    }, []);
    const handleImageUrlChange = useCallback((e) => {
        setImageUrl(e.target.value);
    }, []);
    const handleAmountChange = useCallback((e) => {
        setAmount(e.target.value);
    }, []);
    // const handleActiveChange = useCallback((e) => {
    //     setActive(e.target.value);
    // }, []);
    const handleDiscountChange = useCallback((e) => {
        setDiscount(e.target.value);
    }, []);
    const handleDateChange = useCallback((e) => {
        setEndDate(e.target.value);
    }, []);
    const handleProductIDChange = useCallback((e) => {
        setProductId(e.target.value);
    }, []);

    const handleCreateProduct = useCallback(
        async (e) => {
            e.preventDefault();
            const variables = {
                record: {name, code, description, imageUrl, amount, discount, endDate,  productId
                },
            };
            await createPromotion({
                variables,
            });
            setName("");
            SetCode("");
            setDescription("");
            setImageUrl("");
            setAmount("");
            setDiscount("");
            setEndDate("");
            setProductId("");
        },
        [createPromotion,name, code, description, imageUrl, amount, discount, endDate,  productId
        ]
    );

    return(
        <form onSubmit={handleCreateProduct}>
            <label>Name:</label><br/>
            <input type="text"  value={name} onChange={handleNameChange} required/><br/>
            <label >Code:</label><br/>
            <input type="text"  value={code} onChange={handleCodeChange} required/><br/>
            <label >Description: </label><br/>
            <input type="text"  value={description} onChange={handleDescriptionChange} required/><br/>
            <label >ImageUrl:</label><br/>
            <input type="text"  value={imageUrl} onChange={handleImageUrlChange}/><br/>
            <label >Amount: </label><br/>
            <input type="text" value={amount} onChange={handleAmountChange}/><br/>
            <label >Discount:</label><br/>
            <input type="text" value={discount} onChange={handleDiscountChange}/><br/>
            <label >Date:</label><br/>
            <input type="text" value={endDate} onChange={handleDateChange} placeholder="yyyy-mm-dd"/><br/>
            <label >ProductID:</label><br/>
            <input type="text" value={productId} onChange={handleProductIDChange}/><br/>


            <input type="submit" value="Submit"/><br/>
        </form>)
}
export default PromotionCreateDemo;