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
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[#A08AC2]/50 via-[#A08AC2]/15 to-transparent md:block" />

          <div className="space-y-8">
            {journeyItems.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={`${item.year}-${item.title}`}
                  className="relative grid gap-5 md:grid-cols-[140px_1fr] md:gap-10"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#A08AC2]/30 bg-[#100E14] text-[#A08AC2] shadow-[0_0_20px_rgba(160,138,194,0.08)] md:absolute md:left-0">
                      <Icon size={18} />
                    </div>

                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#A08AC2]/70 md:pl-16">
                      {item.year}
                    </span>
                  </div>

                  <div className="rounded-3xl border border-white/[0.08] bg-[#1C1823] p-7 transition-all duration-300 hover:border-[#A08AC2]/25 hover:bg-[#211C29] md:ml-10">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-3xl text-sm leading-7 text-[#B8B3BD]">
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