import { IPokemon } from '@/interface/IPokemon'
import Image from 'next/image'
import Link from 'next/link'

export default function Pokemon({ image, name, id, types }: IPokemon) {
  return (
    <li className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200  dark:border-neutral-700 rounded-lg px-4 py-6">
      <Link href={String(id)} className="h-full">
        <div className="flex flex-col space-y-4 h-full items-center justify-center text-center">
          {image && <Image width="100" height="100" alt={name} src={image} />}
          {types.map((type: string) => (
            <p key={type}>{type}</p>
          ))}
          <h2 className="text-semibold text-lg m-0">{id}</h2>
          <h3 className="m-0">{name}</h3>
        </div>
      </Link>
    </li>
  )
}
