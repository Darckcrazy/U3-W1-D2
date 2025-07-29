import { useState } from 'react';
const AUTH_TOKEN = 'Bearer YOUR_TOKEN_HERE';

const AddComment = ({ asin, onCommentAdded }) => {
  const [formData, setFormData] = useState({
    comment: '',
    rate: 1
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_TOKEN,
      },
      body: JSON.stringify({ 
        comment: formData.comment, 
        rate: formData.rate, 
        elementId: asin 
      }),
    });
    setFormData({ comment: '', rate: 1 });
    onCommentAdded();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="comment"
        value={formData.comment}
        onChange={handleInputChange}
        placeholder="Add a comment"
        required
      />
      <select 
        name="rate" 
        value={formData.rate} 
        onChange={handleInputChange}
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddComment;