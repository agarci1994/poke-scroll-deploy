import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <div className="p-10 border-b-2 border-secondary">
      <Link href="/">
        <Image width="200" height="200" src="/logoGeek.svg" alt="logo" />
      </Link>
    </div>
  )
}
