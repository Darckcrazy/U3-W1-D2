import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleToggle = () => {
    this.setState(prevState => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { book } = this.props;
    return (
      <Card
        className="h-100"
        onClick={this.handleToggle}
        style={{
          border: this.state.selected ? '3px solid red' : '1px solid #ddd',
          cursor: 'pointer',
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>${book.price}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;