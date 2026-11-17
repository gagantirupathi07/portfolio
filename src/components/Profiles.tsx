import SectionHeading from "./SectionHeading.tsx"
import ProfileCard from "./ProfileCard.tsx"
import LeetCodeCard from "./LeetCodeCard.tsx"

const Profiles = () => {
  return (
    <section
      id="profiles"
      className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-24"
    >
      {/* Subtle Background Accent */}
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#84A98C]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Profiles & Achievements"
          title="Beyond projects."
          description="A snapshot of my academic journey and problem-solving progress."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <ProfileCard />
          <LeetCodeCard />
        </div>
      </div>
    </section>
  )
}

export default Profiles
