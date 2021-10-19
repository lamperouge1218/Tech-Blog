const router = require("express").Router();
const { User, Comment, Post } = require("../models");
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        const posts = postData.map((post) =>
            post.get({ plain: true })
        );
        res.render('dashboard', {
            posts,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
