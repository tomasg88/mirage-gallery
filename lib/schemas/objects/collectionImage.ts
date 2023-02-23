import { defineField, defineType } from 'sanity';

export const collectionImage = defineType({
  fields: [
    defineField({
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
      name: 'image',
      options: {
        hotspot: true,
      },
      title: 'Image',
      type: 'image',
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
