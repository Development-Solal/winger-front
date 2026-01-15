export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Let asset files pass through (files with extensions)
    if (url.pathname.match(/\.\w+$/)) {
      return env.ASSETS.fetch(request);
    }
    
    // For all other routes, serve index.html
    return env.ASSETS.fetch(new Request(new URL('/', url.origin), request));
  }
}
