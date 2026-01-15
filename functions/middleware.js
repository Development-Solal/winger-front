export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // If the request is for a file (has an extension), let it through
  if (url.pathname.includes('.')) {
    return await context.next();
  }
  
  // Otherwise, serve index.html for client-side routing
  return context.env.ASSETS.fetch(new URL('/index.html', context.request.url));
}