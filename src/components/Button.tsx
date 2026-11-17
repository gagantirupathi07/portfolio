import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: "primary" | "secondary"
}

const Button = ({
  children,
  onClick,
  href,
  variant = "primary",
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84A98C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#BFC7C5]"

  const variantClasses =
    variant === "primary"
      ? "bg-[#527A5B] text-white shadow-md shadow-[#527A5B]/15 hover:-translate-y-0.5 hover:bg-[#6B9474] hover:shadow-lg hover:shadow-[#527A5B]/25 active:translate-y-0"
      : "border border-[#84A98C]/60 bg-[#E8EDE7] text-[#26352B] hover:-translate-y-0.5 hover:border-[#84A98C] hover:bg-[#84A98C]/15 hover:text-[#26352B] active:translate-y-0"

  const classes = `${baseClasses} ${variantClasses}`

  if (href) {
    return (
      <a
        href={href}
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  )
}

export default Button
