import { notFound } from 'next/navigation';
import NewsletterDetailClient from './NewsletterDetailClient';
import { Metadata } from 'next';
import { fetchNewsletters, getNewsletterBySlug } from '../../lib/newsletterData';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return {
    title: `Newsletter | Sunbrilo Technologies`,
  };
}

export default async function NewsletterPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  const mappedNewsletters = await fetchNewsletters();
  const publishedNewsletters = mappedNewsletters;

  // Find the requested post
  const post = await getNewsletterBySlug(slug);

  if (!post) {
    return notFound();
  }

  // Calculate related and top newsletters
  const related = publishedNewsletters.filter((p: any) => p.slug !== post.slug).slice(0, 3);
  const topNewsletters = publishedNewsletters.slice(0, 5);

  return (
    <NewsletterDetailClient 
      post={post} 
      related={related} 
      topNewsletters={topNewsletters} 
    />
  );
}
