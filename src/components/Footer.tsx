import {
  ArrowUp,
  Mail,
} from "lucide-react"
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa"
import {
  CONTACT_EMAIL,
} from "../config/contact"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const socialClasses =
    "flex h-10 w-10 items-center justify-center rounded-full border border-[#A5B5A7]/60 bg-[#E8EDE7] text-[#4D5B50] transition-all duration-300 hover:-translate-y-1 hover:border-[#84A98C] hover:bg-[#84A98C] hover:text-white hover:shadow-md hover:shadow-[#84A98C]/20"

  return (
    <footer className="border-t border-[#A5B5A7]/50 bg-[#CAD2C5] px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        {/* Brand Information */}
        <div>
          <p className="text-lg font-bold tracking-wide text-[#26352B]">
            TIRUPATHI GAGAN
            <span className="text-[#527A5B]">.</span>
          </p>

          <p className="mt-2 text-sm text-[#4D5B50]">
            Java Backend & Full-Stack Developer
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-2 block text-sm text-[#4D5B50] transition-colors duration-300 hover:text-[#527A5B]"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/gagantirupathi07"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className={socialClasses}
          >
            <FaGithub size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/gagan-tirupathi-4617a03a4/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={socialClasses}
          >
            <FaLinkedinIn size={17} />
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label="Email"
            className={socialClasses}
          >
            <Mail size={17} />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className={socialClasses}
          >
            <ArrowUp size={17} />
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-8 max-w-7xl border-t border-[#A5B5A7]/60 pt-6">
        <p className="text-center text-xs text-[#4D5B50]/75">
          © {new Date().getFullYear()} Gagan Tirupathi.
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
