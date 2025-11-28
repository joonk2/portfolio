'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiSpring,
  SiPython,
  SiDocker,
  SiAmazonaws,
  SiGitlab,
  SiRecoil,
  SiTestinglibrary,
  SiExpo,
  SiReactquery
} from 'react-icons/si'
import { IconType } from 'react-icons'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

interface Project {
  title: string
  period: string
  description: string
  techStack: string[]
  image?: string
  imageWidth?: number
  imageHeight?: number
  link?: string
  contributions?: string[]
}

// 기술 스택 이름을 아이콘으로 매핑
const getTechIcon = (tech: string): IconType | null => {
  const techLower = tech.toLowerCase()
  
  if (techLower.includes('react native') || techLower === 'react native') {
    return SiReact
  }
  if (techLower.includes('react') && !techLower.includes('native') && !techLower.includes('query')) {
    return SiReact
  }
  if (techLower.includes('next') || techLower === 'next.js') {
    return SiNextdotjs
  }
  if (techLower.includes('typescript')) {
    return SiTypescript
  }
  if (techLower.includes('javascript')) {
    return SiJavascript
  }
  if (techLower.includes('tailwind')) {
    return SiTailwindcss
  }
  if (techLower.includes('firebase')) {
    return SiFirebase
  }
  if (techLower.includes('spring')) {
    return SiSpring
  }
  if (techLower.includes('python')) {
    return SiPython
  }
  if (techLower.includes('docker')) {
    return SiDocker
  }
  if (techLower.includes('aws') || techLower.includes('amazon')) {
    return SiAmazonaws
  }
  if (techLower.includes('gitlab')) {
    return SiGitlab
  }
  if (techLower.includes('recoil')) {
    return SiRecoil
  }
  if (techLower.includes('zustand')) {
    return null
  }
  if (techLower.includes('testing')) {
    return SiTestinglibrary
  }
  if (techLower.includes('expo')) {
    return SiExpo
  }
  if (techLower.includes('react query') || techLower.includes('query')) {
    return SiReactquery
  }
  
  return null
}

const mainProjects: Project[] = [
  {
    title: 'Daltoori',
    period: '2025.10 ~ 2025.11',
    description:
      'Daltoori는 한국어 발음과 억양을 AI로 분석하여 더 자연스럽고 정확한 한국어 발음을 학습할 수 있도록 돕는 음성 분석 서비스입니다. 사용자의 음성을 입력하면 AI가 발음, 억양, 리듬 등을 세밀하게 분석하고 즉시 피드백을 제공해 효율적인 발음 교정 경험을 제공합니다.',
    image: '/assets/daltoori.png',
    imageWidth: 1280,
    imageHeight: 720,
    link: 'https://github.com/DALTOORI-SSAFY-13/e101',
    techStack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'Firebase',
      'FastAPI',
      'Spring Boot',
    ],
    contributions: [
      'Docker Compose·Jenkins·Nginx 자동화를 묶어 로컬/배포 환경 셋업 시간을 하루에서 30분 이하로 단축했습니다.',
      'Redis 캐시와 users·script·category 모듈형 API를 설계해 인증·콘텐츠 요청 응답을 평균 40% 이상 최적화했습니다.',
    ]
  },
  {
    title: 'VestBox',
    period: '2025.08.25 ~ 2025.09.29',
    description:
      'VestBox는 AI 챗봇과 RAG 기반 분석을 활용해 사용자 취향과 니즈를 파악하고, 맞춤형 농산물 구독 박스를 추천해 주는 서비스입니다. 소비 패턴과 가격 변동에 대한 알림, 농산물 정보 연동까지 제공하여 구독 경험을 향상시킵니다.',
    image: '/assets/vestbox.png',
    imageWidth: 1280,
    imageHeight: 720,
    techStack: [
      'React',
      'TypeScript',
      'LangChain',
      'OpenAI API',
      'Spring Boot',
      'MySQL',
      'Redis',
      'Docker',
      'Docker Compose',
      'Jenkins',
      'AWS EC2',
      'Nginx',
      'Certbot',
    ],
    contributions: [
      "Spring Boot 기반 /auth 인증 도메인 전체(API·서비스·시큐리티)를 설계·구현했습니다.",
      "FIGMA 로 UI UX 디자인을 제작하였습니다"
    ]
  },
  {
    title: 'Re:code',
    period: '2024.07 ~ 2024.08',
    description:
      'Re:code는 고령자의 정서적 안정과 인지 능력 유지를 돕기 위해 AI 기반 회상 훈련을 제공하는 디지털 플랫폼입니다. Gemini와 STT를 활용해 맞춤형 질문을 생성하고, 감정 분석과 보호자 연동, 커뮤니티 기능을 통해 지속적인 회상 활동을 지원합니다.',
    image: '/assets/recode.png',
    imageWidth: 1280,
    imageHeight: 720,
    link: 'https://github.com/joonk2/RE-CODE',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Framer Motion',
      'Spring Boot',
      'Java 17',
      'Gemini',
      'Clova STT',
      'face-api.js',
      'WebRTC',
      'MySQL',
      'Jenkins',
      'Nginx',
      'AWS S3',
    ],
    contributions: [
      'Next.js 라우트 그룹과 React Query 캐시 무효화 주기 최적화로 회원가입·로그인 API 왕복 호출 횟수를 약 35% 줄이고, 첫 응답 시간(TTFB)을 평균 420ms → 270ms로 단축했습니다.',
      '메인·연동 토큰 화면의 공통 UI를 shadcn/ui 컴포넌트로 재구성하고 React.lazy + Suspense 로더를 적용해 번들 크기를 780KB → 520KB(-33%), LCP를 3.4s → 2.2s로 개선했습니다.',
    ]
  },
  
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // 자동 슬라이드
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mainProjects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + mainProjects.length) % mainProjects.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % mainProjects.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <>
      {/* Main Projects 섹션 */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-blue-50/40 via-white to-purple-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.05),transparent_65%)] pointer-events-none"></div>
        <div className="max-w-[95%] lg:max-w-[90%] xl:max-w-7xl mx-auto relative z-10">
          <div className="mb-48 lg:mb-56">
            <span className="text-primary font-mono text-base mb-2 block">03.</span>
            <h2 className="section-title mb-0">
              Main Projects
            </h2>
          </div>

        {/* 캐러셀 컨테이너 */}
        <div className="relative min-h-[650px] pt-24 pb-12">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-6xl mx-auto" style={{ height: '600px', perspective: '1000px' }}>
              {mainProjects.map((project, index) => {
                const totalItems = mainProjects.length
                const angleStep = (2 * Math.PI) / totalItems
                const baseAngle = -Math.PI / 2 // 시작 각도 (위쪽)
                const currentAngle = baseAngle + (index - currentIndex) * angleStep
                
                // 원형 경로 계산 (반지름)
                const radius = 300 // px (간격을 넓히기 위해 200 → 300으로 증가)
                const x = Math.cos(currentAngle) * radius
                const y = Math.sin(currentAngle) * radius * 0.4 // 세로 압축으로 타원형 경로
                
                const distance = Math.abs(index - currentIndex)
                const normalizedDistance = Math.min(distance, totalItems - distance) // 원형이므로 양쪽 거리 고려
                const scale = normalizedDistance === 0 ? 1 : 0.85 - normalizedDistance * 0.08 // scale 차이를 줄여서 더 잘 보이도록
                const opacity = normalizedDistance === 0 ? 1 : normalizedDistance === 1 ? 0.8 : normalizedDistance === 2 ? 0.5 : 0.3 // opacity를 높여서 더 잘 보이도록
                const zIndex = normalizedDistance === 0 ? 10 : 5 - normalizedDistance
                const rotationY = (index - currentIndex) * 15 // 3D 회전 효과를 줄여서 더 자연스럽게
                
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 transition-all duration-700 ease-in-out"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale}) rotateY(${rotationY}deg) rotate(${(index - currentIndex) * 2}deg)`,
                      opacity: opacity,
                      zIndex: zIndex,
                      pointerEvents: normalizedDistance === 0 ? 'auto' : 'none',
                      width: '85%',
                      maxWidth: '900px',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div 
                      className={`group relative overflow-hidden transition-all duration-300 bg-white ${
                        normalizedDistance === 0 ? 'cursor-pointer' : 'cursor-pointer'
                      }`}
                      onClick={() => {
                        if (normalizedDistance === 0 && project.link) {
                          window.open(project.link, '_blank', 'noopener,noreferrer')
                        } else if (normalizedDistance !== 0) {
                          goToSlide(index)
                        }
                      }}
                      style={{
                        border: '8px solid #f5f5f5',
                        borderTop: '12px solid #f5f5f5',
                        boxShadow: normalizedDistance === 0 
                          ? '0 20px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)' 
                          : '0 10px 25px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)',
                        borderRadius: '4px',
                        background: 'linear-gradient(to bottom, #ffffff 0%, #fafafa 100%)',
                      }}
                    >
                      {/* 사진첩 내부 패딩 */}
                      <div className="p-4">
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* 이미지 영역 */}
                          <div className="relative w-full flex items-center justify-center">
                            {project.image ? (
                              <div className="relative inline-block bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg shadow-inner border border-gray-200/50 p-2">
                                <Image
                                  key={`${project.image}-${project.title}`}
                                  src={project.image}
                                  alt={`${project.title} 이미지`}
                                  width={project.imageWidth ?? 1280}
                                  height={project.imageHeight ?? 720}
                                  className="w-auto h-auto max-w-full object-contain object-center transition-transform duration-300"
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  priority={index === currentIndex}
                                  unoptimized
                                />
                              </div>
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg shadow-inner border border-gray-200/50 p-4" style={{ minHeight: '200px' }}>
                                <span className="text-muted">프로젝트 이미지</span>
                              </div>
                            )}
                            
                            {/* 귀여운 말풍선 툴팁 */}
                            {normalizedDistance === 0 && project.link && (
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none transform group-hover:scale-110">
                                <div className="relative bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 text-white text-base lg:text-lg font-medium px-6 py-4 rounded-2xl shadow-2xl whitespace-nowrap animate-bounce">
                                  <span className="mr-2">👆</span>
                                  프로젝트 자세히 보러가기
                                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                                    <div className="w-4 h-4 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 rotate-45 rounded-sm"></div>
                                  </div>
                                  {/* 반짝이는 효과 */}
                                  <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse"></div>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* 콘텐츠 영역 */}
                          <div className="p-8 flex flex-col justify-center">
                            <div className="mb-4">
                              <h3 className="text-3xl lg:text-4xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                              </h3>
                              <p className="text-muted text-base lg:text-lg">{project.period}</p>
                            </div>
                            
                            <p className="text-muted text-base lg:text-lg leading-relaxed mb-4">
                              {project.description}
                            </p>
                        
                        {project.contributions && (
                          <div className="mb-4">
                            <p className="text-secondary font-semibold text-lg mb-2">내 역할</p>
                            <ul className="space-y-2 text-base text-muted">
                              {project.contributions.map((item, contribIndex) => (
                                <li key={contribIndex} className="flex items-start gap-2">
                                  <span className="text-primary mt-[2px]">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                            
                            {/* 기술 스택 */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.techStack.map((tech, techIndex) => {
                                const Icon = getTechIcon(tech)
                                return (
                                  <span
                                    key={techIndex}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-sm lg:text-base font-medium rounded"
                                  >
                                    {Icon && <Icon className="w-4 h-4 lg:w-5 lg:h-5" />}
                                    <span>{tech}</span>
                                  </span>
                                )
                              })}
                            </div>
                            
                            {/* 링크 */}
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-primary hover:text-accent font-semibold text-base lg:text-lg transition-colors group/link w-fit"
                              >
                                상세보기
                                <span className="ml-1 group-hover/link:translate-x-1 transition-transform">
                                  →
                                </span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* 네비게이션 버튼 */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-primary hover:text-white transition-all z-20"
            aria-label="이전 프로젝트"
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-primary hover:text-white transition-all z-20"
            aria-label="다음 프로젝트"
          >
            <HiChevronRight className="w-6 h-6" />
          </button>

          {/* 인디케이터 */}
          <div className="flex justify-center gap-2 mt-8">
            {mainProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
                aria-label={`프로젝트 ${index + 1}로 이동`}
              />
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* GitHub 섹션 */}
      <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-white via-yellow-50/20 to-orange-50/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.08),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-[95%] lg:max-w-[90%] xl:max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <span className="text-primary font-mono text-base mb-2 block">04.</span>
            <h2 className="section-title">
              GitHub
            </h2>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-8">
            <a
              href="https://github.com/joonk2"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative cursor-pointer transition-all duration-300 transform hover:scale-105 inline-block"
            >
              {/* 노란빛 보더 효과 */}
              <div 
                className="absolute -inset-4 rounded-full opacity-75"
                style={{
                  background: 'radial-gradient(circle, #ffd700, #ffeb3b, #ffc107)',
                  filter: 'blur(15px)',
                  zIndex: 1,
                }}
              />
              <div 
                className="relative p-1 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #ffd700, #ffeb3b, #ffc107, #ffd700)',
                  backgroundSize: '200% 200%',
                  zIndex: 2,
                  boxShadow: '0 0 30px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 235, 59, 0.5), 0 0 90px rgba(255, 193, 7, 0.4)',
                }}
              >
                <div className="bg-white rounded-full p-2">
                  <div className="relative">
                    <Image
                      src="/assets/coongya.png"
                      alt="coongya"
                      width={300}
                      height={300}
                      className="w-auto h-auto max-w-[300px] object-contain transition-all duration-300 group-hover:drop-shadow-2xl relative z-10 rounded-full"
                      unoptimized
                    />
                    {/* GitHub 아이콘 오버레이 */}
                    <div className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform z-20">
                      <svg
                        className="w-8 h-8 fill-current text-gray-900"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            
            <p className="text-xl lg:text-2xl text-muted text-center font-medium">
              저를 클릭하면 제 깃허브로 이동합니다
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
