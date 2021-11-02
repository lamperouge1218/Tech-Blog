const router = require("express").Router();
const { User, Comment, Post } = require("../models");
const withAuth = require("../utils/auth");

// Renders all posts by all users on the main Homepage upon load
// User does not have to be logged in to see these posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const posts = postData.map((userPosts) => userPosts.get({ plain: true }));

    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render the Dashboard
// Dashboard is another Posts route
// We need to find all posts by the logged-in User's ID
// TODO: Set this up such that we are getting all posts by a User's ID
// and rendering them to the page
router.get("/dashboard", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [{ model: Post }, { model: Comment }],
    });
    const posts = userData.get({ plain: true });
    res.render("dashboard", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  // Otherwise, render the 'login' template
  res.render("login");
});

// Renders signup.handlebars upon navigating to this address
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

// Render the create a post form
router.get("/post", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }

  res.render("post", { loggedIn: req.session.loggedIn });
});

module.exports = router;
