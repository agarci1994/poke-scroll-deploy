'use client'
import { useState } from 'react'
// INTERFACE
import { IPokemon } from '@/interface/IPokemon'
// COMPONENTS
import Modal from '@/components/Modal/Modal'
import { itemConstructor } from '@/model/items.model'

export default function Items({ items }: IPokemon) {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [itemInfo, setItem] = useState<any>()

  const moreInfo = async (url: string) => {
    const data = await (await fetch(url)).json()
    setItem(itemConstructor(data))
    setShowModal(true)
  }
  return (
    <>
    <div className="mt-3">
      {items?.map(({ name, info }) => (
        <p className="font-extrabold" key={name}>
          {name}
          <span
            className="cursor-pointer text-yellow ml-2"
            onClick={() => moreInfo(info)}
          >
            + info
          </span>
        </p>
      ))}
        <Modal showModal={showModal} setShowModal={setShowModal} {...itemInfo}/>
    </div>
      
    </>
  )
}
