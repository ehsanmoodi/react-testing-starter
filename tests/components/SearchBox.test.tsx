import { render, screen } from '@testing-library/react'
import SearchBox from '../../src/components/SearchBox'
import userEvent from '@testing-library/user-event'

describe('SearchBox', () => {
  const renderSearchBox = () => {
    const searchTerm = 'Search Term'
    const onChange = vi.fn()

    render(<SearchBox onChange={onChange} />)

    return {
      input: screen.getByPlaceholderText(/search/i),
      onChange,
      user: userEvent.setup(),
      searchTerm,
    }
  }
  it('should render an input field for searching', () => {
    const { input } = renderSearchBox()

    expect(input).toBeInTheDocument()
  })

  it('should call onChange when Enter is pressed', async () => {
    const { input, onChange, user, searchTerm } = renderSearchBox()

    await user.type(input, searchTerm + '{enter}')
    expect(onChange).toHaveBeenCalledWith(searchTerm)
  })

  it('should not call onChange when input field is empty', async () => {
    const { input, onChange, user } = renderSearchBox()

    await user.type(input, '{enter}')

    expect(onChange).not.toBeCalled()
  })
})
