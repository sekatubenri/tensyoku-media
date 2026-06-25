import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: '転職プラス｜20代30代の転職成功ガイド',
    template: '%s｜転職プラス',
  },
  description: '20代・30代の転職を徹底サポート。転職エージェント比較、職務経歴書の書き方、面接対策まで、転職成功に必要な情報を完全網羅。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: '転職プラス',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-900 antialiased min-h-screen flex flex-col">
        <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-blue-700">転職プラス</a>
            <nav className="hidden md:flex gap-6 text-sm text-gray-600">
              <a href="/category/agent" className="hover:text-blue-700">転職エージェント</a>
              <a href="/category/resume" className="hover:text-blue-700">職務経歴書</a>
              <a href="/category/interview" className="hover:text-blue-700">面接対策</a>
              <a href="/category/career" className="hover:text-blue-700">キャリア</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-50 border-t border-gray-200 mt-16">
          <div className="max-w-5xl mx-auto px-4 py-8 text-center text-sm text-gray-400">
            © 2026 転職プラス All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}
