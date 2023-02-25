import Pokemon from "../components/Pokemon/Pokemon"
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Pokemon', () => {
  it('renders a Pokemon', () => {
    const { image, name, types, id } = {
      image: "url", name: "pikachu", types: [], id: 1
    }
    render(<Pokemon types={[]} name={name} />)
    expect(screen.getByText(name)).toBeTruthy()
  })
})