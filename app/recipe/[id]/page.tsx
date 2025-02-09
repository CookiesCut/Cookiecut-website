import { getRecipe } from "../../../lib/recipes"
import { notFound } from "next/navigation"

export default async function RecipePage({ params }: { params: { id: string } }) {
  const recipe = await getRecipe(params.id)

  if (!recipe) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-amber-500">{recipe.title}</h1>
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <iframe 
          className="w-full h-full min-h-[200px] rounded-3xl"
          src={`https://www.youtube.com/embed/${recipe.youtubeId}`}
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
          ></iframe>
      </div>
      <p className="text-gray-200 mb-6">{recipe.description}</p>
      <div className="bg-white rounded-3xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Recipe</h2>
        <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
        <ol className="list-decimal list-inside">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="mb-2">
              {instruction}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

