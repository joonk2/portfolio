'use client'

import { useCallback } from 'react'

export default function Hero() {
  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80 // 네비게이션 바 높이 고려
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* GIF 배경 */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/joonhwanKo.gif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.08),transparent_60%)] pointer-events-none"></div>
      <div className="text-center max-w-[95%] lg:max-w-7xl mx-auto relative z-10">
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-secondary">
            웹 개발자
            <br />
            <span className="text-primary">고준환</span>
          </h1>
        </div>
        
        <div className="mb-12">
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted max-w-4xl mx-auto leading-relaxed">
            끊임없는 도전을 즐기며, 웹 개발의 매력에 빠져 있습니다.
            <br />
            안정적이고 확장 가능한 서버 아키텍처와 API 설계를 통해
            <br />
            사용자에게 최고의 경험을 제공합니다.
          </p>
        </div>
        
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, 'about')}
            className="btn-secondary px-10 py-4 text-lg lg:text-xl font-semibold"
          >
            더 알아보기
          </a>
          <a
            href="#github"
            onClick={(e) => handleSmoothScroll(e, 'github')}
            className="btn-primary px-10 py-4 text-lg lg:text-xl font-semibold"
          >
            연락하기
          </a>
        </div>
      </div>
    </section>
  )
}
