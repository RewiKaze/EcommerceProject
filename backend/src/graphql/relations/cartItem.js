// import { CartItemTC, ProductTC, UserTC } from "../../models";

// CartItemTC.addRelation("product", {
//   resolver: () => ProductTC.getResolver("findById"),
//   prepareArgs: {
//     _id: (source) => source.productId,
//   },
//   projection: { productId: 1 },
// });

// CartItemTC.addRelation("author", {
//   resolver: () => UserTC.getResolver("findById"),
//   prepareArgs: {
//     _id: (source) => source.authorId,
//   },
//   projection: { authorId: 1 },
// });
