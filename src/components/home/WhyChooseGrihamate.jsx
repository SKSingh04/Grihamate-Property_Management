const features = [
  {
    title: "Wide Property Selection",
    description:
      "Explore a range of property options suited to different needs, preferences, and budgets.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6M7 9h.01M17 9h.01"
        />
      </svg>
    ),
  },
  {
    title: "Trusted & Transparent",
    description:
      "Clear information and straightforward communication to help you make informed property decisions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9 12 2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Expert Assistance",
    description:
      "Get guidance throughout your property journey so you can approach each decision with confidence.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"
        />
        <circle cx="9.5" cy="7" r="4" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 11a4 4 0 1 0 0-8"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21v-2a4 4 0 0 0-3-3.87"
        />
      </svg>
    ),
  },
  {
    title: "Dedicated Support",
    description:
      "A responsive approach designed to make your property experience smoother from start to finish.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h8M8 14h5"
        />
      </svg>
    ),
  },
];

function WhyChooseGrihamate() {
  return (
    <section
      id="why-grihamate"
      className="bg-slate-50 px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2B3A67]">
            Why Grihamate
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            Why Choose Grihamate
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            A reliable partner to help make your real estate journey
            simpler, clearer, and more confident.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FDCB58]/20 text-[#2B3A67]">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-lg font-semibold text-[#2B3A67]">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseGrihamate;