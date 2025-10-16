import { type SchemaTypeDefinition } from 'sanity'
import  menuCard from './menuCard'
import feedback from './customerfeedback'
import galleryImage from './gallery'
import blog from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [menuCard,feedback,galleryImage,blog],
}
