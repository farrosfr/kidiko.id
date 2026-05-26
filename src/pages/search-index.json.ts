import { getCollection } from 'astro:content';
import { indexedRoutes, products, pillars } from '../data/kidiko';

export async function GET() {
  const blog = await getCollection('blog');

  const searchIndex = [
    ...indexedRoutes.map((route) => ({
      title: route === '/' ? 'Selamat datang di Kidiko' : route.replaceAll('/', ' ').trim(),
      description: 'Halaman Kidiko untuk AI pendidikan di grup WhatsApp.',
      slug: route,
      type: 'Halaman',
    })),
    ...products.map((product) => ({
      title: product.name,
      description: product.description,
      slug: `/product/${product.slug}/`,
      type: 'Paket',
    })),
    ...pillars.map((pillar) => ({
      title: pillar.title,
      description: pillar.text,
      slug: '/tentang/',
      type: 'Fitur',
    })),
    ...blog.map(post => ({
      title: post.data.title,
      description: post.data.description,
      slug: `/blog/${post.id}`,
      type: 'Blog Post'
    })),
  ];

  return new Response(JSON.stringify(searchIndex), {
    headers: { 'Content-Type': 'application/json' }
  });
}
