import { IPokemon } from '@/interface/IPokemon'

// COMPONENTS
import Pokemon from '@/components/Pokemon/Pokemon'

type Props = { pokedex: IPokemon[] }
export default function Page({ pokedex }: Props) {
  return (
    <>
      {pokedex.map(({ name, id, image, types }) => (
        <Pokemon image={image} name={name} id={id} types={types} key={id} />
      ))}
    </>
  )
}
