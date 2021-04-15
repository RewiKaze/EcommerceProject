import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const enumPromotionType = {
  DISCOUNT: "Discount",
  FREESHIPPING: "Free Shipping",
};

const PromotionSchema = new Schema({
  type: {
    type: String,
    require: true,
    enum: Object.keys(enumPromotionType),
    index: true,
  }, // Select Discount Type
  name: { type: String, require: true }, //Coupon name
  description: { type: String, require: true }, //Coupon description
  amount:{type:String, require:require}, // Coupon amount
  active: { type: Boolean, require: true }, // Status
  code: { type: String, require: true, unique: true }, //Coupon code
  endDate: { type: Date, require: true }, // Coupon exp
  discount: { type: String, require: true }, // Coupon discount
  minimumPrice: { type: String, require: true }, //Change to Float, Minimum spend
  categoryId: {
    type: String,
    require: true,
    index: true,
    default: null,
    ref: "Category",
  },
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
