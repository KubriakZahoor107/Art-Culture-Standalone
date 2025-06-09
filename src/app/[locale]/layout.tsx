<<<<<<< HEAD
export {};
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
=======
import { ReactNode } from 'react'

interface LocaleLayoutProps {
  children: ReactNode
  params: { locale: string }
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  )
}
>>>>>>> origin/main
