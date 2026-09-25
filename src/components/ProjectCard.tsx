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

        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1823] via-transparent to-transparent" />

        {project.status && (
          <span className="absolute left-5 top-5 rounded-full border border-[#A08AC2]/20 bg-[#100E14]/80 px-3 py-1 text-xs font-medium text-[#C4B5D9] backdrop-blur-md">
            {project.status}
          </span>
        )}

        {project.featured && (
          <span className="absolute right-5 top-5 rounded-full border border-[#A08AC2]/20 bg-[#100E14]/80 px-3 py-1 text-xs font-medium text-[#C4B5D9] backdrop-blur-md">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold text-white">
            {project.title}
          </h3>

          <ArrowUpRight
            size={20}
            className="shrink-0 text-[#A08AC2] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </div>

        <p className="mt-4 text-sm leading-7 text-white/50">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[#A08AC2]/15 bg-[#A08AC2]/[0.04] px-3 py-1.5 text-xs text-[#C4B5D9]"
            >
              {technology}
            </span>
          ))}
        </div>

        {project.githubUrl && (
          <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
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
        className="group block overflow-hidden rounded-3xl border border-white/[0.06] bg-[#1C1823] transition-all duration-500 hover:-translate-y-1 hover:border-[#A08AC2]/25 hover:bg-[#211C29] hover:shadow-[0_20px_50px_rgba(160,138,194,0.07)]"
      >
        {cardContent}
      </a>
    )
  }

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/[0.06] bg-[#1C1823] transition-all duration-500 hover:-translate-y-1 hover:border-[#A08AC2]/25 hover:bg-[#211C29] hover:shadow-[0_20px_50px_rgba(160,138,194,0.07)]">
      {cardContent}
    </article>
  )
}

export default ProjectCard