import Image from "next/image"
import Link from "next/link"


export default function Header() {
  return (
    <header className="bg-amber-800">
      <nav className="container mx-auto px-2 py-2 flex justify-between items-center">
        <Link 
          href="https://www.youtube.com/channel/UCc9DXHwVfF-7Sz6DKqX7mBw?sub_confirmation=1" 
          className="text-lg md:text-xl font-bold bg-red-600 text-white py-2 px-4 rounded-full">
          Subscribe For Cookie 
        </Link>
        <Image 
          className="rounded-full"
          src={"/banner.png"}
          width={80}
          height={80}
          alt="logo"/>
      </nav>
    </header>
  )
}

