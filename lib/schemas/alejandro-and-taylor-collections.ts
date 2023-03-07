import { defineField, defineType } from 'sanity';

export const alejandroAndTaylorCollections = defineType({
  fields: [
    defineField({
      name: 'collectionNumber',
      title: 'Collection Number',
      type: 'number',
    }),
    defineField({
      name: 'collectionName',
      title: 'Collection Name',
      type: 'string',
    }),
    defineField({
      description: 'Some images from the new collection to show on the website',
      name: 'images',
      of: [{ type: 'collectionImage' }],
      title: 'Images',
      type: 'array',
    }),
    defineField({
      description: 'Marketplace URL where users can find this collection',
      name: 'openSeaUrl',
      title: 'OpenSea Url',
      type: 'string',
    }),
  ],
  name: 'alejandro-and-taylor-collections',
  title: 'Alejandro & Taylor Collections',
  type: 'document',
});
