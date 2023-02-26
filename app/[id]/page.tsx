import Image from 'next/image'

// INTERFACES
import { IPokemon } from '@/interface/IPokemon'
// SERVICES
import { fetchPokemon } from '@/services/pokemon.services'
// MODELS
import { pokemonConstructor } from '@/model/pokemon.model'

type Props = { params: { id: number } }
export default async function PokemonPage({ params }: Props) {
  const { id } = params
  const pokemonInfo: IPokemon = [await fetchPokemon(id)].map(
    pokemonConstructor
  )[0]

  return (
    <section className="flex flex-col md:flex-row space-x-12 p-6">
      <div>
        <Image
          width={600}
          height={600}
          src={pokemonInfo.image}
          alt={pokemonInfo.name}
        />
      </div>
      <div>
        <div className="p-4">
          <h2 className="uppercase font-extrabold">{pokemonInfo.name}</h2>
          <div className="flex space-x-2">
            {pokemonInfo.types.map((type: string) => (
              <p className="capitalize text-primary" key={type}>
                {type}
              </p>
            ))}
          </div>
        </div>
        <div className="font-extrabold bg-black p-8 rounded-md text-secondary">
          <p className="pb-2">More stats</p>
          {pokemonInfo.stats?.map((stat: any) => (
            <p key={stat.prop}>
              {stat.prop}:{' '}
              <span className="text-yellow font-extralight">{stat.value}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
