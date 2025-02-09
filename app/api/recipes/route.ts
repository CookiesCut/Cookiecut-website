import type { IApiResponse } from '@/interfaces/api-response';
import recipes from '@/lib/recipes.json';

export async function GET(_request: Request) {
  const sampleResponse: IApiResponse = {
    okay: true,
    result: {
        recipes,
    },
  };

  return Response.json(sampleResponse);
}