'use client'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Lo siento, pero tenemos un problema!</h2>
      <Image
        width={200}
        height={200}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        alt='error'
      />
      <button onClick={() => reset()}>¡Prueba de nuevo!</button>
    </div>
  )
}
