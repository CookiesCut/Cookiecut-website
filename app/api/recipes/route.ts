// pages/api/recipes/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import recipes from '../../../lib/recipes.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  
  if (req.method === 'GET') {
    const recipe = recipes.find((recipe) => recipe.id === id);
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
