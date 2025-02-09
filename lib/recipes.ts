import type { Recipe } from "../types/recipe";

export async function getRecipes(): Promise<Recipe[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/recipes`, {
    cache: "no-store", // Ensures fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return res.json();
}

export async function getRecipe(id: string): Promise<Recipe | undefined> {
  const recipes = await getRecipes();
  return recipes.find((recipe) => recipe.id === id);
}

export async function getAllRecipeIds(): Promise<string[]> {
  const recipes = await getRecipes();
  return recipes.map((recipe) => recipe.id);
}
