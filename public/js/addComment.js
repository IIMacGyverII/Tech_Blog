
const CommentAddHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment').value.trim();
    const comment_id = document.querySelector('input[name="post-id"]').value;
    // console.log(comment_id)
    if (comment && comment_id)  {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment, comment_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/comment/${comment_id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };

document
  .querySelector('#addCommentBtn')
  .addEventListener('click', CommentAddHandler);
