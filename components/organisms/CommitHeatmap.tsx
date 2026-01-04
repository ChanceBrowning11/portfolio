'use client'

import { ContributionDay } from '@/utils/github'
import { CardHeader, HeatmapIcon, SmallText } from '../atoms'
import { Card, HeatmapLegend } from '../molecules'

interface CommitHeatmapProps {
  data: ContributionDay[]
  className?: string
}

export function CommitHeatmap({ data, className = '' }: CommitHeatmapProps) {
  // Group days by week
  const weeks: ContributionDay[][] = []
  let currentWeek: ContributionDay[] = []
  
  data.forEach((day, index) => {
    currentWeek.push(day)
    const dayOfWeek = new Date(day.date).getDay()
    
    if (dayOfWeek === 6 || index === data.length - 1) {
      weeks.push([...currentWeek])
      currentWeek = []
    }
  })

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0:
        return 'bg-gray-100 dark:bg-gray-800'
      case 1:
        return 'bg-green-200 dark:bg-green-900'
      case 2:
        return 'bg-green-400 dark:bg-green-700'
      case 3:
        return 'bg-green-600 dark:bg-green-500'
      case 4:
        return 'bg-green-800 dark:bg-green-300'
      default:
        return 'bg-gray-100 dark:bg-gray-800'
    }
  }

  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <Card className={`overflow-x-auto ${className}`}>
      <div className="inline-block min-w-full">
        <CardHeader>Contribution Activity</CardHeader>
        
        <div className="flex gap-1">
          {/* Day labels */}
          <div className="flex flex-col gap-1 pr-2">
            {dayLabels.map((day, i) => (
              <div key={day} className="h-3 flex items-center" style={{ opacity: i % 2 === 0 ? 1 : 0 }}>
                <SmallText>{day}</SmallText>
              </div>
            ))}
          </div>

          {/* Heatmap grid */}
          <div className="flex gap-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day) => (
                  <HeatmapIcon
                    key={day.date}
                    className={"transition-all hover:ring-2 hover:ring-gray-400"}
                    levelColor={getLevelColor(day.level)}
                    title={`${day.date}: ${day.count} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <HeatmapLegend getLevelColor={getLevelColor} className="mt-4" />
      </div>
    </Card>
  )
}
