import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://tensyoku-select.com'),
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
  verification: {
    google: 'BN-zB0M32odPOCOSMDpF_0TAfmdHRTNT4bM5G61YNqY',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col">
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9320888355424356" crossOrigin="anonymous" strategy="afterInteractive" />
        <header className="border-b border-gray-200 sticky top-0 bg-white z-50 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="bg-blue-700 text-white text-sm font-bold px-2.5 py-1 rounded">転職</span>
              <span className="text-xl font-bold text-gray-900">プラス</span>
            </a>
            <nav className="hidden md:flex gap-1 text-sm">
              <a href="/category/agent" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">転職エージェント</a>
              <a href="/category/resume" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">職務経歴書</a>
              <a href="/category/interview" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">面接対策</a>
              <a href="/category/career" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">キャリア</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="bg-blue-700 text-white text-xs font-bold px-2 py-0.5 rounded">転職</span>
                <span className="text-sm font-bold text-gray-900">プラス</span>
              </div>
              <nav className="flex gap-6 text-xs text-gray-400">
                <a href="/category/agent" className="hover:text-gray-600">転職エージェント</a>
                <a href="/category/resume" className="hover:text-gray-600">職務経歴書</a>
                <a href="/category/interview" className="hover:text-gray-600">面接対策</a>
              </nav>
            </div>
            <nav className="flex justify-center gap-6 text-xs text-gray-400 mt-4">
              <a href="/privacy" className="hover:text-gray-600">プライバシーポリシー</a>
              <a href="/contact" className="hover:text-gray-600">お問い合わせ</a>
            </nav>
            <p className="text-center text-xs text-gray-300 mt-4">© 2026 転職プラス All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
