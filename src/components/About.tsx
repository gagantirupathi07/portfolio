import SectionHeading from "./SectionHeading"

const About = () => {
  return (
    <section
      id="about"
      className="relative px-6 py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Building with purpose."
          description="A little about who I am and how I approach software development."
        />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-base leading-8 text-white/50">
            <p>
              I'm Gagan Tirupathi, a Computer Science and Engineering
              student specializing in Data Science. I'm focused on
              backend and full-stack development, with Java and Spring
              Boot as my primary technologies.
            </p>

            <p>
              I enjoy turning ideas into complete applications —
              designing REST APIs, working with databases, implementing
              authentication, and building responsive interfaces that
              work well with the backend.
            </p>

            <p>
              My current focus is strengthening my Java, data
              structures, Spring Boot, system design, and full-stack
              development skills through practical projects.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Java", subtitle: "Primary language" },
              { title: "Spring", subtitle: "Backend framework" },
              { title: "React", subtitle: "Frontend" },
              { title: "SQL", subtitle: "Database" },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/[0.08] bg-[#1C1823] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#A08AC2]/30 hover:bg-[#211C29]"
              >
                <p className="text-3xl font-bold text-white transition-colors group-hover:text-[#A08AC2]">
                  {item.title}
                </p>

                <p className="mt-2 text-sm text-white/35">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About