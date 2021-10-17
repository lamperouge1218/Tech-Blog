const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

// Users can have many posts associated with them
User.hasMany(Post, {
    foreignKey: "user_id"
});

// Reciprocal association of above: Many posts can belong to one user
Post.belongsTo(User, {
    foreignKey: "user_id"
});

// Posts can have many comments associated with them.
// When a post is deleted, all of its comments are as well
Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
    hooks: true,
});

// Reciprocal association of above
Comment.belongsTo(Post, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
    hooks: true,
});

// Users can have many comments associated with them.
// When a user is deleted, all of its comments are as well
User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    hooks: true,
});

// Reciprocal association of above
Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    hooks: true,
});

module.exports = { User, Comment, Post}