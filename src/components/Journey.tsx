import { GraduationCap, Code2, Rocket } from "lucide-react"
import SectionHeading from "./SectionHeading"

const journeyItems = [
  {
    year: "2024",
    title: "Started B.Tech in CSE - Data Science",
    description:
      "Started my engineering journey at R.V.R. & J.C. College of Engineering with a focus on computer science and data-driven technologies.",
    icon: GraduationCap,
  },
  {
    year: "2025",
    title: "Started Building Real Projects",
    description:
      "Began developing practical applications while strengthening Java, Python, SQL, data structures, object-oriented programming, and web development.",
    icon: Code2,
  },
  {
    year: "2026",
    title: "Focused on Backend Development",
    description:
      "Moved deeper into Java backend development with Spring Boot, REST APIs, Spring Security, PostgreSQL, authentication, and full-stack application architecture.",
    icon: Rocket,
  },
  {
    year: "Now",
    title: "Building for the Future",
    description:
      "Continuing to improve my problem-solving, DSA, backend engineering, system design, and full-stack development skills through real-world projects.",
    icon: Code2,
  },
]

const Journey = () => {
  return (
    <section
      id="journey"
      className="px-6 py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Journey"
          title="How I'm growing."
          description="A timeline of my learning journey, projects, and growing focus on software development."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[#84A98C]/70 via-[#84A98C]/30 to-transparent md:block" />

          <div className="space-y-8">
            {journeyItems.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={`${item.year}-${item.title}`}
                  className="relative grid gap-5 md:grid-cols-[140px_1fr] md:gap-10"
                >
                  {/* Year and Icon */}
                  <div className="flex items-center gap-4">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#A5B5A7] bg-[#E8EDE7] text-[#527A5B] shadow-sm transition-all duration-300 hover:border-[#527A5B] hover:bg-[#84A98C] hover:text-white md:absolute md:left-0">
                      <Icon size={18} />
                    </div>

                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#527A5B] md:pl-16">
                      {item.year}
                    </span>
                  </div>

                  {/* Journey Card */}
                  <div className="rounded-3xl border border-[#A5B5A7]/70 bg-[#E8EDE7] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#84A98C] hover:shadow-lg md:ml-10">
                    <h3 className="text-xl font-semibold text-[#26352B]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-3xl text-sm leading-7 text-[#4D5B50]">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
