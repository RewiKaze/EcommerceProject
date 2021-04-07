import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const PromotionSchema = new Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  active: { type: Boolean, require: true },
  code: { type: String, require: true },
  endDate: { type: Date , require: true},
  discount: { type: String, require:true}, //Change to Float
  minimumPrice:{ type: String, require:true} //Change to Float
});

export const PromotionModel = mongoose.model("Promotion", PromotionSchema);

export const PromotionTC = composeWithMongoose(PromotionModel);

export default PromotionModel;
