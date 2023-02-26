import Image from 'next/image'
import { SetStateAction, Dispatch } from 'react'

type Props = {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  name: string
  image: string
  category: string
  cost: number
  power: number
}
export default function Modal({
  showModal,
  setShowModal,
  name,
  image,
  category,
  cost,
  power,
}: Props) {
  return (
    <div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto bg-secondary my-6 mx-auto max-w-3xl rounded">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between px-5 rounded-t">
                  <Image width={100} height={100} src={image} alt={name} />
                </div>
                <div className="relative px-5 flex-auto pb-4">
                  <h5 className="font-extrabold uppercase">{name}</h5>
                  <p className="text-center">{category}</p>
                  <div className="flex p-2">
                    <img
                      className="w-5"
                      alt="icon-money"
                      src="https://img.icons8.com/doodle/48/null/money.png"
                    />
                    <p className="ml-2 text-primary">{cost}</p>
                  </div>
                  <div className="flex">
                    <img
                      className="w-5"
                      alt="icon-power"
                      src="https://img.icons8.com/office/16/null/lightning-bolt.png"
                    />
                    <p className="ml-2 text-primary">{power}</p>
                  </div>
                </div>
                <div className="flex items-center justify-end px-6 py-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}
