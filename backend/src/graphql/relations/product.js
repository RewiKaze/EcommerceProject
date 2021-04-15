import moment from "moment";
import { ProductTC, CategoryTC} from "../../models";

ProductTC.addFields({
  timestamp: {
    type: "String",
    resolve: (source) => moment(source.timestamp).fromNow(),
    projection: { timestamp: 1 },
  },
});

ProductTC.addRelation("category", {
  resolver: () => CategoryTC.getResolver("findById"),
  prepareArgs: {
    _id: (source) => source.categoryId,
  },
  projection: { categoryId: 1 },
});
