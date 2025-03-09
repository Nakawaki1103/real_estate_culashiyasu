import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "culashiyasu - 自分で部屋を探して費用をお得に",
  description: "ポータルサイトで見つけたお部屋を送信するだけで仲介手数料がお得に",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'