'use client'

import { LanguageStats } from '@/utils/github'
import { getLanguageColor } from '@/utils/languages'
import { CardHeader, LanguageDot, SmallText } from '../atoms'
import { Card, ProgressBar } from '../molecules'

interface LanguagesChartProps {
  stats: LanguageStats
  className?: string
}

export function LanguagesChart({ stats, className = '' }: LanguagesChartProps) {
  const sortedLanguages = Object.entries(stats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)

  const total = sortedLanguages.reduce((sum, [, count]) => sum + count, 0)

  return (
    <Card className={className}>
      <CardHeader>Most Used Languages</CardHeader>

      {/* Bar chart */}
      <div className="space-y-3">
        {sortedLanguages.map(([language, count]) => {
          const percentage = (count / total) * 100
          const color = getLanguageColor(language)
          
          return (
            <ProgressBar
              key={language}
              percentage={percentage}
              color={color}
              label={
                <div className="flex items-center gap-2">
                  <LanguageDot color={color} />
                  <span className="text-gray-700 dark:text-gray-300">{language}</span>
                </div>
              }
              value={`${count} ${count === 1 ? 'repo' : 'repos'} (${percentage.toFixed(1)}%)`}
            />
          )
        })}
      </div>

      {/* Pie chart legend (simplified) */}
      <div className="mt-6 flex flex-wrap gap-3">
        {sortedLanguages.map(([language]) => (
          <div key={language} className="flex items-center gap-2">
            <LanguageDot color={getLanguageColor(language)} size="sm" />
            <SmallText>{language}</SmallText>
          </div>
        ))}
      </div>
    </Card>
  )
}
