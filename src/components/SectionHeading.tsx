interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) => {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-[#A08AC2]" />

        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#A08AC2]">
          {eyebrow}
        </p>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading