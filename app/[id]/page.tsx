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
    <main className="flex space-x-4">
      <div>
        <Image
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={pokemonInfo.image}
          alt={pokemonInfo.name}
        />
      </div>
      <div>
        <div className="p-4">
          <h2 className="uppercase">{pokemonInfo.name}</h2>
          {pokemonInfo.types.map((type: string) => (
            <p className="capitalize" key={type}>
              {type}
            </p>
          ))}
        </div>
        <div className="font-extrabold bg-black">
          <p className="pb-2">More stats</p>
          {pokemonInfo.stats?.map((stat) => (
            <p key={stat.prop}>
              {stat.prop}:{' '}
              <span className="text-yellow font-extralight">{stat.value}</span>
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}
