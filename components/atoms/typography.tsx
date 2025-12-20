import { TypographyProps } from './types'

export const PageHeader = ({ children, styles }: TypographyProps) => {
  return <h1 className={`text-5xl font-bold mb-8 ${styles}`}>{children}</h1>
}
