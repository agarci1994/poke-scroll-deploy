/* eslint-disable camelcase */
// INTERFACE
import { IPokemon } from '@/interface/IPokemon'

export const pokemonConstructor = ({
  name,
  id,
  sprites,
  types,
  stats,
  abilities,
  held_items,
}: any) =>
  ({
    name,
    id,
    image: sprites.other.dream_world.front_default,
    types: types.map(({ type }: any) => type.name),
    stats: stats.map((st: any) => ({
      prop: st.stat.name,
      value: st.base_stat,
    })),
    abilities: abilities.map(({ ability }: any) => ability.name),
    items: held_items.map(({ item }: any) => ({
      name: item.name,
      info: item.url,
    })),
  } as IPokemon)
