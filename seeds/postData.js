const {Post} = require("../models");

const postdata = [
    // Post ID 1
    {
        title: "I am a computer fan",
        post_text: "Just love these cool computers!",
        date: "10/1/2021",
        user_id: "2",
    },
    // Post ID 2
    {
        title: "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like? ",
        post_text: "Have they?",
        date: "10/1/2021",
        user_id: "1",
    },
    // Post ID 3
    {
        title: "According to all known laws of aviation...",
        post_text: "there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyways. Because bees don't care what humans think is impossible.",
        date: "10/1/2021",
        user_id: "1",
    },
    // Post ID 4
    {
        title: "Somebody...",
        post_text: "once told me the world is gonna roll me, I aint the sharpest tool in the shed. She was looking kind of dumb with her finger and her thumb In the shape of an L on her forehead.",
        date: "10/1/2021",
        user_id: "3",
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;