import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '고준환 - 웹 개발자 포트폴리오',
  description: '웹 개발자 고준환의 포트폴리오입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}

