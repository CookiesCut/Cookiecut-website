export interface Recipe {
  id: string
  title: string
  shortDescription: string
  description: string
  thumbnail: string
  youtubeId: string
  ingredients: string[]
  instructions: string[] | null
  support: string
  keywords: string[]
}

