import mongoose from 'mongoose'
import {composeWithMongoose} from 'graphql-compose-mongoose'

const {Schema} = mongoose

const ProductSchema = new Schema({
    name:{},
    slug:{},
    description:{},
    price:{},
    image:{},
    stock:{},
})

export const ProductModel = mongoose.model('Product', ProductSchema)

export const ProductTC = composeWithMongoose(ProductModel)

export default CommentModel;