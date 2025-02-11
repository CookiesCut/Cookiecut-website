import Image from "next/image"
import Link from "next/link"
import type { Recipe } from "../types/recipe"

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="block">
      <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <Image
          src={recipe.thumbnail || "/placeholder.svg"}
          alt={recipe.title}
          width={400}
          height={225}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
          <p className="text-gray-600">{recipe.shortDescription}</p>
        </div>
      </div>
    </Link>
  )
}

