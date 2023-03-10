import { defineField, defineType } from 'sanity';

export const alejandroAndTaylorCollections = defineType({
  fields: [
    defineField({
      name: 'collectionNumber',
      title: 'Collection Number',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'collectionName',
      title: 'Collection Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      description: 'Some images from the new collection to show on the website',
      name: 'images',
      of: [{ type: 'collectionImage' }],
      title: 'Images',
      type: 'array',
      validation: (rule) => rule.required().min(3).max(8),
    }),
  ],
  name: 'alejandro-and-taylor-collections',
  title: 'Alejandro & Taylor Collections',
  type: 'document',
});
