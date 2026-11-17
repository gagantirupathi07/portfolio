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
      {/* Eyebrow */}
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-[#527A5B]" />

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#527A5B]">
          {eyebrow}
        </p>
      </div>

      {/* Section Title */}
      <h2 className="text-4xl font-bold tracking-tight text-[#26352B] sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-8 text-[#4D5B50] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
