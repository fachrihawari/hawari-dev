// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";


// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.date(),
      tags: z.array(z.string())
    })
});

const projectsCollection = defineCollection({
    type: 'data',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.date(),
      link: z.string(),
      tags: z.array(z.string())
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  projects: projectsCollection
};