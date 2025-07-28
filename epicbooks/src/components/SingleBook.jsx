import React from 'react';
import { Card } from 'react-bootstrap';

const SingleBook = ({ book, selectedAsin, onBookSelect }) => {
  const isSelected = selectedAsin === book.asin;
  return (
    <div onClick={() => onBookSelect(book.asin)}>
      <Card
        className="h-100"
        style={{
          border: isSelected ? '3px solid red' : '1px solid #ddd',
          cursor: 'pointer',
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>${book.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleBook;