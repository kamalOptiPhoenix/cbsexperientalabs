import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemas'

export default defineConfig({
  name: 'cbsexperientalabs',
  title: 'CBSExperientaLabs',
  basePath: '/studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('🏃 Activities')
              .child(
                S.documentTypeList('activity')
                  .title('All Activities')
              ),
            // S.listItem().title('📖 Stories').child(...) — add later
          ]),
    }),
    visionTool(),
  ],

  schema: { types: schemaTypes },
})
