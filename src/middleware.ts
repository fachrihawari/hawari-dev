import { defineMiddleware } from "astro:middleware";
import { getPageviewMeta } from "./helpers/pageview";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  const { hostname, slug } = getPageviewMeta(context.url)
  if (slug) {
    fetch(`https://county.hawari.dev/api/count/up?namespace=${hostname}&key=${slug}`, { method: 'POST' })
      .catch(err => console.error("Update counter error", err))
  }

  return response
});
