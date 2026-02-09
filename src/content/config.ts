import { defineCollection, z } from "astro:content";

const technologies = defineCollection({
  type: "data", // Use 'content' for .mdx files, 'data' is for .json/.yaml
  schema: z.object({
    name: z.string(),
    icon: z.string(),
    order: z.number().default(99),
  }),
});

const projects = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    tags: z.array(z.string()),
    img: z.string(),
    link: z.string(),
    video: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { technologies, projects };
