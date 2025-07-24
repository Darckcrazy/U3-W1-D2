import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import CommentArea from './CommentArea';

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
      <div onClick={this.handleToggle}>
        <Card
          className="h-100"
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
        {this.state.selected && <CommentArea asin={book.asin} />}
      </div>
    );
  }
}

export default SingleBook;