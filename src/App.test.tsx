import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders the subtitle', () => {
  render(<App />)
  const title = screen.getByRole('heading', {name: /Software Engineer & Javascript Developer/i })
  expect(title).toBeInTheDocument()
})
