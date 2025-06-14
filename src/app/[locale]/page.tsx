export { default } from '../page.tsx'

export function generateStaticParams() {
  return [{ locale: 'uk' }, { locale: 'en' }]
}
