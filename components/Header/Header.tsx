import logo from "@/public/logo.svg"
import Image from "next/image"

export function Header() {
  return (
    <div>
      <Image width="200" height="200" src={logo} alt="logo"/>
    </div>
  )
}
