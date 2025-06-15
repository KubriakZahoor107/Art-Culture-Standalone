// Файл: /src/app/layout.tsx

import Script from 'next/script'
import { env } from '@/utils/env'

const FIRA_SANS_URL = '/customFonts/FiraSans-Regular.ttf'

export const metadata = {
  title: 'Art Play Ukraine',
  description: 'Культура, мистецтво та новини від Art Play Ukraine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = env.NEXT_PUBLIC_GA_ID
  const isProd = process.env.NODE_ENV === 'production'

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href={FIRA_SANS_URL}
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <style>{`
          @font-face {
            font-family: 'Fira Sans';
            src: url(${FIRA_SANS_URL}) format('truetype');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          body { font-family: 'Fira Sans', sans-serif; }
        `}</style>
      </head>
      <body>
        {isProd && gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  )
}

