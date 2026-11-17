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
      className="relative flex min-h-screen items-center overflow-hidden bg-transparent px-6 pt-20 lg:px-8"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#84A98C]/20 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

        {/* Hero Content */}
        <div className="max-w-4xl">
          <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#84A98C]/50 bg-[#E8EDE7] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#527A5B] shadow-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#84A98C] shadow-[0_0_10px_rgba(132,169,140,0.6)]" />
            Java Backend & Full-Stack Developer
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#26352B] sm:text-7xl lg:text-8xl">
            Hi, I'm
            <br />

            <span className="text-[#527A5B]">
              Tirupathi{" "}
              <span className="text-[#84A98C]">
                Gagan
              </span>
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#4D5B50] sm:text-lg">
            I develop scalable and maintainable applications using Java,
            Spring Boot, React, and PostgreSQL, with a strong foundation in
            Data Structures and Algorithms and a focus on clean architecture
            and practical software solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button onClick={scrollToProjects}>
              View Projects
              <ArrowUpRight className="ml-2" size={17} />
            </Button>

            <Button href="/resume.pdf" variant="secondary">
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-10">
            <SocialLinks />
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">

            {/* Outer Glow */}
            <div className="absolute -inset-10 rounded-full bg-[#84A98C]/20 blur-[60px]" />

            {/* Decorative Rings */}
            <div className="absolute -inset-8 rounded-full border border-[#84A98C]/20" />

            <div className="absolute -inset-5 rounded-full border border-[#84A98C]/40" />

            <div className="absolute -inset-2 rounded-full border border-[#84A98C]/60" />

            {/* Profile Image Container */}
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-[5px] border-[#E8EDE7] bg-[#CAD2C5] shadow-[0_15px_60px_rgba(82,122,91,0.2)] sm:h-80 sm:w-80 lg:h-[400px] lg:w-[400px]">
              <img
                src={profileImage}
                alt="Gagan Tirupathi"
                className="h-full w-full object-cover"
              />

              {/* Profile Status Indicator */}
              <div className="absolute bottom-6 right-6 h-5 w-5 rounded-full border-4 border-[#E8EDE7] bg-[#527A5B] shadow-[0_0_15px_rgba(82,122,91,0.5)]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
