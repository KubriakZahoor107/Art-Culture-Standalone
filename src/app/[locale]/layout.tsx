import type { LayoutProps } from '@/types/layout'

export default function LocaleLayout({
  children,
  params,
}: LayoutProps<{ locale: string }>) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  )
}
