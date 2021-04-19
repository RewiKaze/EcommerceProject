import React, { useCallback, useState } from "react";
import { gql, useMutation } from "@apollo/client";

//Mutation
const CREATE_PRODUCT = gql`
    mutation($record: CreateOneProductInput!) {
        createProduct(record: $record) {
          recordId
        }
      }
`;
const ProductCreateDemo = () =>{
    const [name, setName]= useState("");
    const [slug, setSlug]= useState("");
    const [price, setPrice]= useState("");
    const [description, setDescription]= useState("");
    const [imageUrl, setImageUrl]= useState("");
    const [quantity, setQuantity]= useState("");
    const [categoryId, setCategoryId]= useState("");
    const [createProduct] = useMutation(CREATE_PRODUCT);

    const handleNameChange = useCallback((e) => {
        setName(e.target.value);
    }, []);

    const handleSlugChange = useCallback((e) => {
        setSlug(e.target.value);
    }, []);
    const handlePriceChange = useCallback((e) => {
        setPrice(e.target.value);
    }, []);
    const handleCategoryIdChange = useCallback((e) => {
        setCategoryId(e.target.value);
    }, []);
    const handleStatusChange4 = useCallback((e) => {
        setQuantity(e.target.value);
    }, []);
    const handleImageUrlChange = useCallback((e) => {
        setImageUrl(e.target.value);
    }, []);
    const handleDescriptionChange = useCallback((e) => {
        setDescription(e.target.value);
    }, []);

    const handleCreateProduct = useCallback(
        async (e) => {
            e.preventDefault();
            const variables = {
                record: {name, slug, description,imageUrl, categoryId,price, quantity
                },
            };
            await createProduct({
                variables,
            });
            setName("");
            setSlug("");
            setPrice("");
            setCategoryId("");
            setQuantity("");
            setImageUrl("");
            setDescription("");
        },
        [createProduct,name, slug, description,imageUrl, categoryId,price, quantity
        ]
    );

    return(
        <form onSubmit={handleCreateProduct}>
            <label>Name:</label><br/>
            <input type="text"  value={name} onChange={handleNameChange} required/><br/>
            <label >Slug:</label><br/>
            <input type="text"  value={slug} onChange={handleSlugChange} required/><br/>
            <label >Price(THB): </label><br/>
            <input type="text"  value={price} onChange={handlePriceChange} required/><br/>
            <label >Category(ID):</label><br/>
            <input type="text"  value={categoryId} onChange={handleCategoryIdChange}/><br/>
            <label >Quantity: </label><br/>
            <input type="text" value={quantity} onChange={handleStatusChange4}/><br/>
            <label>ImageUrl:</label><br/>
            <input type="text"  value={imageUrl} onChange={handleImageUrlChange}/><br/>
            <label >Description:</label><br/>
            <input type="text" value={description} onChange={handleDescriptionChange}/><br/>
            {/*<label htmlFor="lname">Tag:</label><br/>*/}
            {/*<input type="text" id="lname" name="lname" value=""/><br/>*/}

                <input type="submit" value="Submit"/><br/>
             </form>)
}
export default ProductCreateDemo;