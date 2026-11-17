import { GraduationCap } from "lucide-react"
import collegeLogo from "../assets/college-logo.png"
import collegeBanner from "../assets/college-banner.jpg"

const ProfileCard = () => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#A5B5A7]/70 bg-[#E8EDE7] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#84A98C] hover:shadow-xl">

      {/* College Banner */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={collegeBanner}
          alt="R.V.R. & J.C. College of Engineering"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Sage Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8EDE7] via-[#E8EDE7]/20 to-transparent" />
      </div>

      {/* College Content */}
      <div className="relative px-6 pb-6">

        {/* College Logo */}
        <div className="-mt-12 relative mb-5 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border-4 border-[#E8EDE7] bg-white shadow-md">
          <img
            src={collegeLogo}
            alt="R.V.R. & J.C. College of Engineering logo"
            className="h-full w-full object-contain p-2"
          />
        </div>

        {/* Heading */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#527A5B]">
              College
            </p>

            <h3 className="mt-2 text-xl font-semibold leading-tight text-[#26352B]">
              R.V.R. & J.C. College of Engineering
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#4D5B50]">
              B.Tech in Computer Science and Engineering — Data Science
            </p>
          </div>

          <div className="hidden shrink-0 rounded-xl border border-[#A5B5A7]/70 bg-[#84A98C]/15 p-3 sm:block">
            <GraduationCap
              size={22}
              className="text-[#527A5B]"
            />
          </div>
        </div>

        {/* Academic Stats */}
        <div className="mt-7 grid grid-cols-3 gap-3 sm:gap-4">

          {/* CGPA */}
          <div className="rounded-xl border border-[#A5B5A7]/60 bg-[#F5F7F3] p-4 transition-all duration-300 hover:border-[#84A98C] sm:p-5">
            <p className="text-2xl font-bold text-[#527A5B] sm:text-3xl">
              9.03
            </p>

            <p className="mt-1 text-xs text-[#4D5B50]">
              CGPA / 10
            </p>
          </div>

          {/* Year */}
          <div className="rounded-xl border border-[#A5B5A7]/60 bg-[#F5F7F3] p-4 transition-all duration-300 hover:border-[#84A98C] sm:p-5">
            <p className="text-2xl font-bold text-[#527A5B] sm:text-3xl">
              3rd
            </p>

            <p className="mt-1 text-xs text-[#4D5B50]">
              Year
            </p>
          </div>

          {/* Graduation Year */}
          <div className="rounded-xl border border-[#A5B5A7]/60 bg-[#F5F7F3] p-4 transition-all duration-300 hover:border-[#84A98C] sm:p-5">
            <p className="text-2xl font-bold text-[#527A5B] sm:text-3xl">
              2028
            </p>

            <p className="mt-1 text-xs text-[#4D5B50]">
              Graduation
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProfileCard
