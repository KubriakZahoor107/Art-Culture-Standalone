import { newsList } from '@/data/news'
import { getTranslations } from 'next-intl/server'

export const dynamic = 'force-dynamic'

export default async function SsrPage() {
  const t = await getTranslations('ssr')
  const randomNews = newsList[Math.floor(Math.random() * newsList.length)]
  const generatedAt = new Date().toISOString()

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>{t('title')}</h1>
      <p>
        {t('generatedAt')}: {new Date(generatedAt).toLocaleString('uk-UA')}
      </p>
      <article>
        <h2>{randomNews.title}</h2>
        <p>{randomNews.excerpt}</p>
      </article>
    </main>
  )
}
