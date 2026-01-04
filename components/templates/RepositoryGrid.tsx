import { GitHubRepo } from '@/utils/github'
import { GITHUB_USERNAME } from '@/utils/constants'
import { RepositoryCard } from '../organisms/RepositoryCard'
import { SectionHeader } from "../atoms"

interface RepositoryGridProps {
  repos: GitHubRepo[]
  linkToProject?: boolean
  className?: string
}

export function RepositoryGrid({ repos, linkToProject = false, className = '' }: RepositoryGridProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <SectionHeader>Featured Repositories</SectionHeader>
        <a
          href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
        >
          View all repositories →
        </a>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
        {repos.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} linkToProject={linkToProject} />
        ))}
      </div>
    </section>
  )
}