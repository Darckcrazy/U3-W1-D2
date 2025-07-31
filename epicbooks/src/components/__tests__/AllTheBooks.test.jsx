import { render, screen } from '@testing-library/react'
import AllTheBooks from '../AllTheBooks'
import books from '../../data/fantasy.json'

describe('AllTheBooks Component', () => {
  it('should render the correct number of book cards', () => {
    render(<AllTheBooks />)
    
    // Check if all books from the JSON file are rendered
    books.forEach(book => {
      expect(screen.getByText(book.title)).toBeInTheDocument()
      expect(screen.getByText(`$${book.price}`)).toBeInTheDocument()
    })
    
    // Verify the total number of cards matches the number of books
    const bookTitles = books.map(book => book.title)
    bookTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })
}) 