import { ReactNode } from 'react'

type ProgressBarProps = {
  percentage: number
  color?: string
  label?: string | ReactNode
  value?: string
  className?: string
}

export const ProgressBar = ({ 
  percentage, 
  color = '#3b82f6', 
  label, 
  value,
  className = '' 
}: ProgressBarProps) => (
  <div className={`space-y-1 ${className}`}>
    {(label || value) && (
      <div className="flex justify-between text-sm">
        {label && (
          typeof label === 'string' ? (
            <span className="text-gray-700 dark:text-gray-300">{label}</span>
          ) : (
            label
          )
        )}
        {value && <span className="text-gray-600 dark:text-gray-400">{value}</span>}
      </div>
    )}
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{
          width: `${Math.min(Math.max(percentage, 0), 100)}%`,
          backgroundColor: color,
        }}
      />
    </div>
  </div>
)
