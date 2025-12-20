import { ReactNode } from 'react'

type ReactChild = {
  children: ReactNode
}

export type TypographyProps = ReactChild & {
  styles?: string
}
