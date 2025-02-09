import { NextResponse } from 'next/server';
import recipes from '../../../lib/recipes.json';

export async function GET() {
  return NextResponse.json(recipes);
}