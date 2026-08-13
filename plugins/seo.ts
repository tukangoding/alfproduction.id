import {
  buildProfessionalServiceSchema,
  buildServiceCatalogSchema,
  buildWebSiteSchema
} from '~/config/seo'

export default defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(buildProfessionalServiceSchema())
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify(buildServiceCatalogSchema())
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify(buildWebSiteSchema())
      }
    ]
  })
})
