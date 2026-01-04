type StatCardProps = {
  value: string | number
  label: string
  className?: string
}

export const StatCard = ({ value, label, className = '' }: StatCardProps) => (
  <div className={`p-4 bg-gray-50 dark:bg-gray-700 rounded-lg ${className}`}>
    <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
      {value}
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
  </div>
)
