import {model, Schema, models} from "mongoose";

const ProductSchema = new Schema({
  title: {type:String, required:true},
  description: {type:String},
  price: {type: Number, required: true},
  images: [{ type: String }],  // This will store an array of image links (Google Drive links)
});

export const Product = models.Product || model('Product', ProductSchema);