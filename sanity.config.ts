'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/enclave-blogs/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './src/sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Enclave Studios',
  
  projectId: 'ye739xfs',
  dataset: 'production',
  basePath: '/enclave-blogs',
  apiVersion: '2024-03-24', // Use today's date or any recent date

  plugins: [
    structureTool(),
    deskTool(),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
