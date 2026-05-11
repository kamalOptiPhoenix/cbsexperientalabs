import type { MetadataRoute } from 'next'

const BASE = 'https://cbsexperientalabs.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/activities`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/manifesto`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/whats-broken`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/alternatives`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/stories`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ]
}
