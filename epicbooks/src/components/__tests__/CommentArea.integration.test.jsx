import { render, screen, waitFor } from '@testing-library/react'
import CommentArea from '../CommentArea'

// Mock fetch to return test comments
global.fetch = vi.fn()

describe('CommentArea Integration Tests', () => {
  beforeEach(() => {
    fetch.mockClear()
  })

  it('should load comments when a book with reviews is selected', async () => {
    const mockComments = [
      { _id: '1', comment: 'Great book!', rate: 5 },
      { _id: '2', comment: 'Amazing read!', rate: 4 }
    ]

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockComments
    })

    render(<CommentArea asin="B01N5IB20Q" />)

    // Wait for comments to be loaded
    await waitFor(() => {
      expect(screen.getByText('Great book! - Rate: 5')).toBeInTheDocument()
      expect(screen.getByText('Amazing read! - Rate: 4')).toBeInTheDocument()
    })

    // Verify fetch was called with correct URL
    expect(fetch).toHaveBeenCalledWith(
      'https://striveschool-api.herokuapp.com/api/comments/B01N5IB20Q',
      { headers: { Authorization: '' } }
    )
  })

  it('should handle API errors gracefully', async () => {
    fetch.mockRejectedValueOnce(new Error('API Error'))

    render(<CommentArea asin="B01N5IB20Q" />)

    // Should show error state
    await waitFor(() => {
      expect(screen.getByText('Errore nel caricamento dei commenti.')).toBeInTheDocument()
    })
  })

  it('should not fetch comments when no book is selected', () => {
    render(<CommentArea asin={null} />)

    expect(fetch).not.toHaveBeenCalled()
  })
}) 