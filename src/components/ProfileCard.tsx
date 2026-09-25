import { GraduationCap } from "lucide-react"
import collegeLogo from "../assets/college-logo.png"
import collegeBanner from "../assets/college-banner.jpg"

const ProfileCard = () => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-[#1C1823] transition-all duration-300 hover:border-[#A08AC2]/25 hover:bg-[#211C29]">
      {/* College Banner */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={collegeBanner}
          alt="R.V.R. & J.C. College of Engineering"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1823] via-[#1C1823]/20 to-transparent" />
      </div>

      {/* College Content */}
      <div className="relative px-6 pb-6">
        {/* College Logo */}
        <div className="-mt-12 relative mb-5 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border-4 border-[#1C1823] bg-white shadow-[0_0_30px_rgba(160,138,194,0.15)]">
          <img
            src={collegeLogo}
            alt="R.V.R. & J.C. College of Engineering logo"
            className="h-full w-full object-contain p-2"
          />
        </div>

        {/* Heading */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#A08AC2]">
              College
            </p>

            <h3 className="mt-2 text-xl font-semibold leading-tight text-white">
              R.V.R. & J.C. College of Engineering
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/50">
              B.Tech in Computer Science and Engineering — Data Science
            </p>
          </div>

          <div className="hidden shrink-0 rounded-xl border border-[#A08AC2]/15 bg-[#A08AC2]/[0.06] p-3 sm:block">
            <GraduationCap
              size={22}
              className="text-[#A08AC2]"
            />
          </div>
        </div>

        {/* Academic Stats */}
        <div className="mt-7 grid grid-cols-3 gap-4">
          {/* CGPA */}
          <div className="rounded-xl border border-white/[0.06] bg-[#16131C] p-5">
            <p className="text-3xl font-bold text-white">
              9.03
            </p>

            <p className="mt-1 text-xs text-[#77717D]">
              CGPA / 10
            </p>
          </div>

          {/* Year */}
          <div className="rounded-xl border border-white/[0.06] bg-[#16131C] p-5">
            <p className="text-3xl font-bold text-white">
              3rd
            </p>

            <p className="mt-1 text-xs text-[#77717D]">
              Year
            </p>
          </div>

          {/* Graduation Year */}
          <div className="rounded-xl border border-white/[0.06] bg-[#16131C] p-5">
            <p className="text-3xl font-bold text-white">
              2028
            </p>

            <p className="mt-1 text-xs text-[#77717D]">
              Graduation
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProfileCard