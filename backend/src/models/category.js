import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const CategorySchema = new Schema({
    name: { type: String, require: true },
    slug: { type: String, require: true, unique: true }
});

export const CategoryModel = mongoose.model("Category", CategorySchema);

export const CategoryTC = composeWithMongoose(CategoryModel);

export default CategoryModel;
