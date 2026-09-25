import {
  useState,
  type FormEvent,
} from "react"
import {
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Send,
} from "lucide-react"
import SectionHeading from "./SectionHeading"
import {
  CONTACT_EMAIL,
} from "../config/contact"
import {
  submitContactForm,
} from "../services/contact"

const Contact = () => {
  const [isSubmitting, setIsSubmitting] =
    useState(false)

  const [submitted, setSubmitted] =
    useState(false)

  const [error, setError] =
    useState("")

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    setIsSubmitting(true)
    setSubmitted(false)
    setError("")

    const form =
      event.currentTarget

    const formData = new FormData(form)

    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(
        formData.get("subject") || "",
      ),
      message: String(
        formData.get("message") || "",
      ),
    }

    try {
      await submitContactForm(data)

      setSubmitted(true)
      form.reset()
    } catch (err) {
      console.error(
        "Contact form error:",
        err,
      )

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="px-6 py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something."
          description="Have an idea, opportunity, or simply want to connect? Send me a message."
        />

        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group block rounded-3xl border border-white/[0.08] bg-[#1C1823] p-7 transition-all duration-300 hover:border-[#A08AC2]/25 hover:bg-[#211C29]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#A08AC2]/20 bg-[#A08AC2]/[0.05] text-[#A08AC2] transition-colors group-hover:bg-[#A08AC2]/10">
                <Mail size={19} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                Email
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#77717D]">
                Available for opportunities,
                collaborations, and technical
                discussions.
              </p>

              <p className="mt-4 text-sm text-[#A08AC2] transition-colors group-hover:text-[#C4B5D9]">
                {CONTACT_EMAIL}
              </p>
            </a>

            <div className="rounded-3xl border border-white/[0.08] bg-[#1C1823] p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#A08AC2]/20 bg-[#A08AC2]/[0.05] text-[#A08AC2]">
                <MapPin size={19} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                Location
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#77717D]">
                Andhra Pradesh, India
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/[0.08] bg-[#1C1823] p-7 sm:p-9"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-white/50"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-[#100E14]/70 px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#A08AC2]/40 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-white/50"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={isSubmitting}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-[#100E14]/70 px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#A08AC2]/40 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm text-white/50"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                disabled={isSubmitting}
                placeholder="What would you like to discuss?"
                className="w-full rounded-2xl border border-white/10 bg-[#100E14]/70 px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#A08AC2]/40 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-white/50"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                disabled={isSubmitting}
                rows={6}
                placeholder="Write your message..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-[#100E14]/70 px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#A08AC2]/40 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#A08AC2] px-6 py-3 text-sm font-medium text-[#100E14] transition-all duration-300 hover:bg-[#B59DD0] hover:shadow-[0_0_25px_rgba(160,138,194,0.2)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  Sending
                  <Loader2
                    size={16}
                    className="ml-2 animate-spin"
                  />
                </>
              ) : submitted ? (
                <>
                  Sent
                  <CheckCircle2
                    size={16}
                    className="ml-2"
                  />
                </>
              ) : (
                <>
                  Send Message
                  <Send
                    size={16}
                    className="ml-2"
                  />
                </>
              )}
            </button>

            {submitted && (
              <p className="mt-4 flex items-center gap-2 text-sm text-[#A08AC2]">
                <CheckCircle2 size={16} />
                Message sent successfully. I'll get
                back to you soon.
              </p>
            )}

            {error && (
              <p className="mt-4 text-sm text-red-300">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact