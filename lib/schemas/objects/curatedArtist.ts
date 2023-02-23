import { defineField, defineType } from 'sanity';

export const curatedArtist = defineType({
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'string',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter Url',
      type: 'string',
    }),
    defineField({
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
    }),
  ],
  name: 'curatedArtist',
  options: {
    collapsible: true,
    collapsed: true,
  },
  title: 'Artist',
  type: 'object',
});
