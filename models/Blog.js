import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

export const Blog = models.Blog || model("Blog", BlogSchema);
