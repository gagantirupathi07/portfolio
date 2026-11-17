import SectionHeading from "./SectionHeading"

const About = () => {
return (
\<section    id="about"    className="relative px-6 py-20 lg\:px-8 lg\:py-24"  >
\<div className="mx-auto max-w-7xl">
\<SectionHeading        eyebrow="About"        title="Building with purpose."        description="A little about who I am and how I approach software development."      />
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      {/* About Content */}
      <div className="space-y-5 text-base leading-8 text-[#4D5B50]">
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

      {/* Technology Cards */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { title: "Java", subtitle: "Primary language" },
          { title: "Spring", subtitle: "Backend framework" },
          { title: "React", subtitle: "Frontend" },
          { title: "SQL", subtitle: "Database" },
        ].map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl border border-[#A5B5A7]/60 bg-[#E8EDE7] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#84A98C] hover:bg-white hover:shadow-lg hover:shadow-[#84A98C]/15"
          >
            <p className="text-3xl font-bold text-[#26352B] transition-colors duration-300 group-hover:text-[#527A5B]">
              {item.title}
            </p>

            <p className="mt-2 text-sm text-[#4D5B50]/75">
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
