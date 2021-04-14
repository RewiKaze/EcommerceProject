import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const PromotionSchema = new Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  active: { type: Boolean, require: true },
  code: { type: String, require: true, unique: true },
  endDate: { type: Date, require: true },
  discount: { type: String, require: true }, //Change to Float
  minimumPrice: { type: String, require: true }, //Change to Float
  timestamp: { type: Date, default: Date.now },
});

const baseOptions = {
  inputType: {
    removeFields: ["timestamp"],
  },
};
export const PromotionModel = mongoose.model("Promotion", PromotionSchema);

export const PromotionTC = composeWithMongoose(PromotionModel, baseOptions);

export default PromotionModel;
