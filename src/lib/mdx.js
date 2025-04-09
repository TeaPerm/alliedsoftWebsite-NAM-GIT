import glob from 'fast-glob'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

/* This should be changed to provide localization */

async function loadEntries(directory, metaName, lng) {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `src/app/[lng]/${directory}` })).map(
        async (filename) => {
          let metadata = (
            await import(`../app/[lng]/${directory}/${filename}`)
          )[metaName]
          return {
            ...metadata,
            metadata,
            href: `/${lng}/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
          }
        },
      ),
    )
  ).sort((a, b) => b.date.localeCompare(a.date))
}

export function loadArticles(lng) {
  return loadEntries('blog', 'article', lng)
}

export function loadCaseStudies(lng) {
  return loadEntries('work', 'caseStudy', lng)
}

export default function getDocBySlug(slug, locale = 'en') {
  const docsDirectory = path.join(process.cwd(), '/src/content')
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(docsDirectory, slug, `${realSlug}.${locale}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content, data } = matter(fileContents)

  return { slug: realSlug, meta: data, content }
}
