import { getAllArticles } from '@/lib/articles'
import Link from 'next/link'

export default function Home() {
  const articles = getAllArticles()

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          転職を成功させる、すべての情報がここに。
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          転職エージェント比較・職務経歴書の書き方・面接対策まで、20代30代の転職に必要な情報を完全網羅。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-6 border-l-4 border-blue-700 pl-3">最新記事</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/article/${article.slug}`}
              className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <span className="inline-block text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded mb-3">
                {article.categoryLabel}
              </span>
              <h3 className="font-bold text-gray-900 text-sm leading-relaxed mb-2 line-clamp-3">
                {article.title}
              </h3>
              <p className="text-xs text-gray-400">{article.date}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
