import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'fw0jk5a7', // from sanity.json or manage.sanity.io
  dataset: 'production',
  apiVersion: '2025-10-09',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)
