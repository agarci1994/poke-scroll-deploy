import { IPokemon } from '@/interface/IPokemon'

export const pokemonConstructor = ({ name, id, sprites, types, stats }: any) =>
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
