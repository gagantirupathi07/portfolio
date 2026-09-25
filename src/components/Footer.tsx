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

  return (
    <footer className="border-t border-white/[0.08] bg-[#100E14] px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold text-white">
            TIRUPATHI GAGAN
            <span className="text-[#A08AC2]">
              .
            </span>
          </p>

          <p className="mt-2 text-sm text-white/35">
            Java Backend & Full-Stack Developer
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-2 block text-sm text-white/35 transition-colors hover:text-[#A08AC2]"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/gagantirupathi07"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-[#A08AC2]/30 hover:text-[#A08AC2]"
          >
            <FaGithub size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/gagan-tirupathi-4617a03a4/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-[#A08AC2]/30 hover:text-[#A08AC2]"
          >
            <FaLinkedinIn size={17} />
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-[#A08AC2]/30 hover:text-[#A08AC2]"
          >
            <Mail size={17} />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-[#A08AC2]/30 hover:text-[#A08AC2]"
          >
            <ArrowUp size={17} />
          </button>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/[0.08] pt-6">
        <p className="text-center text-xs text-white/25">
          © {new Date().getFullYear()} Gagan Tirupathi.
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer