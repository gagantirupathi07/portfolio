import SectionHeading from "./SectionHeading"
import SkillGroup from "./SkillGroup"

const skillGroups = [
  {
    title: "Languages",
    description: "Core programming languages I work with.",
    skills: ["Java", "Python (Basics)", "SQL (Basics)"],
  },
  {
    title: "Backend",
    description: "Technologies I use to build backend systems and APIs.",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "JDBC",
      "REST APIs",
      "Spring Security",
      "JWT",
    ],
  },
  {
    title: "Frontend",
    description: "Tools for building responsive web interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Database & Core",
    description: "Database and computer science fundamentals.",
    skills: [
      "PostgreSQL",
      "DBMS",
      "OOP",
      "Data Structures",
      "Algorithms",
    ],
  },
  {
    title: "Tools",
    description: "Tools I use throughout the development workflow.",
    skills: [
      "Git",
      "GitHub",
      "IntelliJ IDEA",
      "Postman",
      "VS Code",
    ],
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with."
          description="A growing set of technologies and fundamentals I use to design, develop, and test applications."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillGroup
              key={group.title}
              title={group.title}
              description={group.description}
              skills={group.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills