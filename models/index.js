const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

User.hasMany(Post, {
    foreignKey: "user_id"
});

Post.belongsTo(User, {
    foreignKey: "user_id"
});

Comment.belongsTo(Post, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
    hooks: true,
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    hooks: true,
});

Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
    hooks: true,
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    hooks: true,
});

module.exports = { User, Comment, Post}