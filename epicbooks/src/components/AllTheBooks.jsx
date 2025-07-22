import { Card, Col, Container, Row } from 'react-bootstrap';
import books from '../data/fantasy.json';

const AllTheBooks = () => (
  <Container className="my-4">
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {books.map((book) => (
        <Col key={book.asin}>
          <Card className="h-100">
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>${book.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default AllTheBooks;
