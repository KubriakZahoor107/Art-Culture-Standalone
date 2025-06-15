export { default } from '../page'

export function generateStaticParams() {
  return [{ locale: 'uk' }, { locale: 'en' }]
}
