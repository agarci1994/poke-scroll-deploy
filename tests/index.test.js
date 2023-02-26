/* eslint-disable no-undef */
import Pokemon from '../components/Pokemon/Pokemon'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Pokemon', () => {
  it('renders a Pokemon', () => {
    const { name } = {
      image: 'url',
      name: 'pikachu',
      types: [],
      id: 1,
    }
    render(<Pokemon types={[]} name={name} />)
    expect(screen.getByText(name)).toBeTruthy()
  })
})
