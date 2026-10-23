/**
 * Zemun City Park — Cloudflare Worker for the static export in ./out.
 *
 * Responsibilities:
 *  - 301 non-www -> www (canonical host is https://www.zemuncitypark.com)
 *  - 301 http -> https
 * Everything else is served by Workers Static Assets.
 */

const CANONICAL_HOST = 'www.zemuncitypark.com';

export default {
  async fetch(request: Request, env: { ASSETS: { fetch: (r: Request) => Promise<Response> } }) {
    const url = new URL(request.url);

    // http -> https
    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }

    // apex -> www
    if (url.hostname !== CANONICAL_HOST && url.hostname === 'zemuncitypark.com') {
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
