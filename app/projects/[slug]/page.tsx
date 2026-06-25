type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-[#070B1A] text-[var(--text)] p-10">
      <h1 className="text-5xl font-bold">
        {slug}
      </h1>
    </main>
  );
}