import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"

export interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  featured?: boolean
  status?: string
  githubUrl?: string
  liveUrl?: string
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardContent = (
    <>
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8EDE7] via-transparent to-transparent" />

        {/* Project Status */}
        {project.status && (
          <span className="absolute left-5 top-5 rounded-full border border-[#A5B5A7] bg-[#E8EDE7]/95 px-3 py-1 text-xs font-semibold text-[#527A5B] shadow-sm backdrop-blur-md">
            {project.status}
          </span>
        )}

        {/* Featured Badge */}
        {project.featured && (
          <span className="absolute right-5 top-5 rounded-full border border-[#A5B5A7] bg-[#E8EDE7]/95 px-3 py-1 text-xs font-semibold text-[#527A5B] shadow-sm backdrop-blur-md">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold text-[#26352B]">
            {project.title}
          </h3>

          <ArrowUpRight
            size={20}
            className="shrink-0 text-[#527A5B] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </div>

        <p className="mt-4 text-sm leading-7 text-[#4D5B50]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[#A5B5A7]/70 bg-[#F5F7F3] px-3 py-1.5 text-xs font-medium text-[#527A5B] transition-colors duration-300 group-hover:border-[#84A98C]"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* GitHub Link Indicator */}
        {project.githubUrl && (
          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#527A5B]">
            <FaGithub size={16} />
            <span>View on GitHub</span>
          </div>
        )}
      </div>
    </>
  )

  if (project.githubUrl) {
    return (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="group block overflow-hidden rounded-3xl border border-[#A5B5A7]/70 bg-[#E8EDE7] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#84A98C] hover:shadow-xl"
      >
        {cardContent}
      </a>
    )
  }

  return (
    <article className="group overflow-hidden rounded-3xl border border-[#A5B5A7]/70 bg-[#E8EDE7] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#84A98C] hover:shadow-xl">
      {cardContent}
    </article>
  )
}

export default ProjectCard
