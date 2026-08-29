import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const imageItemSchema = z.union([
  z.string(),
  z.object({
    src: z.string(),
    caption: z.object({ en: z.string(), id: z.string() }).optional(),
    alt: z.object({ en: z.string(), id: z.string() }).optional(),
  }),
]);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    title: z.object({ en: z.string(), id: z.string() }).optional(),
    description: z.object({ en: z.string(), id: z.string() }).optional(),
    year: z.number().optional(),
    role: z.object({ en: z.string(), id: z.string() }).optional(),
    category: z.string().optional(),
    technologies: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    image: z.string().optional(),
    hero_image: z.string().optional(),
    context_image: z.string().optional(),
    solution_image: z.string().optional(),
    github: z.string().optional(),
    url: z.string().optional(),
    prototype_url: z.string().optional(),
    design_url: z.string().optional(),
    source_url: z.string().optional(),
    embed_url: z.string().optional(),
    prototype_url_admin: z.string().optional(),
    embed_url_admin: z.string().optional(),
    draft: z.boolean().default(false),
    competition: z.object({ en: z.string(), id: z.string() }).optional(),
    period: z.string().optional(),
    tools: z.array(z.string()).optional(),
    context: z.object({ en: z.string(), id: z.string() }).optional(),
    problem: z.object({ en: z.string(), id: z.string() }).optional(),
    solution: z.object({ en: z.string(), id: z.string() }).optional(),
    outcome: z.object({ en: z.string(), id: z.string() }).optional(),
    challenges: z.object({ en: z.string(), id: z.string() }).optional(),
    lessons_learned: z.object({ en: z.string(), id: z.string() }).optional(),
    technical_details: z
      .object({
        architecture: z.string().optional(),
        database_strategy: z.string().optional(),
        deployment_method: z.string().optional(),
        key_implementations: z.array(z.string()).optional(),
      })
      .optional(),
    metrics: z.record(z.string(), z.string()).optional(),
    gallery_images: z.array(imageItemSchema).optional(),
    metadata: z.record(z.string(), z.any()).optional(),
    content: z.record(z.string(), z.any()).optional(),
  }),
});

export const collections = { projects };
