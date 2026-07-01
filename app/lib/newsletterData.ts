export interface Newsletter {
  id: string | number;
  title: string;
  headline: string;
  tag: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  featured: boolean;
  author: string;
  body: string;
  ctaText: string;
  ctaLink: string;
  isPublished?: boolean;
}

function mapNewsletter(item: any, index: number = 0): Newsletter {
  const coverImage = item.coverImage 
    ? (item.coverImage.startsWith('http') ? item.coverImage : `${process.env.NEXT_PUBLIC_BASE_URL || ''}${item.coverImage}`) 
    : '/images/bg4.png';
    
  return {
    id: item._id || String(index),
    title: item.title || '',
    date: item.publishedAt 
      ? new Date(item.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) 
      : (item.createdAt ? new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''),
    tag: item.category || 'Data Analytics',
    readTime: '5 min read',
    image: coverImage,
    headline: item.excerpt || item.title || '',
    excerpt: item.content ? item.content.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...' : '',
    slug: item.slug || item._id,
    featured: index === 0, // Make the first one featured by default
    author: item.author || 'Sunbrilo Team',
    body: item.content || '',
    ctaText: 'Read More',
    ctaLink: `/newsletters/${item.slug || item._id}`,
    isPublished: item.isPublished !== false,
  };
}

export async function fetchNewsletters(): Promise<Newsletter[]> {
  let fetchedNewsletters = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/newsletters/`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data.data && Array.isArray(data.data)) fetchedNewsletters = data.data;
      else if (data.value && Array.isArray(data.value)) fetchedNewsletters = data.value;
      else if (Array.isArray(data)) fetchedNewsletters = data;
    }
  } catch (error) {
    console.error('Error fetching newsletters:', error);
  }

  // Map backend newsletter schema to frontend Newsletter schema expected by NewslettersPageClient
  return fetchedNewsletters.map((item: any, index: number) => mapNewsletter(item, index));
}

export async function getNewsletterBySlug(slug: string): Promise<Newsletter | undefined> {
  try {
    // If the slug is a 24-character hex string, it might be a MongoDB ObjectId
    const isMongoId = /^[0-9a-fA-F]{24}$/.test(slug);
    const endpoint = isMongoId 
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/newsletters/${slug}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/api/newsletters/slug/${slug}`;

    const res = await fetch(endpoint, { cache: 'no-store' });
    if (res.ok) {
      const item = await res.json();
      // Handle the case where the API returns { data: item } or just item
      const newsletterData = item.data || item.value || item;
      return mapNewsletter(newsletterData);
    }
  } catch (error) {
    console.error(`Error fetching newsletter with slug/id ${slug}:`, error);
  }
  
  // Fallback to fetch all and find if the direct API fails
  const newsletters = await fetchNewsletters();
  return newsletters.find((n) => n.slug === slug || String(n.id) === slug);
}
