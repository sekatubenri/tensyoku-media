import { getAllArticles } from '@/lib/articles'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'

const CATEGORIES = [
  { key: 'agent', label: '転職エージェント', icon: '🏢', desc: 'おすすめエージェントを比較', color: 'from-blue-500 to-indigo-600' },
  { key: 'resume', label: '職務経歴書', icon: '📝', desc: '書類選考を突破する書き方', color: 'from-emerald-500 to-teal-600' },
  { key: 'interview', label: '面接対策', icon: '🎤', desc: '頻出質問と回答例', color: 'from-orange-500 to-red-500' },
  { key: 'career', label: 'キャリア', icon: '🚀', desc: 'キャリアプランの考え方', color: 'from-purple-500 to-pink-500' },
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
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all text-center group"
            >
              <div className={`bg-gradient-to-br ${cat.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <span className="text-xl">{cat.icon}</span>
              </div>
              <h3 className="font-bold text-sm text-gray-900 group-hover:text-blue-700 transition-colors">{cat.label}</h3>
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
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  )
}
