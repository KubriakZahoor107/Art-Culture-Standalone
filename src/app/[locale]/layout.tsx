import type { LayoutProps } from '@/types/layout'

export type LocaleLayoutProps = LayoutProps<{
  locale: string
}>

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  )
}
