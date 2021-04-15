import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, require: true },
  slug: { type: String, require: true, unique: true },
  description: { type: String, require: true },
  quantity: { type: String, require: true }, // Change to Integer
  price: { type: String, require: true }, // Change to Float
  imageUrl: { type: String, require: true },
  tags: { type: Array, require: true },
  timestamp: { type: Date, default: Date.now },
  categoryId: {
    type: String,
    require: true,
    index: true,
    default: null,
    ref: "Category",
  },
});

const baseOptions = {
  inputType: {
    removeFields: ["timestamp"],
  },
};
export const ProductModel = mongoose.model("Product", ProductSchema);

export const ProductTC = composeWithMongoose(ProductModel, baseOptions);

export default ProductModel;
