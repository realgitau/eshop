import { SchemaTypeDefinition } from 'sanity';
import banner from './banner';
import blockContent from './blockContent';
import category from './category';
import order from './order';
import product from './product';

// Define schemaTypes as an array of SchemaTypeDefinition
const schemaTypes: SchemaTypeDefinition[] = [
  banner,
  product,
  category,
  blockContent,
  order,
];

// Export the schema object with types property
export const schema = {
  types: schemaTypes,
};
