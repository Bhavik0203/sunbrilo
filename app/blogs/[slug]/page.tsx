import { Metadata, ResolvingMetadata } from 'next';
import BlogDetailClient from './BlogDetailClient';

interface BlogApiItem {
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
    const response = await fetch(`${baseUrl}/api/blogs/`, { cache: 'no-store' });
    if (!response.ok) {
      return { title: 'Blog | Sunbrilo' };
    }
    const data: BlogApiItem[] = await response.json();
    const post = data.find((item) => item.slug === slug);

    if (!post) {
      return { title: 'Post Not Found | Sunbrilo' };
    }

    const title = post.metaTitle || post.title || 'Blog | Sunbrilo';
    const description = post.metaDescription || post.excerpt || '';
    const ogTitle = post.ogTitle || title;
    const ogDescription = post.ogDescription || description;
    const ogImage = post.ogImage || post.uploadImage || post.coverImage || '/images/blogimage/blog.png';

    return {
      title,
      description,
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
    return { title: 'Blog | Sunbrilo' };
  }
}

export default function Page() {
  return <BlogDetailClient />;
}
