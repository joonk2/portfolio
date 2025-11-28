'use client'

import { useState, useEffect } from 'react'
import { HiArrowUp } from 'react-icons/hi'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // 스크롤이 300px 이상 내려갔을 때 버튼 표시
      if (window.scrollY > 300 || document.documentElement.scrollTop > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // 초기 마운트 시 스크롤 위치 확인
    toggleVisibility()

    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[9999] bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group w-14 h-14"
      aria-label="맨 위로 이동"
    >
      <HiArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
    </button>
  )
}

