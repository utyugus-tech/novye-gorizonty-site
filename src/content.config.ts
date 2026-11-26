import { defineCollection, z } from 'astro:content';
const schema = z.object({ wp_id: z.string(), title: z.string(), date: z.string(), status: z.string(), original_url: z.string(), slug: z.string(), categories: z.array(z.string()), tags: z.array(z.string()), seo_title: z.string(), seo_description: z.string(), focus_keyword: z.string(), featured_image_id: z.string(), featured_image: z.string() });
export const collections = { articles: defineCollection({ type: 'content', schema }), pages: defineCollection({ type: 'content', schema }) };
