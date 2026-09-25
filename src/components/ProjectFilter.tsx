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
            className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
              active
                ? "bg-[#A08AC2] text-[#100E14] shadow-[0_0_20px_rgba(160,138,194,0.15)]"
                : "border border-white/[0.08] bg-[#16131C] text-white/45 hover:border-[#A08AC2]/30 hover:bg-[#1C1823] hover:text-[#C4B5D9]"
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