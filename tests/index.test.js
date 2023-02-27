/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// COMPONENTS
import Abilities from '../components/Abilities/Abilities'
import Pokemon from '../components/Pokemon/Pokemon'
import { Header } from '../components/Header/Header'
import Info from '../components/Info/Info'
import Modal from '../components/Modal/Modal'
// MODELS
import { pokemonConstructor } from '../model/pokemon.model'
import { itemConstructor } from '../model/items.model'

describe('Pokemon component', () => {
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

describe('Info component', () => {
  const mockPokemon = {
    name: 'Pikachu',
    types: ['electric'],
  }

  it('should render name and types', () => {
    render(<Info {...mockPokemon} />)
    const nameElement = screen.getByText(mockPokemon.name)
    const typeElement = screen.getByText(mockPokemon.types[0])

    expect(nameElement).toBeInTheDocument()
    expect(typeElement).toBeInTheDocument()
  })

  it('should render capitalized type', () => {
    render(<Info {...mockPokemon} />)
    const typeElement = screen.getByText(/electric/i)

    expect(typeElement).toHaveClass('capitalize')
  })
})

describe('Abilities component', () => {
  const mockAbilities = {
    abilities: ['overgrow', 'chlorophyll'],
  }

  it('should render the abilities', () => {
    const { getByText } = render(
      <Abilities abilities={mockAbilities.abilities} />
    )
    mockAbilities.abilities.forEach((ability) => {
      expect(getByText(ability)).toBeInTheDocument()
    })
  })

  it('should render the component without crashing', () => {
    const { container } = render(
      <Abilities abilities={mockAbilities.abilities} />
    )
    expect(container.firstChild).toBeInTheDocument()
  })
})

describe('Header component', () => {
  it('should render the logo image with a link to the homepage', () => {
    render(<Header />)
    const logoImage = screen.getByAltText('logo')
    expect(logoImage).toBeInTheDocument()
    expect(logoImage).toHaveAttribute('src', '/logoGeek.svg')
  })

  it('should render the component without crashing', () => {
    const { container } = render(<Header />)
    expect(container.firstChild).toBeInTheDocument()
  })
})

describe('Modal component', () => {
  const props = {
    showModal: true,
    setShowModal: jest.fn(),
    name: 'Test item',
    image: 'https://example.com/test.jpg',
    category: 'Test category',
    cost: 10,
    power: 20,
  }

  test('should render component', () => {
    render(<Modal {...props} />)
    expect(screen.getByText(props.name)).toBeInTheDocument()
    expect(screen.getByAltText(props.name)).toBeInTheDocument()
    expect(screen.getByText(props.category)).toBeInTheDocument()
    expect(screen.getByText(props.cost)).toBeInTheDocument()
    expect(screen.getByText(props.power)).toBeInTheDocument()
  })

  test('should call setShowModal on close button click', () => {
    render(<Modal {...props} />)
    const closeButton = screen.getByText('Cerrar')
    closeButton.click()
    expect(props.setShowModal).toHaveBeenCalledTimes(1)
    expect(props.setShowModal).toHaveBeenCalledWith(false)
  })

  test('should not render component if showModal is false', () => {
    render(<Modal {...props} showModal={false} />)
    expect(screen.queryByText(props.name)).not.toBeInTheDocument()
  })
})

describe('Models', () => {
  it('Constructor model Pokemon', async () => {
    const data = {
      name: 'pikachu',
      id: 25,
      sprites: {
        other: { dream_world: { front_default: 'url' } },
      },
      types: [],
      stats: [],
      abilities: [],
      held_items: [],
    }
    const result = pokemonConstructor(data)
    expect(result).toEqual({
      name: 'pikachu',
      id: 25,
      image: 'url',
      types: [],
      abilities: [],
      stats: [],
      items: [],
    })
  })

  it('Constructor model Items', async () => {
    const data = {
      name: 'pikachu',
      sprites: { default: 'url' },
      category: { name: 'medicine' },
      cost: 12,
      fling_power: 100,
    }
    const result = itemConstructor(data)
    expect(result).toEqual({
      name: 'pikachu',
      image: 'url',
      category: 'medicine',
      cost: 12,
      power: 100,
    })
  })
})
