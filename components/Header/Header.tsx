import Image from "next/image"
export function Header() {
  return (
    <div className="p-10 border-b-2 border-secondary">
      <Image width="200" height="200" src="/logoGeek.svg" alt="logo"/>
    </div>
  )
}
