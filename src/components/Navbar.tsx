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
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#A5B5A7]/60 bg-[#CAD2C5]/95 shadow-sm backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold tracking-tight text-[#26352B] transition-colors duration-300 hover:text-[#527A5B]"
        >
          TIRUPATHI GAGAN<span className="text-[#527A5B]">.</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-sm font-medium text-[#4D5B50] transition-colors duration-300 hover:text-[#527A5B] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[#527A5B] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-[#A5B5A7]/70 bg-[#E8EDE7] p-2 text-[#26352B] transition-all duration-300 hover:border-[#84A98C] hover:bg-[#84A98C] hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-[#A5B5A7]/60 bg-[#CAD2C5] px-6 py-6 shadow-lg backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="rounded-xl px-4 py-3 text-left text-sm font-medium text-[#4D5B50] transition-all duration-300 hover:bg-[#E8EDE7] hover:text-[#527A5B]"
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
