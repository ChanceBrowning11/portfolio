import { CardHeader, CardTitle, BodyText } from '../atoms'
import { Card } from '../molecules'

export type QuickStatsProps = {
  languageStats: Record<string, number>
  topRepos: {
    stargazers_count: number
    forks_count: number
  }[]
}

export const QuickStats = ({ languageStats, topRepos }: QuickStatsProps) => (
  <Card>
    <CardHeader>Quick Stats</CardHeader>
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <CardTitle styles="text-3xl mb-1">
          {Object.values(languageStats).reduce((a, b) => a + b, 0)}
        </CardTitle>
        <BodyText>Total Repositories</BodyText>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <CardTitle styles="text-xl mb-1">
          {Object.keys(languageStats).length}
        </CardTitle>
        <BodyText>Languages Used</BodyText>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <CardTitle styles="text-3xl mb-1">
          {topRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0)}
        </CardTitle>
        <BodyText>Total Stars</BodyText>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <CardTitle styles="text-3xl mb-1">
          {topRepos.reduce((sum, repo) => sum + repo.forks_count, 0)}
        </CardTitle>
        <BodyText>Total Forks</BodyText>
      </div>
    </div>
  </Card>
)