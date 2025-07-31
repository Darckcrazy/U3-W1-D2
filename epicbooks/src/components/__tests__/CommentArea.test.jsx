import { render, screen } from '@testing-library/react'
import CommentArea from '../CommentArea'

describe('CommentArea Component', () => {
  it('should render the comment area component correctly when no book is selected', () => {
    render(<CommentArea asin={null} />)
    
    // Check if the default message is shown when no book is selected
    expect(screen.getByText('Seleziona un libro per vedere o aggiungere commenti.')).toBeInTheDocument()
  })

  it('should render comment area when a book is selected', () => {
    render(<CommentArea asin="B01N5IB20Q" />)
    
    // The component should render without the default message when a book is selected
    expect(screen.queryByText('Seleziona un libro per vedere o aggiungere commenti.')).not.toBeInTheDocument()
  })
}) 