import { DEFAULT_RENDER, MAX_POKEMON_AVAILABLE } from "@/constants/config.constans"

export const fetchPokemons = async (page: number) =>
  await Promise.all(
    new Array(MAX_POKEMON_AVAILABLE)
      .slice((page - DEFAULT_RENDER), page)
      .fill(1)
      .map(async (value, index) =>
        (
          await fetch(`https://pokeapi.co/api/v2/pokemon/${++index}`, {
            cache: 'force-cache',
          })
        ).json()
      )
  )

export const fetchPokemon = async (id: number) =>
    (
      await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cache: 'no-store',
      })
    ).json()