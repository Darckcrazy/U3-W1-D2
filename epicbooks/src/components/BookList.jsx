import React, { useState } from 'react';
import { Row, Col, Form, Container } from 'react-bootstrap';
import SingleBook from './SingleBook';

const BookList = ({ books }) => {
  const [search, setSearch] = useState('');

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
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {filteredBooks.map(book => (
          <Col key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;