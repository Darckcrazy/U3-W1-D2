import { render, screen } from '@testing-library/react'
import Welcome from '../Welcome'

describe('Welcome Component', () => {
  it('should render the welcome component correctly', () => {
    render(<Welcome />)
    
    // Check if the main heading is present
    expect(screen.getByText('Benvenuto su EpicBooks!')).toBeInTheDocument()
    
    // Check if the subtitle is present
    expect(screen.getByText('Il miglior shop online per i tuoi libri preferiti.')).toBeInTheDocument()
    
    // Check if the call to action is present
    expect(screen.getByText('Scopri le nostre offerte e le ultime novità!')).toBeInTheDocument()
  })
}) 