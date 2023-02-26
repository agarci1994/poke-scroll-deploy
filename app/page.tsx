import { Suspense } from 'react'

import { InfiniteScroll } from '@/components/InfiniteScroll/InfiniteScroll'
import Pokedex from '@/components/Pokedex/Pokedex'
import { IPokemon } from '@/interface/IPokemon'
import { fetchPokemons } from '@/services/pokemon.services'
import { pokemonConstructor } from '@/model/pokemon.model'
import { DEFAULT_RENDER } from '@/constants/config.constans'

type Props = { searchParams: { page: string } }
export default async function HomePage({ searchParams }: Props) {
  const { page } = searchParams
  const intPage = parseInt(page ?? DEFAULT_RENDER)

  const pokedexInfo: IPokemon[] = (await fetchPokemons(intPage)).map(
    pokemonConstructor
  )

  return (
    <main>
      <h3 className="font-extrabold uppercase pb-2">En directo</h3>
      <ul className="grid grid-cols-2 md:grid-cols-6 gap-3">
        <InfiniteScroll>
          <Suspense fallback={<p>Cargando...</p>}>
            <Pokedex pokedex={pokedexInfo} />
          </Suspense>
        </InfiniteScroll>
      </ul>
    </main>
  )
}
