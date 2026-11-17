interface ProjectFilterProps {
  categories: string[]
  activeCategory: string
  onChange: (category: string) => void
}

const ProjectFilter = ({
  categories,
  activeCategory,
  onChange,
}: ProjectFilterProps) => {
  return (
    <div className="mb-10 flex flex-wrap gap-2">
      {categories.map((category) => {
        const active = category === activeCategory

        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            aria-pressed={active}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
              active
                ? "border-[#527A5B] bg-[#527A5B] text-white shadow-md shadow-[#527A5B]/15"
                : "border-[#A5B5A7]/70 bg-[#E8EDE7] text-[#4D5B50] hover:border-[#84A98C] hover:bg-[#84A98C]/15 hover:text-[#26352B]"
            }`}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default ProjectFilter
