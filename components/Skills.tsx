'use client'

import { useState } from 'react'

const skillCategories = [
  {
    id: 'language',
    name: 'Language',
    skills: [
      { name: 'Java', description: '객체지향 프로그래밍과 Spring Framework를 활용한 웹 개발에 주로 사용합니다.', level: 70 },
      { name: 'JavaScript', description: 'Node.js 환경에서 서버 사이드 개발에 활용합니다.', level: 35 },
      { name: 'TypeScript', description: '타입 안정성을 위해 웹 애플리케이션 개발에 활용합니다.', level: 35 },
      { name: 'Python', description: '데이터 처리 및 스크립팅에 활용합니다.', level: 70 },
    ],
  },
  {
    id: 'backend',
    name: 'BackEnd',
    skills: [
      { name: 'Spring Boot', description: 'RESTful API 개발과 마이크로서비스 아키텍처 구축에 활용합니다.', level: 60 },
      { name: 'Django', description: 'Django를 활용한 서버 사이드 개발 경험이 있습니다.', level: 60 },      
      { name: 'RESTful API', description: '표준 REST API 설계 및 구현 경험이 있습니다.', level: 88 },
    ],
  },
  {
    id: 'database',
    name: 'Database',
    skills: [
      { name: 'MySQL', description: '관계형 데이터베이스 설계 및 쿼리 최적화 경험이 있습니다.', level: 70 },
    ],
  },
  {
    id: 'frontend',
    name: 'FrontEnd',
    skills: [
      { name: 'React', description: '프론트엔드와의 협업을 위해 기본적인 React 지식을 보유하고 있습니다.', level: 50 },
      { name: 'Next.js', description: 'SSR과 API 라우트를 활용한 풀스택 개발 경험이 있습니다.', level: 40 },
    ],
  },
  {
    id: 'etc',
    name: 'ETC',
    skills: [
      { name: 'AWS EC2', description: '서버 인프라 구축 및 배포 경험이 있습니다.', level: 60 },
      { name: 'Docker', description: '컨테이너화를 통한 배포 자동화 경험이 있습니다.', level: 60 },
      { name: 'Git', description: '버전 관리와 협업을 위해 사용합니다.', level: 85 },
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('language')

  const activeSkills = skillCategories.find(
    (cat) => cat.id === activeCategory
  )?.skills || []

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none"></div>
      <div className="max-w-[95%] lg:max-w-[90%] xl:max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-primary font-mono text-base mb-2 block">02.</span>
          <h2 className="section-title">
            Skills
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-4 text-lg font-semibold rounded-lg transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-muted hover:text-secondary border border-border'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeSkills.map((skill, index) => (
            <div
              key={index}
              className="card p-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-secondary">
                  {skill.name}
                </h3>
                <span className="text-lg font-semibold text-primary">{skill.level}%</span>
              </div>
              <div className="mb-4">
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-muted text-base lg:text-lg leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
