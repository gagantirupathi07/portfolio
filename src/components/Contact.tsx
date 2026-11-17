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

    const form = event.currentTarget
    const formData = new FormData(form)

    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    }

    try {
      await submitContactForm(data)

      setSubmitted(true)
      form.reset()
    } catch (err) {
      console.error("Contact form error:", err)

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses =
    "w-full rounded-2xl border border-[#A5B5A7]/60 bg-[#F5F7F3] px-4 py-3.5 text-sm text-[#26352B] outline-none transition-all duration-300 placeholder:text-[#78877A]/70 focus:border-[#84A98C] focus:bg-white focus:ring-2 focus:ring-[#84A98C]/15 disabled:cursor-not-allowed disabled:opacity-50"

  const labelClasses =
    "mb-2 block text-sm font-medium text-[#26352B]"

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

          {/* Contact Information */}
          <div className="space-y-4">

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group block rounded-3xl border border-[#A5B5A7]/60 bg-[#E8EDE7] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#84A98C] hover:bg-white hover:shadow-lg hover:shadow-[#84A98C]/15"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#84A98C]/40 bg-[#84A98C]/15 text-[#527A5B] transition-all duration-300 group-hover:bg-[#84A98C]/25">
                <Mail size={19} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#26352B]">
                Email
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#4D5B50]">
                Available for opportunities,
                collaborations, and technical
                discussions.
              </p>

              <p className="mt-4 break-all text-sm font-medium text-[#527A5B] transition-colors group-hover:text-[#6B9474]">
                {CONTACT_EMAIL}
              </p>
            </a>

            <div className="rounded-3xl border border-[#A5B5A7]/60 bg-[#E8EDE7] p-7 shadow-sm transition-all duration-300 hover:border-[#84A98C]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#84A98C]/40 bg-[#84A98C]/15 text-[#527A5B]">
                <MapPin size={19} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#26352B]">
                Location
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#4D5B50]">
                Andhra Pradesh, India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-[#A5B5A7]/60 bg-[#E8EDE7] p-7 shadow-sm sm:p-9"
          >
            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="name"
                  className={labelClasses}
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
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={labelClasses}
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
                  className={inputClasses}
                />
              </div>

            </div>

            <div className="mt-6">
              <label
                htmlFor="subject"
                className={labelClasses}
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
                className={inputClasses}
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className={labelClasses}
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
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#527A5B] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#527A5B]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6B9474] hover:shadow-lg hover:shadow-[#527A5B]/25 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
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

            {/* Success Message */}
            {submitted && (
              <p className="mt-4 flex items-center gap-2 text-sm font-medium text-[#527A5B]">
                <CheckCircle2 size={16} />
                Message sent successfully. I'll get
                back to you soon.
              </p>
            )}

            {/* Error Message */}
            {error && (
              <p className="mt-4 text-sm font-medium text-red-700">
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
