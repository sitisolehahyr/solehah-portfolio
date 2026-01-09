export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL;
  if (explicit) return new URL(explicit);

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) return new URL(`https://${vercelUrl}`);

  return new URL("http://localhost:3000");
}

