import { Mail } from "lucide-react"
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa"
import {
  CONTACT_EMAIL,
} from "../config/contact"

const SocialLinks = () => {
  const links = [
    {
      name: "GitHub",
      href: "https://github.com/gagantirupathi07",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href:
        "https://www.linkedin.com/in/gagan-tirupathi-4617a03a4/",
      icon: FaLinkedinIn,
    },
    {
      name: "Email",
      href: `mailto:${CONTACT_EMAIL}`,
      icon: Mail,
    },
  ]

  return (
    <div className="flex items-center gap-3">
      {links.map((link) => {
        const Icon = link.icon

        return (
          <a
            key={link.name}
            href={link.href}
            target={
              link.name !== "Email"
                ? "_blank"
                : undefined
            }
            rel={
              link.name !== "Email"
                ? "noreferrer"
                : undefined
            }
            aria-label={link.name}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A08AC2]/15 bg-[#A08AC2]/[0.03] text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-[#A08AC2]/40 hover:bg-[#A08AC2]/[0.08] hover:text-[#A08AC2] hover:shadow-[0_8px_25px_rgba(160,138,194,0.12)]"
          >
            <Icon size={17} />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks