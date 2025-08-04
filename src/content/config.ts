// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const BaseSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.date(),
  tags: z.array(z.string()),
  draft: z.boolean().default(false)
})

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: BaseSchema
});

const projectsCollection = defineCollection({
    type: 'content',
    schema: BaseSchema.extend({
      link: z.string(),
      github: z.string().optional(),
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  projects: projectsCollection
};
