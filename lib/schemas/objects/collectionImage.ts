import { defineField, defineType } from 'sanity';

export const collectionImage = defineType({
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'cloudinary.asset',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
  name: 'collectionImage',
  title: 'Collection Image',
  type: 'object',
});
