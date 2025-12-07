import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) =>  {
  const posts = await getCollection("posts");
  return rss({
    title: 'hawari.dev | Blog',
    description: 'My digital diary',
    site: site ? site : 'https://hawari.dev',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedAt,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  })
}
