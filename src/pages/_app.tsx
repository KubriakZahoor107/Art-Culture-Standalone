import '@/utils/logger'
import type { AppProps } from 'next/app'
import { NextIntlClientProvider } from 'next-intl'

export default async function App({ Component, pageProps }: AppProps<{ locale: string }>) {
  const { locale = 'uk', ...rest } = pageProps
  const messages = (await import(`../../messages/${locale}.json`)).default as Record<string, string>
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Component {...rest} />
    </NextIntlClientProvider>
  )
}
