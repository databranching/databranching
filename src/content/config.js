import { z, defineCollection } from 'astro:content';

export const collections = {
  reports: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
    }),
  }),
};
