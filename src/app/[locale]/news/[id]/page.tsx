export async function generateStaticParams() {
  let newsList: Array<{ id: any }> = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/news`);
    newsList = await res.json();
  } catch (err) {
    console.error(
      `[guard] Failed to fetch news for generateStaticParams:`,
      err
    );
  }
  return newsList.map(item => ({ id: item.id.toString() }));
}


