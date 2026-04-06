import { ReactNode } from 'react'

// Article content registry - maps slug to JSX content
const articleRegistry: Record<string, () => ReactNode> = {}

// Register function used by individual article files
export function registerArticle(slug: string, content: () => ReactNode) {
  articleRegistry[slug] = content
}

// Get article content by slug
export function getArticleContent(slug: string): ReactNode | null {
  const factory = articleRegistry[slug]
  return factory ? factory() : null
}
