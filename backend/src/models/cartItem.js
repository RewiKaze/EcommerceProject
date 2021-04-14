// import mongoose from "mongoose";
// import { composeWithMongoose } from "graphql-compose-mongoose";

// const { Schema } = mongoose;

// const CartItemSchema = new Schema({
//     productId:{
//         type:String,
//         require:true,
//         index:true,
//         ref: 'Product'
//     },
//     authorId:{
//         type:String,
//         require:true,
//         index:true,
//         ref: 'User'
//     },
//     quantity:{type: String, require: true},
//     timestamp: { type: Date, default: Date.now },
// })

// const baseOptions = {
//     inputType: {
//       removeFields: ['timestamp'],
//     },
//   }

// export const CartItemModel = mongoose.model("CartItem", CartItemSchema);

// export const CartItemTC = composeWithMongoose(CartItemModel, baseOptions);

// export default CartItemModel;
