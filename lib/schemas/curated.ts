import { defineField, defineType } from 'sanity';

export const curated = defineType({
  fieldsets: [
    {
      description:
        'Information about the drop and minting to be shown on the website',
      name: 'mint-details',
      title: 'Minting Details',
      options: { collapsed: true, collapsible: true },
    },
  ],
  fields: [
    defineField({
      description: 'Name of the drop to be displayed in the website',
      name: 'name',
      title: 'Drop Name',
      type: 'string',
    }),
    defineField({
      description: 'This description will be displayed in the website',
      name: 'description',
      title: 'Drop Description',
      type: 'string',
    }),
    defineField({
      description: 'Details of our curated artist',
      name: 'artist',
      title: 'Artist',
      type: 'curatedArtist',
    }),
    defineField({
      description: 'Details of the project',
      name: 'project',
      title: 'Project',
      type: 'projectInfo',
    }),
    defineField({
      name: 'sampleImages',
      of: [
        {
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
          ],
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      title: 'Sample Images',
      type: 'array',
    }),
    defineField({
      fieldset: 'mint-details',
      name: 'status',
      options: {
        direction: 'horizontal',
        layout: 'radio',
        list: [
          { value: 'soldOut', title: 'Sold Out' },
          { value: 'minting', title: 'Minting' },
          { value: 'notStarted', title: 'Not Started' },
        ],
      },
      title: 'Status',
      type: 'string',
    }),
    defineField({
      fieldset: 'mint-details',
      name: 'mintPrice',
      title: 'Mint Price',
      type: 'number',
    }),
    defineField({
      fieldset: 'mint-details',
      name: 'preSaleAmount',
      title: 'Available pieces for Pre Sale',
      type: 'number',
    }),
    defineField({
      fieldset: 'mint-details',
      name: 'publicSaleAmount',
      title: 'Available pieces for Public Sale',
      type: 'number',
    }),
    defineField({
      fieldset: 'mint-details',
      name: 'totalAmount',
      title: 'Total amount of pieces available',
      type: 'number',
    }),
  ],
  name: 'drop',
  title: 'Drops',
  type: 'document',
});
