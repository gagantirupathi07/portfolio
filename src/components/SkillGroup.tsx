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
    <div className="group rounded-3xl border border-[#A5B5A7]/60 bg-[#E8EDE7] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#84A98C] hover:shadow-[0_15px_40px_rgba(82,122,91,0.12)]">

      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-[#527A5B] shadow-[0_0_10px_rgba(82,122,91,0.35)]" />

        <h3 className="text-xl font-semibold text-[#26352B]">
          {title}
        </h3>
      </div>

      <p className="mt-3 text-sm leading-6 text-[#4D5B50]">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-[#A5B5A7]/60 bg-[#F5F7F3] px-3 py-1.5 text-xs font-medium text-[#4D5B50] transition-all duration-300 hover:border-[#84A98C] hover:bg-[#84A98C]/15 hover:text-[#26352B]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillGroup
