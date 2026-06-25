import { getArticlesByCategory, getCategoryLabel } from '@/lib/articles'
import Link from 'next/link'
import type { Metadata } from 'next'

type Props = { params: Promise<{ category: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const label = getCategoryLabel(category)
  return {
    title: `${label}の記事一覧`,
    description: `${label}に関する記事一覧。転職成功に役立つ情報を掲載。`,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const label = getCategoryLabel(category)
  const articles = getArticlesByCategory(category)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-700 pl-3">{label}</h1>

      {articles.length === 0 ? (
        <p className="text-gray-400">記事はまだありません。</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/article/${article.slug}`}
              className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-gray-900 text-sm leading-relaxed mb-2 line-clamp-3">
                {article.title}
              </h3>
              <p className="text-xs text-gray-400">{article.date}</p>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-8">
        <Link href="/" className="text-blue-700 text-sm hover:underline">← トップに戻る</Link>
      </div>
    </div>
  )
}
