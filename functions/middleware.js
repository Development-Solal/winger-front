export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // Allow actual files to pass through (anything with a file extension)
  if (url.pathname.match(/\.\w+$/)) {
    return context.next();
  }
  
  // For all routes without extensions, serve index.html
  const indexResponse = await context.env.ASSETS.fetch(
    new Request(new URL('/', url), context.request)
  );
  
  return new Response(indexResponse.body, {
    ...indexResponse,
    status: 200,
    headers: indexResponse.headers
  });
}
