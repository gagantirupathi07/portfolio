import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Profiles & Achievements", id: "profiles" },
  { name: "Projects", id: "projects" },
  { name: "Journey", id: "journey" },
  { name: "Contact", id: "contact" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }

    setIsOpen(false)
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#A08AC2]/10 bg-[#1B1724]/95 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold tracking-tight text-white transition-colors hover:text-[#C4B5D9]"
        >
          TIRUPATHI GAGAN<span className="text-[#A08AC2]">.</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-sm text-white/60 transition-colors duration-300 hover:text-[#A08AC2]"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white/70 transition-colors hover:text-[#A08AC2] md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-[#A08AC2]/10 bg-[#1B1724]/98 px-6 py-6 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-sm text-white/60 transition-colors duration-300 hover:text-[#A08AC2]"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar