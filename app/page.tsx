import Link from "next/link"
import { getRecipes } from "../lib/recipes"
import RecipeCard from "./components/RecipeCard"
import Image from "next/image"

export default async function Home() {
  const recipes = await getRecipes()
  return (
    <div className="space-y-8">
      <section className="text-center flex flex-col justify-center items-center bg-gradient-to-b from-[#E0D8CB] to-white p-10 rounded-xl">
          <Image 
            className="rounded-full"
            src={"/cookieCut-Logo.jpg"}
            width={250}
            height={250}
            alt="logo"/>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#ffc971] to-[#ff9d00] bg-clip-text text-transparent md:text-7xl">Welcome to Cookie Cut</h1>
          <p className="text-xl mb-4">Discover delicious cookie and cake recipes from our YouTube channel!</p>
          <div className="flex justify-center items-center font-bold text-xl gap-10 m-5">
            <span>
              <span>+800</span>
              <p>subscribe</p>
            </span>
            <span>
              <span>+70</span>
              <p>recipes</p>
            </span>
            <span>
              <span>+200k</span>
              <p>views</p>
            </span>
          </div>
          <Link
            href="https://www.youtube.com/@CookiesCut"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
          >
            Visit our YouTube Channel
          </Link>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Our Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  )
}

