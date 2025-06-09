import { ReactNode } from 'react'
import type { LayoutProps } from 'next'

export default function LocaleLayout(
  { children, params }: LayoutProps<{ locale: string }>
) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  )
}
