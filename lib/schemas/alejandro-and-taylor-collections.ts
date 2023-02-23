import { defineField, defineType } from 'sanity';

export const alejandroAndTaylorCollections = defineType({
  description:
    'Each document represents a new collection from the Alejandro & Taylor project',
  fields: [
    defineField({
      name: 'collectionNumber',
      title: 'Collection Number',
      type: 'string',
    }),
    defineField({
      name: 'images',
      of: [{ type: 'collectionImage' }],
      title: 'Images',
      type: 'array',
    }),
    defineField({
      name: 'openSeaUrl',
      title: 'OpenSea Url',
      type: 'string',
    }),
  ],
  name: 'alejandro-and-taylor-collections',
  title: 'Alejandro & Taylor Collections',
  type: 'document',
});
