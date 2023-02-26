import Image from 'next/image'

// INTERFACES
import { IPokemon } from '@/interface/IPokemon'
// SERVICES
import { fetchPokemon } from '@/services/pokemon.services'
// MODELS
import { pokemonConstructor } from '@/model/pokemon.model'
// COMPONENTS
import Info from '@/components/Info/Info'
import Abilities from '@/components/Abilities/Abilities'
import Stats from '@/components/Stats/Stats'
import Items from '@/components/Items/Items'

type Props = { params: { id: number } }
export default async function PokemonPage({ params }: Props) {
  const { id } = params
  const pokemonInfo: IPokemon = [await fetchPokemon(id)].map(
    pokemonConstructor
  )[0]

  return (
    <section className="flex flex-col md:flex-row space-x-12 p-6">
      <article>
        <Image
          width={600}
          height={600}
          src={pokemonInfo.image}
          alt={pokemonInfo.name}
        />
      </article>
      <article>
        <Info {...pokemonInfo} />
        <Stats {...pokemonInfo} />
        <Abilities {...pokemonInfo} />
        <Items {...pokemonInfo}/>
      </article>
    </section>
  )
}
