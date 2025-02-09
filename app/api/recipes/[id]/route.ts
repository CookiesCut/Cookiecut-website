import type { IApiResponse } from '@/interfaces/api-response';
import recipes from '@/lib/recipes.json';
import type { Recipe } from '@/types/recipe';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const recipeId = params.id;
  const RecipesList: Recipe[] = recipes as Recipe[];  

  const selectedRecipe = RecipesList.filter(
    (recipe: Recipe) => (
        recipe.id.toLowerCase() === recipeId.toLowerCase()
    ),
  );

  if (selectedRecipe.length === 0) {
    return Response.json({
      okay: false,
      error: 'Recipe not found!',
    }, {
      status: 404,
    });
  }

  if (selectedRecipe.length > 1) {

    return Response.json({
      okay: false,
      error: 'Multiple recipe found! Please contact the administrator!',
    }, {
      status: 501,
    });
  }

  const sampleResponse: IApiResponse = {
    okay: true,
    result: {
      sample: selectedRecipe,
    },
  };

  return Response.json(sampleResponse);
}