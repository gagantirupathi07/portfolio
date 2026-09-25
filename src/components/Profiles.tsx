import SectionHeading from "./SectionHeading.tsx"
import ProfileCard from "./ProfileCard.tsx"
import LeetCodeCard from "./LeetCodeCard.tsx"

const Profiles = () => {
  return (
    <section
      id="profiles"
      className="px-6 py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Profiles & Achievements"
          title="Beyond projects."
          description="A snapshot of my academic journey and problem-solving progress."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <ProfileCard />
          <LeetCodeCard />
        </div>
      </div>
    </section>
  )
}

export default Profiles