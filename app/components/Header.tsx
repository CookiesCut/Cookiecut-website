import Image from "next/image"
import Link from "next/link"


export default function Header() {
  return (
    <header className="bg-[#E0D8CB] shadow-md z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600">
          Cookie Cut
        </Link>
        <Image 
          className="rounded-full"
          src={"/banner.png"}
          width={100}
          height={100}
          alt="logo"/>
      </nav>
    </header>
  )
}

