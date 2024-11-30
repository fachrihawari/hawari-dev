import type { APIRoute } from "astro";
import { getPageviewMeta } from "../../helpers/pageview";

export const GET: APIRoute = async ({ request }) => {
  const { origin, searchParams } = new URL(request.url)
  const { hostname, slug } = getPageviewMeta(`${origin}${searchParams.get('path')}`) 
  const res = await fetch(`https://county.hawari.dev/api/count/?namespace=${hostname}&key=${slug}`)
  return Response.json(await res.json(), { status: res.status });
};