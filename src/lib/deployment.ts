const fallbackSiteUrl = "https://gforce-lumen.github.io/Cello";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl).replace(/\/$/, "");

export function withBasePath(path: string) {
  if (!path.startsWith("/") || !basePath) {
    return path;
  }

  return path === "/" ? `${basePath}/` : `${basePath}${path}`;
}

export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return `${siteUrl}${path === "/" ? "" : path}`;
}
