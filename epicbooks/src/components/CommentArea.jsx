import React, { useEffect, useState } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import Loading from './Loading';
import Error from './Error';

const AUTH_TOKEN = 'Bearer YOUR_TOKEN_HERE';

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchComments = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
        { headers: { Authorization: AUTH_TOKEN } }
      );
      if (!res.ok) throw new Error();
      const data = await res.json();
      setComments(data);
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line
  }, [asin]);

  const handleCommentAdded = () => fetchComments();
  const handleCommentDeleted = () => fetchComments();

  return (
    <div>
      {loading && <Loading />}
      {error && <Error />}
      <CommentsList comments={comments} onDelete={handleCommentDeleted} />
      <AddComment asin={asin} onCommentAdded={handleCommentAdded} />
    </div>
  );
};

export default CommentArea;