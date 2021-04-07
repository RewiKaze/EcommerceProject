import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, require: true },
  slug: { type: String, require: true, unique: true },
  description: { type: String, require: true },
  price: { type: String, require: true }, // Change to Float
  imageurl: { type: String, require: true },
  stock: { type: String, require: true }, // Change to Integer
});

export const ProductModel = mongoose.model("Product", ProductSchema);

export const ProductTC = composeWithMongoose(ProductModel);

export default ProductModel;
