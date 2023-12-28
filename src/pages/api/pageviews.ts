import type { APIRoute } from "astro";
import { UmamiApiClient } from "../../libraries/umami";


export const GET: APIRoute = async ({ url }) => {
  const umamiApiClient = await UmamiApiClient.getInstance();

  const path = url.searchParams.get('path')
  if (!path) throw new Error('path is required')

  const pageview = await umamiApiClient.getPageView(path)

  return Response.json(pageview)
}