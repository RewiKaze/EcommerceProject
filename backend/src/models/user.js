import mongoose from "mongoose";
import bcrypt from "mongoose-bcrypt";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const enumUserType = {
  CUSTOMER: "Customer",
  ADMIN: "Admin",
};

const UserSchema = new Schema({
  type: {
    type: String,
    require: true,
    enum: Object.keys(enumUserType),
    index: true,
  },
  name: { type: String, required: true },
  username: { type: String, required: true, index: true, unique: true },
  password: { type: String, required: true, bcrypt: true },
  dateOfBirth: { type: Date, require: true },
});
UserSchema.plugin(bcrypt);

export const UserModel = mongoose.model("User", UserSchema);

export const UserTC = composeWithMongoose(UserModel).removeField("password");

export default UserModel;
