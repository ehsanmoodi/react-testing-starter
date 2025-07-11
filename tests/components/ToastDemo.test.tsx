import { render, screen } from '@testing-library/react'
import ToastDemo from '../../src/components/ToastDemo'
import userEvent from '@testing-library/user-event'
import { Toaster } from 'react-hot-toast'

describe('ToastDemo', () => {
  it('should render a toast', async () => {
    render(
      <>
        <ToastDemo />
        <Toaster />{' '}
      </>
    )

    const button = screen.getByRole('button')
    const user = userEvent.setup()
    await user.click(button)

    const toast = await screen.findByText(/success/i)
    expect(toast).toBeInTheDocument()
  })
})
