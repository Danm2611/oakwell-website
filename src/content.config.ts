import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const faq = z.object({ q: z.string(), a: z.string() });

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    navTitle: z.string(),
    summary: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    icon: z.string(),
    order: z.number(),
    guarantee: z.string().optional(),
    faqs: z.array(faq).default([]),
    related: z.array(z.string()).default([]),
    gallery: z.array(z.string()).default([]),
  }),
});

const areas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/areas' }),
  schema: z.object({
    name: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    intro: z.string(),
    travel: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    order: z.number(),
  }),
});

export const collections = { services, areas };
