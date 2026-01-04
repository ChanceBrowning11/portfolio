// GitHub API utilities
const GITHUB_API_BASE = 'https://api.github.com'

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  updated_at: string
  homepage: string | null
}

export interface LanguageStats {
  [language: string]: number
}

export interface ContributionDay {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

/**
 * Fetch user's repositories from GitHub
 */
export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}

/**
 * Calculate language statistics across all repositories
 */
export async function fetchLanguageStats(username: string): Promise<LanguageStats> {
  const repos = await fetchGitHubRepos(username)
  const languageStats: LanguageStats = {}

  repos.forEach((repo) => {
    if (repo.language) {
      languageStats[repo.language] = (languageStats[repo.language] || 0) + 1
    }
  })

  return languageStats
}

/**
 * Fetch commit activity for the last year
 * Note: This uses a simplified approach. For more accurate data, 
 * you may need to use GitHub's GraphQL API or personal access token
 */
export async function fetchCommitActivity(username: string): Promise<ContributionDay[]> {
  // This is a placeholder that generates mock data
  // For real data, you'll need to use GitHub GraphQL API with authentication
  const days: ContributionDay[] = []
  const today = new Date()
  
  for (let i = 365; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    
    // Mock data - replace with real API call
    const count = Math.floor(Math.random() * 10)
    const level = count === 0 ? 0 : count < 3 ? 1 : count < 5 ? 2 : count < 7 ? 3 : 4
    
    days.push({
      date: date.toISOString().split('T')[0],
      count,
      level: level as 0 | 1 | 2 | 3 | 4,
    })
  }
  
  return days
}

/**
 * Get top repositories (by stars)
 */
export async function fetchTopRepos(username: string, limit: number = 6): Promise<GitHubRepo[]> {
  const repos = await fetchGitHubRepos(username)
  return repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, limit)
}
