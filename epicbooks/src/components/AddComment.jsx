import { useState } from 'react';
const AUTH_TOKEN = 'Bearer YOUR_TOKEN_HERE';

const AddComment = ({ asin, onCommentAdded }) => {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_TOKEN,
      },
      body: JSON.stringify({ comment, rate, elementId: asin }),
    });
    setComment('');
    setRate(1);
    onCommentAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
        required
      />
      <select value={rate} onChange={(e) => setRate(e.target.value)}>
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddComment;