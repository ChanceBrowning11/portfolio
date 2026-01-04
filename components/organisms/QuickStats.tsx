import { Card } from "../molecules"

export type QuickStatsProps = {
  languageStats: Record<string, number>
  topRepos: {
    stargazers_count: number
    forks_count: number
  }[]
}

export const QuickStats = ({ languageStats, topRepos }: QuickStatsProps) => (
  <Card>  
    <div className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
      Quick Stats
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {Object.values(languageStats).reduce((a, b) => a + b, 0)}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Total Repositories</div>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {Object.keys(languageStats).length}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Languages Used</div>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {topRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0)}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Total Stars</div>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {topRepos.reduce((sum, repo) => sum + repo.forks_count, 0)}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Total Forks</div>
      </div>
    </div>
  </Card>
)