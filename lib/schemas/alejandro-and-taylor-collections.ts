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
      validation: (rule) =>
        rule.required().max(50).warning('You have reached 50 characters'),
    }),
    defineField({
      description: 'Some images from the new collection to show on the website',
      name: 'images',
      of: [{ type: 'collectionImage' }],
      title: 'Images',
      type: 'array',
      validation: (rule) =>
        rule
          .required()
          .error('Images are required to showcase')
          .min(3)
          .warning('Add between 4 and 8 images')
          .max(8)
          .error('Do not add more than 8 images'),
    }),
    defineField({
      description: 'Marketplace URL where users can find this collection',
      name: 'openSeaUrl',
      title: 'OpenSea Url',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  name: 'alejandro-and-taylor-collections',
  title: 'Alejandro & Taylor Collections',
  type: 'document',
});
