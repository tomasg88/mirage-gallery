import { defineField, defineType } from 'sanity';

export const projectInfo = defineType({
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'id',
      title: 'Id',
      type: 'string',
    }),
  ],
  name: 'projectInfo',
  options: {
    collapsible: true,
    collapsed: true,
  },
  title: 'Project Information',
  type: 'object',
});
