const router = require("express").Router();
const { User, Comment, Post } = require("../../models");
const withAuth = require("../../utils/auth");

// TODO: GET route to get all Posts, possibly a post by User ID, or by Post ID
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: ["id", "title", "post_text", "created_at"],
    });
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// TODO: POST route to create new Post, if logged in
router.post("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      user_id: req.body.user_id,
    });
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// TODO: UPDATE route to edit a Post, if logged in

// TODO: DELETE route to delete a Post, if logged in

module.exports = router;
