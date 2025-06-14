import type { ReactNode } from 'react'

export type LayoutProps<T = {}> = {
  children: ReactNode
  params: T
}
