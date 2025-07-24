import SingleComment from './SingleComment';

const CommentsList = ({ comments, onDelete }) => (
  <ul>
    {comments.map((c) => (
      <SingleComment key={c._id} comment={c} onDelete={onDelete} />
    ))}
  </ul>
);

export default CommentsList;