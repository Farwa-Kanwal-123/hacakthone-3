import chef from './chefs';
import food from './foods';
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food,chef],
}
