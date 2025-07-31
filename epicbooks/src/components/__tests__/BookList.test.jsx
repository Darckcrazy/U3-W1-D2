import { render, screen, fireEvent } from '@testing-library/react'
import BookList from '../BookList'
import books from '../../data/fantasy.json'

describe('BookList Component', () => {
  it('should render all books initially', () => {
    render(<BookList books={books} />)
    
    // Check if all books are initially visible
    books.forEach(book => {
      expect(screen.getByText(book.title)).toBeInTheDocument()
    })
  })

  it('should filter books when searching', () => {
    render(<BookList books={books} />)
    
    const searchInput = screen.getByPlaceholderText('Cerca per titolo...')
    
    // Search for "Harry Potter"
    fireEvent.change(searchInput, { target: { value: 'Harry Potter' } })
    
    // Should show only Harry Potter book
    expect(screen.getByText("Harry Potter and the Sorcerer's Stone")).toBeInTheDocument()
    
    // Should not show other books
    expect(screen.queryByText('The Hobbit')).not.toBeInTheDocument()
    expect(screen.queryByText('Game of Thrones')).not.toBeInTheDocument()
  })

  it('should show no results for non-existent book', () => {
    render(<BookList books={books} />)
    
    const searchInput = screen.getByPlaceholderText('Cerca per titolo...')
    
    // Search for a non-existent book
    fireEvent.change(searchInput, { target: { value: 'Non Existent Book' } })
    
    // Should not show any books
    books.forEach(book => {
      expect(screen.queryByText(book.title)).not.toBeInTheDocument()
    })
  })

  it('should be case insensitive when filtering', () => {
    render(<BookList books={books} />)
    
    const searchInput = screen.getByPlaceholderText('Cerca per titolo...')
    
    // Search with lowercase
    fireEvent.change(searchInput, { target: { value: 'hobbit' } })
    
    // Should still show The Hobbit
    expect(screen.getByText('The Hobbit')).toBeInTheDocument()
  })
}) 