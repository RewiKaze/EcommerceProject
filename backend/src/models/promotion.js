import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;



const PromotionSchema = new Schema({
  name: { type: String, require: true }, //Coupon name
  imageUrl: { type: String, require: true, default: null },
  description: { type: String, require: true }, //Coupon description
  amount:{type:String, require:true}, // Coupon amount
  code: { type: String, require: true, unique: true }, //Coupon code
  // endDate: { type: Date, require: true }, // Coupon exp
  endDate: { type: String, require: true }, // Coupon exp
  discount: { type: String, require: true }, // Coupon discount
  productId: {
    type: String,
    require: true,
    index: true,
    default: null,
    ref: "Product",
  },

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
