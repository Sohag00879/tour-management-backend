import Blog from "../models/Blogs.js";

//create a new Blog
export const createBlog = async (req, res) => {
  const newBlog = new Blog(req.body);
  try {
    const savedBlog = await newBlog.save();

    res.status(200).json({
      success: true,
      message: "Successfully added",
      data: savedBlog,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to added. Try again",
    });
  }
};

//delete blog
export const deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    await Blog.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to delete",
    });
  }
};

//getAll blog
export const allBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});

    res.status(200).json({
      success: true,
      message: "Successfully fetched all blog",
      data: blogs,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not Found",
    });
  }
};
