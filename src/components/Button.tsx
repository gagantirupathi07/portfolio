import type {
  ReactNode,
} from "react"

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
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300"

  const variantClasses =
    variant === "primary"
      ? "bg-[#A08AC2] text-[#100E14] hover:bg-[#B59DD0] hover:shadow-[0_0_30px_rgba(160,138,194,0.25)]"
      : "border border-[#A08AC2]/25 bg-[#A08AC2]/[0.04] text-white hover:border-[#A08AC2]/50 hover:bg-[#A08AC2]/[0.08] hover:text-[#C4B5D9]"

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