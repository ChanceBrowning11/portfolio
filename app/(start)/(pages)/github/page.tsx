import { PageHeader, SectionHeader, ExternalLink, GitHubIcon } from '@/components/atoms'
import { Card } from '@/components/molecules'
import { CommitHeatmap, LanguagesChart, QuickStats } from '@/components/organisms'
import { RepositoryGrid } from '@/components/templates'
import { GITHUB_USERNAME } from '@/utils/constants'
import { fetchCommitActivity, fetchLanguageStats, fetchTopRepos } from '@/utils/github'

export default async function Github() {
  // Fetch data in parallel
  const [commitActivity, languageStats, topRepos] = await Promise.all([
    fetchCommitActivity(GITHUB_USERNAME),
    fetchLanguageStats(GITHUB_USERNAME),
    fetchTopRepos(GITHUB_USERNAME, 6),
  ])

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <PageHeader>GitHub Activity</PageHeader>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore my open source contributions and projects on{' '}
          <ExternalLink href={`https://github.com/${GITHUB_USERNAME}`}>
            @{GITHUB_USERNAME}
          </ExternalLink>
        </p>
      </div>

      {/* Commit Heatmap Section */}
      <CommitHeatmap data={commitActivity} />

      {/* Featured Repositories */}
      <RepositoryGrid repos={topRepos} linkToProject={true} />

      {/* Two Column Layout for Languages and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <LanguagesChart stats={languageStats} />
        <QuickStats languageStats={languageStats} topRepos={topRepos} />
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 text-center">
        <SectionHeader styles="mb-2">Want to collaborate?</SectionHeader>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          I'm always interested in working on exciting projects and contributing to open source.
        </p>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium"
        >
          <GitHubIcon />
          Follow me on GitHub
        </a>
      </Card>
    </div>
  )
}