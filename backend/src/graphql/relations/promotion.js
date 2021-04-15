import moment from "moment";
import {CategoryTC, ProductTC, PromotionTC} from "../../models";

PromotionTC.addFields({
  timestamp: {
    type: "String",
    resolve: (source) => moment(source.timestamp).fromNow(),
    projection: { timestamp: 1 },
  },
});

PromotionTC.addRelation("category", {
  resolver: () => CategoryTC.getResolver("findById"),
  prepareArgs: {
    _id: (source) => source.categoryId,
  },
  projection: { categoryId: 1 },
});

PromotionTC.addRelation("product", {
  resolver: () => ProductTC.getResolver("findById"),
  prepareArgs: {
    _id: (source) => source.productId,
  },
  projection: { productId: 1 },
});

