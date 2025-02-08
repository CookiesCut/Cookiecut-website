import Image from "next/image"
import Link from "next/link"


export default function Header() {
  return (
    <header className="bg-amber-800">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-[#ff9d00] hover:text-[#ffc971]">
          Subscribe For Cookie ❤️
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

