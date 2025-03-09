const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Create a new post
router.post("/create", async (req, res) => {
  try {
    const { title, description, photo, pdf } = req.body;

    // Validation
    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required." });
    }

    const newPost = new Post({ title, description, photo, pdf });
    const savedPost = await newPost.save();

    res.status(201).json({ message: "Post created successfully!", post: savedPost });
  } catch (error) {
    res.status(500).json({ message: "Error creating post: " + error.message });
  }
});
// GET Request to View Example Creation Template (Optional)
router.get('/create', (req, res) => {
  try {
    const examplePost = {
      title: "Example Title",
      description: "This is an example description.",
      photo: "examplePhotoUrl.jpg",
      pdf: "examplePdfUrl.pdf",
    };
    res.status(200).json({
      message: "Example post structure for testing.",
      examplePost,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Like Post
router.patch('/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.likes += 1;
    const updatedPost = await post.save();
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Dislike Post
router.patch('/:id/dislike', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.dislikes += 1;
    const updatedPost = await post.save();
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Add Comment
router.post('/:id/comment', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.comments.push({ text: req.body.text });
    const updatedPost = await post.save();
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Edit Post
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
