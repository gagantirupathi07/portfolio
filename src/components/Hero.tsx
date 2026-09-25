import { ArrowUpRight } from "lucide-react"
import profileImage from "../assets/gagan.jpg"
import Button from "./Button"
import SocialLinks from "./SocialLinks"

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 lg:px-8"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A08AC2]/[0.07] blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#A08AC2]">
            Java Backend & Full-Stack Developer
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Hi, I'm
            <br />

            <span className="text-[#A08AC2]">
              Tirupathi{" "}
              <span className="text-[#C4B5D9]">
                Gagan
              </span>
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            I develop scalable and maintainable applications using Java,
            Spring Boot, React, and PostgreSQL, with a strong foundation in
            Data Structures and Algorithms and a focus on clean architecture
            and practical software solutions.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button onClick={scrollToProjects}>
              View Projects
              <ArrowUpRight className="ml-2" size={17} />
            </Button>

            <Button href="/resume.pdf" variant="secondary">
              Download Resume
            </Button>
          </div>

          <div className="mt-10">
            <SocialLinks />
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-[#A08AC2]/[0.05] blur-3xl" />

            <div className="absolute -inset-5 rounded-full border border-[#A08AC2]/10" />

            <div className="absolute -inset-3 rounded-full border border-[#A08AC2]/25" />

            <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-[#A08AC2]/50 bg-[#16131C] shadow-[0_0_80px_rgba(160,138,194,0.18)] sm:h-80 sm:w-80 lg:h-[400px] lg:w-[400px]">
              <img
                src={profileImage}
                alt="Gagan Tirupathi"
                className="h-full w-full object-cover"
              />

              {/* Profile status/accent dot */}
              <div  className="absolute bottom-6 right-6 h-5 w-5 rounded-full border-4 border-[#100E14] bg-[#A08AC2] shadow-[0_0_15px_rgba(160,138,194,0.5)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero