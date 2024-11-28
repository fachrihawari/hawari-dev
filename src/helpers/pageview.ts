
export const getPageviewMeta = (url: URL | string) => {
  const { pathname, hostname } = typeof url === 'string' ? new URL(url) : url

  let slug: string = ''
  // Capture segments, should be 2
  const segments = pathname.substring(1).split('/').filter(Boolean)
  // Tracking posts & projects details only
  if (segments.length === 2 && ['posts', 'projects'].includes(segments[0])) {
    slug = segments.join('-')
  }

  return {
    hostname, slug
  }
}
