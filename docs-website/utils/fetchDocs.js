// utils/fetchDocs.js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getDocContent(slug) {
  const docsDirectory = path.join(process.cwd(), 'pages', 'docs')
  const fullPath = path.join(docsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { data, content }
}
