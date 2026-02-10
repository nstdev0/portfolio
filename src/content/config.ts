import { defineCollection, z } from "astro:content";

const technologies = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    icon: z.string(),
    order: z.number().default(99),
  }),
});

const projects = defineCollection({
  type: "data",
  schema: z.object({
    title: z.object({
      en: z.string(),
      es: z.string(),
    }),
    desc: z.object({
      en: z.string(),
      es: z.string(),
    }),
    tags: z.array(z.string()),
    img: z.object({
      light: z.string(),
      dark: z.string(),
    }),
    link: z.string(),
    video: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { technologies, projects };
