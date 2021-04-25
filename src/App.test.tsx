import * as React from 'react'
import { render } from '@testing-library/react'
import { expect } from 'chai'
import { App } from './index'

it('renders header text', () => {
  const { getByText } = render(<App />)
  const headerElement = getByText(/positioning/i)
  expect(document.body.contains(headerElement))
})
