'use client'
import { IPokemon } from '@/interface/IPokemon'
import Pokemon from '@/components/Pokemon/Pokemon'
import { useState, useEffect } from 'react'

type Props = { pokedex: IPokemon[] }
export default function Page({ pokedex }: Props) {
  const [poke, setPoke] = useState<IPokemon[]>(pokedex)

  useEffect(() => {
    setPoke([...pokedex])
  }, [pokedex])

  return (
    <>
      {poke.map(({ name, id, image, types }) => (
        <Pokemon image={image} name={name} id={id} types={types} key={id} />
      ))}
    </>
  )
}
