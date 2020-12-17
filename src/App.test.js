import React from 'react';
import { render } from '@testing-library/react';
import User from './components/User'

test('renders User (username) component', () => {
  const user = { name: 'username', avatar: 'avatar' }

  const { getByText } = render(<User user={user} />)
  const username = getByText(/username/i)
  expect(username).toBeInTheDocument()
})
