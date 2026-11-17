import SectionHeading from "./SectionHeading"
import ProjectCard, { type Project } from "./ProjectCard"

import skillExchangeImage from "../assets/skill-exchange.png"
import fixonwayImage from "../assets/fixonway.png"

const projects: Project[] = [
  {
    title: "Skill Exchange",
    description:
      "A full-stack platform for peer-to-peer skill learning and teaching, implementing a credit-based exchange system, skill matching, exchange management, scheduled learning sessions, email verification, and secure role-based authentication with a Java Spring Boot backend and React frontend.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React",
      "PostgreSQL",
      "JWT",
    ],
    image: skillExchangeImage,
    featured: true,
    githubUrl:
      "https://github.com/gagantirupathi07/Skill-Exchange-Project",
  },
  {
    title: "FixOnWay",
    status: "In Development",
    description:
      "A full-stack roadside assistance system that manages the service lifecycle from emergency request creation and location-based mechanic matching to acceptance, real-time tracking, service completion, and payment processing.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React",
      "PostgreSQL",
      "REST API",
      "Socket.IO",
    ],
    image: fixonwayImage,
    featured: true,
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-24"
    >
      {/* Background Accent */}
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#84A98C]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built."
          description="Selected projects focused on practical software engineering and real-world problem solving."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
