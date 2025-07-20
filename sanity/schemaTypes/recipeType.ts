import { defineType } from 'sanity'

export default defineType({
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Recipe ID',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 96)
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'description',
      title: 'Full Description',
      type: 'text',
      rows: 6
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'youtubeId',
      title: 'YouTube Video ID or URL',
      type: 'string'
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'instructions',
      title: 'Instructions',
      type: 'text'
    },
    {
      name: 'support',
      title: 'Support Message',
      type: 'string'
    },
    {
      name: 'keywords',
      title: 'Hashtags / Keywords',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
})
