import { ReactNode } from 'react'

type ExternalLinkProps = {
  href: string
  children: ReactNode
  className?: string
  showIcon?: boolean
}

export const ExternalLink = ({ 
  href, 
  children, 
  className = 'text-blue-600 dark:text-blue-400 hover:underline',
  showIcon = false 
}: ExternalLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    {children}
    {showIcon && (
      <svg 
        className="inline-block w-4 h-4 ml-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
        />
      </svg>
    )}
  </a>
)
