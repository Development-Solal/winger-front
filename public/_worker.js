export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Let asset files pass through
    if (url.pathname.match(/\.\w+$/)) {
      return env.ASSETS.fetch(request);
    }
    
    // For all other routes, serve index.html
    const indexUrl = new URL('/', url);
    return env.ASSETS.fetch(new Request(indexUrl, request));
  }
}
