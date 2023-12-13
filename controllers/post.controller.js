import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {}
};

export const likePost = async (req, res) => {
  try {
    console.log(req.params);
    const post = await Post.updateOne({ _id: req.params.postId }, { $inc: { likes: 1 } });
    res.status(201).json(post);
  } catch (error) {}
};

export const dislikePost = async (req, res) => {
  try {
    const post = await Post.updateOne({ _id: req.params.postId }, { $inc: { dislikes: 1 } });
    res.status(201).json(post);
  } catch (error) {}
};
