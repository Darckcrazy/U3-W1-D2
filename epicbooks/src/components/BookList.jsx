import React, { useState } from 'react';
import { Row, Col, Form, Container } from 'react-bootstrap';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';

const BookList = ({ books }) => {
  const [search, setSearch] = useState('');
  const [selectedAsin, setSelectedAsin] = useState(null);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="my-4">
      <Form className="mb-3">
        <Form.Control
          type="text"
          placeholder="Cerca per titolo..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </Form>
      <Row>
        <Col md={8}>
          <Row xs={1} sm={2} md={3} lg={3} className="g-4">
            {filteredBooks.map(book => (
              <Col key={book.asin}>
                <SingleBook
                  book={book}
                  selectedAsin={selectedAsin}
                  onBookSelect={setSelectedAsin}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea asin={selectedAsin} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;