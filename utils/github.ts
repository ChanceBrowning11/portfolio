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

export async function fetchCommitActivity(username: string): Promise<ContributionDay[]> {
  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `

  try {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    }

    // Add authentication if token is available
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`
    }

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables: { username },
      }),
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`GitHub GraphQL API error: ${response.status}`)
    }

    const data = await response.json()

    if (data.errors) {
      console.error('GitHub GraphQL errors:', data.errors)
      throw new Error('Failed to fetch contribution data')
    }

    const weeks = data.data?.user?.contributionsCollection?.contributionCalendar?.weeks || []
    const days: ContributionDay[] = []

    // Flatten weeks into individual days
    weeks.forEach((week: any) => {
      week.contributionDays.forEach((day: any) => {
        const count = day.contributionCount
        // Map contribution count to level (0-4)
        const level = count === 0 ? 0 : count < 3 ? 1 : count < 6 ? 2 : count < 10 ? 3 : 4
        
        days.push({
          date: day.date,
          count,
          level: level as 0 | 1 | 2 | 3 | 4,
        })
      })
    })

    return days
  } catch (error) {
    console.error('Error fetching commit activity:', error)
    // Return empty array on error
    return []
  }
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
