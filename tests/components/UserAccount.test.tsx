import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount'

describe('UserAccount', () => {
  it('should render username', () => {
    render(<UserAccount user={{ id: 1, name: 'John Doe' }} />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('should render edit button if user is admin', () => {
    render(<UserAccount user={{ id: 1, name: 'John Doe', isAdmin: true }} />)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/edit/i)
  })

  it('should not render edit button if user is not admin', () => {
    render(<UserAccount user={{ id: 1, name: 'John Doe', isAdmin: false }} />)

    const button = screen.queryByRole('button')
    expect(button).not.toBeInTheDocument()
  })
})
