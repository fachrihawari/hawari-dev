// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const BaseSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.date(),
  tags: z.array(z.string())
})

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: BaseSchema
});

const projectsCollection = defineCollection({
    type: 'data',
    schema: BaseSchema.extend({
      link: z.string(),
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  projects: projectsCollection
};
