const items = [
  {
    type: "Mission",
    title: "Our Mission",
    description:
      "Our mission is to simplify property ownership by providing reliable, transparent, and end-to-end property services. We aim to take the everyday hassle out of renting, managing, buying, and selling properties—so owners can earn with peace of mind while Grihamate takes care of the rest.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </svg>
    ),
  },
  {
    type: "Vision",
    title: "Our Vision",
    description:
      "To become the most trusted property partner for owners by transforming the way properties are rented, managed, bought, and sold—making real estate simpler, smarter, and hassle-free for everyone.",
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
          d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"
        />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
  },
];

function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="bg-slate-50 px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2B3A67]">
            Our Purpose
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            Mission &amp; Vision
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            What drives Grihamate and the direction we are working toward.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.type}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FDCB58]/20 text-[#2B3A67] transition-colors duration-300 group-hover:bg-[#FDCB58]">
                {item.icon}
              </div>

              {/* Label */}
              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.25em] text-[#2B3A67]">
                {item.type}
              </p>

              {/* Heading */}
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionVision;