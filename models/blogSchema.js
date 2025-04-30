import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content_markdown: { type: String, required: true },
    cover_image_url: { type: String, required: true },
    publication_date: { type: Date, required: true },
    author: { type: String, required: true },
    tags: [{ type: String }],
  },
  { timestamps: true },
);

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;
