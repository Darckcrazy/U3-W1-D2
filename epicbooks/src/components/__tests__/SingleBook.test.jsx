import { render, screen, fireEvent } from '@testing-library/react'
import SingleBook from '../SingleBook'

const mockBook = {
  asin: 'B01N5IB20Q',
  title: 'The Hobbit',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg',
  price: 10.99
}

describe('SingleBook Component', () => {
  it('should render book information correctly', () => {
    render(<SingleBook book={mockBook} selectedAsin={null} onBookSelect={() => {}} />)
    
    expect(screen.getByText('The Hobbit')).toBeInTheDocument()
    expect(screen.getByText('$10.99')).toBeInTheDocument()
  })

  it('should call onBookSelect when clicked', () => {
    const mockOnBookSelect = vi.fn()
    render(<SingleBook book={mockBook} selectedAsin={null} onBookSelect={mockOnBookSelect} />)
    
    const bookCard = screen.getByTestId('book-card')
    fireEvent.click(bookCard)
    
    expect(mockOnBookSelect).toHaveBeenCalledWith('B01N5IB20Q')
  })

  it('should have red border when selected', () => {
    render(<SingleBook book={mockBook} selectedAsin="B01N5IB20Q" onBookSelect={() => {}} />)
    
    const cardElement = screen.getByTestId('book-B01N5IB20Q')
    expect(cardElement).toHaveStyle('border: 3px solid red')
  })

  it('should have normal border when not selected', () => {
    render(<SingleBook book={mockBook} selectedAsin={null} onBookSelect={() => {}} />)
    
    const cardElement = screen.getByTestId('book-B01N5IB20Q')
    expect(cardElement).toHaveStyle('border: 1px solid #ddd')
  })

  it('should change border when selection changes', () => {
    const { rerender } = render(<SingleBook book={mockBook} selectedAsin={null} onBookSelect={() => {}} />)
    
    // Initially not selected
    let cardElement = screen.getByTestId('book-B01N5IB20Q')
    expect(cardElement).toHaveStyle('border: 1px solid #ddd')
    
    // Re-render as selected
    rerender(<SingleBook book={mockBook} selectedAsin="B01N5IB20Q" onBookSelect={() => {}} />)
    
    cardElement = screen.getByTestId('book-B01N5IB20Q')
    expect(cardElement).toHaveStyle('border: 3px solid red')
  })
}) 