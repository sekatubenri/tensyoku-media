import { getArticle, getAllArticles } from '@/lib/articles'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href={`/category/${article.category}`} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100">
          {article.categoryLabel}
        </Link>
        <span className="text-xs text-gray-400 ml-3">{article.date}</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-8">
        {article.title}
      </h1>

      <article
        className="prose prose-gray prose-lg max-w-none
          prose-headings:text-gray-900 prose-headings:font-bold
          prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
          prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-gray-700 prose-p:leading-relaxed
          prose-li:text-gray-700
          prose-strong:text-gray-900
          prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/" className="text-blue-700 text-sm hover:underline">← 記事一覧に戻る</Link>
      </div>
    </div>
  )
}
