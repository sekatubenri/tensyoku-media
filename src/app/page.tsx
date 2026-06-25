import { getAllArticles } from '@/lib/articles'
import Link from 'next/link'

const CATEGORIES = [
  { key: 'agent', label: '転職エージェント', emoji: '🏢', desc: 'おすすめエージェントを比較' },
  { key: 'resume', label: '職務経歴書', emoji: '📝', desc: '書類選考を突破する書き方' },
  { key: 'interview', label: '面接対策', emoji: '🎤', desc: '頻出質問と回答例' },
  { key: 'career', label: 'キャリア', emoji: '🚀', desc: 'キャリアプランの考え方' },
]

export default function Home() {
  const articles = getAllArticles()

  return (
    <div>
      <section className="bg-gradient-to-b from-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            転職を成功させる、<br className="md:hidden" />すべての情報がここに。
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            転職エージェント比較・職務経歴書・面接対策まで、<br className="hidden md:block" />
            20代30代の転職に必要な情報を完全網羅。
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              href={`/category/${cat.key}`}
              className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all text-center"
            >
              <span className="text-2xl">{cat.emoji}</span>
              <h3 className="font-bold text-sm text-gray-900 mt-2">{cat.label}</h3>
              <p className="text-xs text-gray-400 mt-1">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-700 rounded-full"></span>
          最新記事
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/article/${article.slug}`}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 h-32 flex items-center justify-center">
                <span className="text-4xl opacity-30">📄</span>
              </div>
              <div className="p-5">
                <span className="inline-block text-xs bg-blue-100 text-blue-700 font-medium px-2.5 py-0.5 rounded-full mb-3">
                  {article.categoryLabel}
                </span>
                <h3 className="font-bold text-gray-900 text-sm leading-relaxed mb-3 line-clamp-3 group-hover:text-blue-700 transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-400">{article.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
