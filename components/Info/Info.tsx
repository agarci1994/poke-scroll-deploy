// INTERFACE
import { IPokemon } from '@/interface/IPokemon'

export default function Info({ name, types }: IPokemon) {
  return (
    <div className="p-4">
      <h2 className="uppercase font-extrabold">{name}</h2>
      <div className="flex space-x-2">
        {types.map((type: string) => (
          <p className="capitalize text-primary" key={type}>
            {type}
          </p>
        ))}
      </div>
    </div>
  )
}
