import { TypographyProps } from './types'

export const CardHeader = ({ children, styles }: TypographyProps) => (
  <div className={`mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300 ${styles}`}>
    {children}
  </div>
)

export const Title = ({ children, styles }: TypographyProps) => {
  return <h1 className={`text-5xl font-bold mb-8 ${styles}`}>{children}</h1>
}

export const PageHeader = ({ children, styles }: TypographyProps) => {
  return <h2 className={`text-4xl font-bold ${styles}`}>{children}</h2>
}

export const SectionHeader = ({ children, styles }: TypographyProps) => {
  return <h3 className={`text-2xl font-semibold ${styles}`}>{children}</h3>
}
