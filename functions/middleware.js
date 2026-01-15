export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // Let files with extensions pass through
  if (url.pathname.match(/\.[a-z0-9]+$/i)) {
    return await context.next();
  }
  
  // Serve index.html for all other routes
  return context.env.ASSETS.fetch(
    new URL('/index.html', context.request.url)
  );
}
