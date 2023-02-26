import Image from 'next/image'
import Link from 'next/link'

// INTERFACE
import { IPokemon } from '@/interface/IPokemon'

export default function Pokemon({ image, name, id, types }: IPokemon) {
  return (
    <li className="bg-neutral-100 bg-grey-800 border border-neutral-200 border-black-700 rounded-lg px-4 py-6">
      <Link href={String(id)} className="h-full">
        <div className="flex flex-col space-y-4 h-full items-center justify-center text-center">
          <div className="h-28">
            {image && (
              <Image
                width="700"
                height="475"
                alt={name}
                src={image}
                style={{ height: 'inherit' }}
              />
            )}
          </div>
          <div>
            <h3 className="m-0 uppercase font-extrabold">{name}</h3>
            <div className="flex space-x-2">
              {types.map((type: string) => (
                <p className="block text-primary capitalize" key={type}>
                  {type}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
