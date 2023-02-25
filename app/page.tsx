import { InfiniteScroll } from '@/components/InfiniteScroll/InfiniteScroll'
import Pokedex from '@/components/Pokedex/Pokedex'
import { IPokemon } from '@/interface/IPokemon'
import { Suspense } from 'react'

const fetchPokemons = async (init: number) =>
  await Promise.all(
    new Array(1000)
      .slice(0, init)
      .fill(1)
      .map(async (value, index) =>
        (
          await fetch(`https://pokeapi.co/api/v2/pokemon/${++index}`, {
            cache: 'no-store',
          })
        ).json()
      )
  )

export default async function HomePage({ searchParams }: any) {
  const { page } = searchParams
  const intPage = parseInt(page ?? '24')

  const pokedexInfo: IPokemon[] = (await fetchPokemons(intPage)).map(
    ({ name, id, sprites, types }: any) =>
      ({
        name,
        id,
        image: sprites.other.dream_world.front_default,
        types: types.map(({ type }: any) => type.name),
      } as IPokemon)
  )

  return (
    <main>
      <h3 className="font-extrabold uppercase pb-2">En directo</h3>
      <ul className="grid grid-cols-2 md:grid-cols-6 gap-3">
        <InfiniteScroll>
          <Suspense fallback={<p>Loading</p>}>
            <Pokedex pokedex={pokedexInfo} />
          </Suspense>
        </InfiniteScroll>
      </ul>
    </main>
  )
}
