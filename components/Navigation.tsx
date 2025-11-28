'use client'

import { useState, useEffect, useCallback } from 'react'

interface NavItem {
  name: string
  href: string
  external?: boolean
}

const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'GitHub', href: '#github' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = navItems
        .filter(item => !item.external)
        .map(item => item.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[95%] lg:max-w-[90%] xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl lg:text-3xl font-bold text-secondary">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = !item.external && activeSection === item.href.substring(1)
              const targetId = item.href.substring(1)

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={!item.external ? (e) => handleSmoothScroll(e, targetId) : undefined}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={`transition-colors duration-200 font-semibold text-lg ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted hover:text-secondary'
                  }`}
                >
                  {item.name}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
