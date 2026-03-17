import { redirect } from "next/navigation";

interface LegacyCollectionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LegacyCollectionPage({ params }: LegacyCollectionPageProps) {
  const { slug } = await params;
  redirect(`/colecoes/${slug}`);
}
