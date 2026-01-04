type BadgeProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'neutral'
  size?: 'sm' | 'md'
  className?: string
}

const variantClasses = {
  primary: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  secondary: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  neutral: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300',
}

const sizeClasses = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
}

export const Badge = ({ 
  children, 
  variant = 'neutral', 
  size = 'sm',
  className = '' 
}: BadgeProps) => (
  <span
    className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-md font-medium ${className}`}
  >
    {children}
  </span>
)

type LanguageBadgeProps = {
  language: string
  className?: string
}

export const LanguageBadge = ({ language, className = '' }: LanguageBadgeProps) => (
  <span className={`px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 whitespace-nowrap ${className}`}>
    {language}
  </span>
)
