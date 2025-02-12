import type { MetadataRoute } from 'next';
import recipes from '@/lib/recipes.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicRecipes = recipes.map((recipe: { id: string }) => ({
    url: `https://cookiescut.com/recipe/${recipe.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  
  
  return [
    {
      url: 'https://cookiescut.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://cookiescut.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://cookiescut.com/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...dynamicRecipes, // Include dynamically generated recipe URLs
  ];
}
