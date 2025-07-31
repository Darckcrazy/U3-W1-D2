import { render, screen } from '@testing-library/react'
import CommentsList from '../CommentsList'

// Mock SingleComment component
vi.mock('../SingleComment', () => ({
  default: ({ comment }) => <div data-testid="single-comment">{comment.text}</div>
}))

describe('CommentsList Component', () => {
  it('should not render any SingleComment components when no comments are provided', () => {
    render(<CommentsList comments={[]} onDelete={() => {}} />)
    
    // Should not have any SingleComment components
    expect(screen.queryByTestId('single-comment')).not.toBeInTheDocument()
  })

  it('should render SingleComment components when comments are provided', () => {
    const mockComments = [
      { _id: '1', text: 'Great book!' },
      { _id: '2', text: 'Amazing read!' }
    ]
    
    render(<CommentsList comments={mockComments} onDelete={() => {}} />)
    
    // Should have SingleComment components
    const commentElements = screen.getAllByTestId('single-comment')
    expect(commentElements).toHaveLength(2)
    expect(screen.getByText('Great book!')).toBeInTheDocument()
    expect(screen.getByText('Amazing read!')).toBeInTheDocument()
  })

  it('should render the correct number of comments', () => {
    const mockComments = [
      { _id: '1', text: 'Comment 1' },
      { _id: '2', text: 'Comment 2' },
      { _id: '3', text: 'Comment 3' }
    ]
    
    render(<CommentsList comments={mockComments} onDelete={() => {}} />)
    
    const commentElements = screen.getAllByTestId('single-comment')
    expect(commentElements).toHaveLength(3)
  })
}) 