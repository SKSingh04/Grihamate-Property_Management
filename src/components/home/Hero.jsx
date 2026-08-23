import heroImage from "../../assets/images/hero-image.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Luxury Grihamate property"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#0F172A]/65" />

      {/* Content */}
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="max-w-3xl text-white">

          {/* Trust Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#FDCB58]" />
            <span>India's Trusted Property Partner</span>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Find Your
            <span className="block text-[#FDCB58]">
              Dream Home
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            Buy, Sell &amp; Rent Properties Easily. Explore thousands
            of verified listings across India's premier locations
            with Grihamate.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#properties"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FDCB58] px-7 py-3.5 text-sm font-semibold text-[#2B3A67] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore Now
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-[#FDCB58] hover:bg-white/15 hover:text-[#FDCB58]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;