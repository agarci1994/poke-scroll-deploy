import { IPokemon } from '@/interface/IPokemon'
import Image from 'next/image'

const fetchPokemon = async (id: number) =>
  (
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: 'force-cache',
    })
  ).json()

export default async function PokemonPage({ params }: any) {
  const { id } = params
  const pokemonInfo: IPokemon = [await fetchPokemon(id)].map(
    ({ name, id, sprites, types, stats }: any) =>
      ({
        name,
        id,
        image: sprites.other.dream_world.front_default,
        types: types.map(({ type }: any) => type.name),
        stats: stats.map((st: any) => ({
          prop: st.stat.name,
          value: st.base_stat,
        })),
      } as IPokemon)
  )[0]

  return (
    <main>
      <div>
        <Image
          width="600"
          height="600"
          src={pokemonInfo.image}
          alt={pokemonInfo.name}
        />
      </div>
      <div>
        <div>
          <h2>{pokemonInfo.name}</h2>
          {pokemonInfo.types.map((type: string) => (
            <p key={type}>{type}</p>
          ))}
        </div>
        <div>
          <p>More stats</p>
          {pokemonInfo.stats?.map((stat) => (
            <p key={stat.prop}>
              {stat.prop}: <span>{stat.value}</span>
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}
