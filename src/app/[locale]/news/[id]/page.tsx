// src/app/[locale]/news/[id]/page.tsx

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: string }
}) {
  let newsList: Array<{ id: any }> = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/news`
    );
    newsList = await res.json();
  } catch (err) {
    console.error(
      `[guard] Failed to fetch news for generateStaticParams (locale=${locale}):`,
      err
    );
  }

  return newsList.map((item) => ({
    locale,
    id: item.id.toString(),
  }));
}

