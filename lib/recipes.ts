import type { Recipe } from "../types/recipe"
import recipesData from "./recipes.json"

export async function getRecipes(): Promise<Recipe[]> {
  // In a real-world scenario, you'd fetch this data from an API or database
  return recipesData
}

export async function getRecipe(id: string): Promise<Recipe | undefined> {
  const recipes = await getRecipes()
  return recipes.find((recipe) => recipe.id === id)
}

