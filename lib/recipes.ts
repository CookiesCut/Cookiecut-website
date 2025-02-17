import type { Recipe } from "../types/recipe"
import recipesData from "./recipes.json"

export async function getRecipes(): Promise<Recipe[]> {
  return recipesData
}

export async function getRecipe(id: string): Promise<Recipe | undefined> {
  const recipes = await getRecipes()
  return recipes.find((recipe) => recipe.id === id)
}

export async function getAllRecipeIds() {
  return recipesData.map(recipes => recipes.id);
}