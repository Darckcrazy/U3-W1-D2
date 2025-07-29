const AUTH_TOKEN = '';

const SingleComment = ({ comment, onDelete }) => {
  const handleDelete = async () => {
    await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
      { method: 'DELETE', headers: { Authorization: AUTH_TOKEN } }
    );
    onDelete();
  };

  return (
    <li>
      {comment.comment} - Rate: {comment.rate}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default SingleComment;