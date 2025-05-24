import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'ye739xfs',
  dataset: 'production',
  apiVersion: '2024-03-24',
  useCdn: false, // if you want to ensure fresh content
})

// Helper function to generate image URLs
export const urlFor = (source: any) => {
  return `https://cdn.sanity.io/images/ye739xfs/production/${source}`
} 