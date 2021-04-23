import mongoose from "mongoose";

mongoose.Promise = Promise;
mongoose.connect("mongodb://127.0.0.1:27017/", {
  dbName: "e-commerce2",
  promiseLibrary: Promise,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
