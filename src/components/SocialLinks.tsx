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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A5B5A7]/60 bg-[#E8EDE7] text-[#4D5B50] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#84A98C] hover:bg-[#527A5B] hover:text-white hover:shadow-[0_8px_25px_rgba(82,122,91,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84A98C] focus-visible:ring-offset-2"
          >
            <Icon size={17} />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
