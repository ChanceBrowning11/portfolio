// Generated Colors for Programming Languages
export const LANGUAGE_COLORS: { [key: string]: string } = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  PHP: '#4F5D95',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  Swift: '#ffac45',
  Kotlin: '#A97BFF',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Dart: '#00B4AB',
  Vue: '#41b883',
  Svelte: '#ff3e00',
  Jupyter: '#DA5B0B',
  Scala: '#c22d40',
  Lua: '#000080',
  Perl: '#0298c3',
  R: '#198CE7',
  MATLAB: '#e16737',
}

export const getLanguageColor = (language: string): string => {
  return LANGUAGE_COLORS[language] || '#8b949e'
}
