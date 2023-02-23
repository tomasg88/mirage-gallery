import { defineField, defineType } from 'sanity';

export const artist = defineType({
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
      type: 'string',
    }),
  ],
  name: 'artist',
  title: 'Artists',
  type: 'document',
});
