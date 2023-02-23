import { defineField, defineType } from 'sanity';

export const alejandro = defineType({
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
  name: 'alejandro',
  title: 'Alejandro & Taylor',
  type: 'document',
});
