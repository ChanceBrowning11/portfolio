import { HeatmapIcon } from '../atoms'

type HeatmapLegendProps = {
  getLevelColor: (level: number) => string
  className?: string
}

export const HeatmapLegend = ({ getLevelColor, className = '' }: HeatmapLegendProps) => (
  <div className={`flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 ${className}`}>
    <span>Less</span>
    <div className="flex gap-1">
      {[0, 1, 2, 3, 4].map((level) => (
        <HeatmapIcon key={level.toString()} levelColor={getLevelColor(level)} />
      ))}
    </div>
    <span>More</span>
  </div>
)
