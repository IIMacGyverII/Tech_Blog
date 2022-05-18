const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
// const { hasMany } = require('./User');

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {

});

User.hasMany(Comment, {

});

Post.hasMany(Comment, {
  // foreginKey: 'post_id'
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  // foreginKey: 'user_id',
});

module.exports = { User, Post, Comment };
