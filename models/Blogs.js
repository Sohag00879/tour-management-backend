import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema(
  {
    blog: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blogs", blogsSchema);
