// INTERFACE
import { IPokemon } from '@/interface/IPokemon'

export default function Abilities({ abilities }: IPokemon) {
  return (
    <div className="font-extrabold bg-secondary mt-3 p-8 rounded-md text-black">
      <p className="pb-2">Abilities</p>
      {abilities?.map((ability: string, i: number) => (
        <p className="font-extralight text-primary" key={ability + i}>
          {ability}
        </p>
      ))}
    </div>
  )
}
