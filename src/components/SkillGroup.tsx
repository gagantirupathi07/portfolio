interface SkillGroupProps {
  title: string
  description: string
  skills: string[]
}

const SkillGroup = ({
  title,
  description,
  skills,
}: SkillGroupProps) => {
  return (
    <div className="group rounded-3xl border border-white/[0.08] bg-[#1C1823] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#A08AC2]/30 hover:bg-[#211C29] hover:shadow-[0_15px_40px_rgba(160,138,194,0.06)]">

      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-[#A08AC2] shadow-[0_0_10px_rgba(160,138,194,0.5)]" />

        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>
      </div>

      <p className="mt-3 text-sm leading-6 text-[#77717D]">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-[#A08AC2]/15 bg-[#A08AC2]/[0.035] px-3 py-1.5 text-xs text-[#B8B3BD] transition-all duration-300 hover:border-[#A08AC2]/35 hover:bg-[#A08AC2]/[0.08] hover:text-[#C4B5D9]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillGroup