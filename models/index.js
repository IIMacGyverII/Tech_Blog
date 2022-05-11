const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const { hasMany } = require('./User');

Comment.belongsTo(Post, {
  foreignKey: 'comment_id'
});

User.hasMany(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {

});

User.hasMany(Comment, {

});

Post.hasMany(Comment, {
  // foreginKey: 'user_id'
});

Comment.belongsTo(User, {
  foreginKey: 'user_id',
});

module.exports = { User, Post, Comment };
