import { useState } from "react";

function ContactSection() {
  const [status, setStatus] = useState("idle");
  // idle | sending | success | error

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mppavnwd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FDCB58]">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            Get In Touch
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Have questions about a property or need expert guidance? Our team
            is ready to help.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <p className="max-w-lg text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              Whether you're buying, selling, or just exploring options, we're
              here to provide clarity and confidence at every step.
            </p>

            <div className="mt-10 space-y-7">
              {/* Phone */}
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF4D6] text-[#2B3A67]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4c0 1.1-.9 2-2 2C10.3 21 3 13.7 3 5c0-1.1.9-2 2-2Z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                    Phone
                  </p>

                  <a
                    href="tel:+917011769523"
                    className="mt-1 block text-base font-medium text-[#0F172A] transition-colors hover:text-[#2B3A67]"
                  >
                    +91 7011769523
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF4D6] text-[#2B3A67]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m3 7 9 6 9-6"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                    Email
                  </p>

                  <a
                    href="mailto:info@Grihamate.com"
                    className="mt-1 block text-base font-medium text-[#0F172A] transition-colors hover:text-[#2B3A67]"
                  >
                    grihamate@gmail.com
                  </a>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF4D6] text-[#2B3A67]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                    />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                    Office
                  </p>

                  <p className="mt-1 text-base font-medium text-[#0F172A]">
                    Noida, Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="full-name"
                  className="mb-2 block text-sm font-medium text-[#0F172A]"
                >
                  Full Name
                </label>

                <input
                  id="full-name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#0F172A] outline-none transition-all placeholder:text-slate-400 focus:border-[#2B3A67] focus:bg-white focus:ring-2 focus:ring-[#2B3A67]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#0F172A]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#0F172A] outline-none transition-all placeholder:text-slate-400 focus:border-[#2B3A67] focus:bg-white focus:ring-2 focus:ring-[#2B3A67]/10"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-[#0F172A]"
              >
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+91 XXXXX XXXXX"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#0F172A] outline-none transition-all placeholder:text-slate-400 focus:border-[#2B3A67] focus:bg-white focus:ring-2 focus:ring-[#2B3A67]/10"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[#0F172A]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us what you're looking for..."
                required
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#0F172A] outline-none transition-all placeholder:text-slate-400 focus:border-[#2B3A67] focus:bg-white focus:ring-2 focus:ring-[#2B3A67]/10"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl bg-[#2B3A67] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#202D52] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* Success Message */}
            {status === "success" && (
              <p className="rounded-xl bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
                Message sent successfully! We'll get back to you shortly.
              </p>
            )}

            {/* Error Message */}
            {status === "error" && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-700">
                Something went wrong. Please try again or contact us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;