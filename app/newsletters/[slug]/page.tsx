import { Metadata, ResolvingMetadata } from 'next';
import NewsletterDetailClient from './NewsletterDetailClient';

interface NewsletterApiItem {
  _id: string;
  title: string;
  slug: string;
  uploadImage?: string;
  coverImage?: string;
  excerpt?: string;
  content?: string;
  tags?: string[];
  categories?: string[];
  readTime?: number;
  createdAt?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeyword?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

type Props = {
  params: Promise<{ slug: string }> | { slug: string }
}

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const response = await fetch(`${baseUrl}/api/newsletters/`, { cache: 'no-store' });
    if (!response.ok) {
      return { title: 'Newsletter | Sunbrilo' };
    }
    const data: NewsletterApiItem[] = await response.json();
    const post = data.find((item) => item.slug === slug);

    if (!post) {
      return { title: 'Post Not Found | Sunbrilo' };
    }

    const title = post.metaTitle || post.title || 'Newsletter | Sunbrilo';
    const description = post.metaDescription || post.excerpt || '';

    let keywords = post.metaKeyword || post.tags?.join(', ') || '';
    try {
      if (typeof keywords === 'string' && keywords.startsWith('[')) {
        keywords = JSON.parse(keywords).join(', ');
      }
    } catch (e) {
      // fallback to original string
    }

    const ogTitle = post.ogTitle || title;
    const ogDescription = post.ogDescription || description;
    const ogImage = post.ogImage || post.uploadImage || post.coverImage || '/images/newsletterimage/newsletter.png';

    return {
      alternates: { canonical: '/newsletters/' + slug },
      title,
      description,
      keywords,
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        images: [{ url: ogImage }],
      },
      twitter: {
        card: 'summary_large_image',
        title: ogTitle,
        description: ogDescription,
        images: [ogImage],
      }
    };
  } catch (error) {
    return { title: 'Newsletter | Sunbrilo' };
  }
}

export default function Page() {
  return <NewsletterDetailClient />;
}


