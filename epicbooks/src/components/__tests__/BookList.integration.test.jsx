import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import BookList from '../BookList'
import books from '../../data/fantasy.json'

// Mock CommentArea component
vi.mock('../CommentArea', () => ({
  default: ({ asin }) => (
    <div data-testid="comment-area">
      {asin ? `Comments for book: ${asin}` : 'No book selected'}
    </div>
  )
}))

describe('BookList Integration Tests', () => {
  it('should show no comments initially when no book is selected', () => {
    render(<BookList books={books} />)
    
    // Initially no book should be selected
    expect(screen.getByText('No book selected')).toBeInTheDocument()
  })

  it('should load comments when a book is clicked', async () => {
    render(<BookList books={books} />)
    
    // Click on the first book
    const firstBookCard = screen.getByTestId('book-B01N5IB20Q')
    fireEvent.click(firstBookCard)
    
    // Should show comments for the selected book
    await waitFor(() => {
      expect(screen.getByText('Comments for book: B01N5IB20Q')).toBeInTheDocument()
    })
  })

  it('should change selected book when clicking on a different book', async () => {
    render(<BookList books={books} />)
    
    // Click on the first book
    const firstBookCard = screen.getByTestId('book-B01N5IB20Q')
    fireEvent.click(firstBookCard)
    
    await waitFor(() => {
      expect(screen.getByText('Comments for book: B01N5IB20Q')).toBeInTheDocument()
    })
    
    // Click on the second book
    const secondBookCard = screen.getByTestId('book-B0192CTMYG')
    fireEvent.click(secondBookCard)
    
    // Should show comments for the new selected book
    await waitFor(() => {
      expect(screen.getByText('Comments for book: B0192CTMYG')).toBeInTheDocument()
    })
  })

  it('should maintain book selection when filtering', async () => {
    render(<BookList books={books} />)
    
    // Click on a book first
    const firstBookCard = screen.getByTestId('book-B01N5IB20Q')
    fireEvent.click(firstBookCard)
    
    await waitFor(() => {
      expect(screen.getByText('Comments for book: B01N5IB20Q')).toBeInTheDocument()
    })
    
    // Filter books
    const searchInput = screen.getByPlaceholderText('Cerca per titolo...')
    fireEvent.change(searchInput, { target: { value: 'Harry Potter' } })
    
    // The selected book should still be selected even after filtering
    expect(screen.getByText('Comments for book: B01N5IB20Q')).toBeInTheDocument()
  })
}) 