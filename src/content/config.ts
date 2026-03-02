import { defineCollection, z } from 'astro:content';

const publicationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    publicationType: z.enum(['Article', 'Chapter', 'Book']),
    theme: z.string().optional(),
    doi: z.string().optional(),
    pdfLink: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const talksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    eventName: z.string(),
    location: z.string(),
    theme: z.string().optional(),
    slidesUrl: z.string().optional(),
    videoUrl: z.string().optional(),
  }),
});

const coursesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    code: z.string(),
    semester: z.string(),
    isCurrent: z.boolean().default(false),
    description: z.string(),
    syllabusLink: z.string().optional(),
  }),
});

export const collections = {
  publications: publicationsCollection,
  talks: talksCollection,
  courses: coursesCollection,
};
