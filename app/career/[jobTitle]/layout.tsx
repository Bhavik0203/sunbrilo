import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ jobTitle: string }> | { jobTitle: string }
}

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const jobTitle = params.jobTitle;

  return {
    alternates: {
      canonical: "/career/" + jobTitle,
    }
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
