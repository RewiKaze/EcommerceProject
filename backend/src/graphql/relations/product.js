import moment from "moment";
import { ProductTC } from "../../models";

ProductTC.addFields({
  timestamp: {
    type: "String",
    resolve: (source) => moment(source.timestamp).fromNow(),
    projection: { timestamp: 1 },
  },
});
