import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const technologies = defineCollection({
  loader: glob({ pattern: "**/*.{json,yaml,yml}", base: "./src/content/technologies" }),
  schema: z.object({
    name: z.string(),
    icon: z.string(),
    order: z.number().default(99),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{json,yaml,yml}", base: "./src/content/projects" }),
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
