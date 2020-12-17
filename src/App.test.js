import React from 'react';
import { render } from '@testing-library/react';
import User from './components/User'
import Resume from './components/Resume'
import Highlights from './components/Highlights'
import Description from './components/Description'

test('renders User (username) component', () => {
  const user = { name: 'username', avatar: 'avatar' }

  const { getByText } = render(<User user={user} />)
  const username = getByText(/username/i)
  expect(username).toBeInTheDocument()
})

test('renders Resume component', () => {
  const { getByText } = render(<Resume resume='text resume' />)
  const text = getByText(/text resume/i)
  expect(text).toBeInTheDocument()
})

test('renders Highlights component', () => {
  const { getByText } = render(<Highlights highlights='text highlights' />)
  const text = getByText(/text highlights/i)
  expect(text).toBeInTheDocument()
})

test('renders Description component', () => {
  const { getByText } = render(<Description description='text description' />)
  const text = getByText(/text description/i)
  expect(text).toBeInTheDocument()
})
