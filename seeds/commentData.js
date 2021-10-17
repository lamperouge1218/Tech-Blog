const {Comment} = require("../models");

const commentdata = [
    {
        comment_text: "Computers can certainly do a lot!",
        user_id: "1",
        post_id: "1",
    },
    {
        comment_text: "I actually don't know the answer. Have you tried googling it?",
        user_id: "3",
        post_id: "2",
    },
    {
        comment_text: "Dude you have to stop memeing here this is serious buisness",
        user_id: "2",
        post_id: "3",
    },
    {
        comment_text: "I unironically think this song is art",
        user_id: "1",
        post_id: "4",
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;