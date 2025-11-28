export default function About() {
  const aboutPoints = [
    {
      title: '웹 개발을 선택한 이유',
      description:
        '컴퓨터와 개발을 처음 접한 이후, 다양한 웹 기술과 풀스택 개발 경험을 쌓으며 사용자에게 가치를 제공하는 웹 애플리케이션 구축에 흥미를 느껴 웹 개발에 집중하고 있습니다.',
    },
    {
      title: '성장에 대한 즐거움',
      description:
        '새로운 프로젝트를 시작할 때마다, 이전 경험을 바탕으로 부족했던 부분을 개선하고자 새로운 아키텍처 패턴이나 기술을 적극적으로 적용하는 과정에서 큰 성취감을 느낍니다.',
    },
    {
      title: '꺾이지 않는 마음',
      description:
        '문제를 정의하고 해결해 나가면서 때론 기능 구현에 오랜 시간이 걸렸지만, 그 덕분에 "해결할 수 없는 문제는 없다"는 확신을 가지게 되었습니다.',
    },
  ]
  

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-white via-purple-50/30 to-blue-50/40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_70%)] pointer-events-none"></div>
      <div className="max-w-[95%] lg:max-w-[90%] xl:max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-primary font-mono text-base mb-2 block">01.</span>
          <h2 className="section-title">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutPoints.map((point, index) => (
            <div key={index} className="card p-8">
              <h3 className="text-2xl lg:text-3xl font-semibold text-secondary mb-4">
                {point.title}
              </h3>
              <p className="text-lg lg:text-xl text-muted leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
