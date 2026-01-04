'use client'

import Link from 'next/link'
import { GitHubRepo } from '@/utils/github'
import { Badge, LanguageBadge, StarIcon, ForkIcon } from '@/components/atoms'

interface RepositoryCardProps {
  repo: GitHubRepo
  linkToProject?: boolean
}

export function RepositoryCard({ repo, linkToProject = false }: RepositoryCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const cardContent = (
    <div className="h-full p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-1">
          {repo.name}
        </h3>
        {repo.language && <LanguageBadge language={repo.language} className="ml-2" />}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 min-h-[40px]">
        {repo.description || 'No description provided'}
      </p>

      {/* Topics */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.topics.slice(0, 3).map((topic) => (
            <Badge key={topic} variant="neutral">
              {topic}
            </Badge>
          ))}
          {repo.topics.length > 3 && (
            <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
              +{repo.topics.length - 3} more
            </span>
          )}
        </div>
      )}

      {/* Stats and Meta */}
      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <StarIcon />
            <span>{repo.stargazers_count}</span>
          </div>
          <div className="flex items-center gap-1">
            <ForkIcon />
            <span>{repo.forks_count}</span>
          </div>
        </div>
        <span className="text-xs">Updated {formatDate(repo.updated_at)}</span>
      </div>
    </div>
  )

  if (linkToProject) {
    // Link to internal project page
    const slug = repo.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    return (
      <Link href={`/project/${slug}`} className="block h-full">
        {cardContent}
      </Link>
    )
  }

  // Link to GitHub repo
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      {cardContent}
    </a>
  )
}
