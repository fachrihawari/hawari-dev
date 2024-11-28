import { defineMiddleware } from "astro:middleware";
import { getPageviewMeta } from "./helpers/pageview";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  const { hostname, slug } = getPageviewMeta(context.url)
  if (slug) {
    fetch(`https://api.counterapi.dev/v1/${hostname}/${slug}/up`).then(r => {
      console.log("pageview slug:", slug, r.ok ? 'OK' : 'ERROR')
    })
  }

  return response
});
