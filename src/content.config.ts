import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Every figure shown on a case study must say where it came from.
const fact = z.object({
  label: z.string(),
  value: z.string(),
  source: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      kind: z.string(),
      summary: z.string(),
      period: z.string(),
      role: z.string(),
      facts: z.array(fact).min(1),
      technologies: z.array(z.string()),
      links: z.array(z.object({ label: z.string(), href: z.url() })),
      cover: z
        .object({
          src: image(),
          alt: z.string(),
          shape: z.enum(["landscape", "phones"]).default("landscape"),
        })
        .optional(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
    }),
});

export const collections = { projects };
