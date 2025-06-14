import { newsList } from "../data/news.ts"

export async function getRandomNewsProps(context = {}) {
  const randomNews = newsList[Math.floor(Math.random() * newsList.length)]
  return {
    props: {
      randomNews,
      generatedAt: new Date().toISOString(),
      locale: context.locale ?? 'uk'
    },
  }
}
