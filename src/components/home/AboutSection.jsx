import aboutImage from "../../assets/images/about-us-image.jpg";
function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2B3A67]">
            About Us
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            About <span className="text-[#2B3A67]">Grihamate</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Your complete property partner for Rent Management, Sale &
            Resale.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src = {aboutImage}
              alt="Grihamate property"
              className="h-full min-h-95 w-full object-cover sm:min-h-115"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Your Trusted Property Partner
            </h3>

            <div className="mt-7 space-y-5 text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              <p>
                Grihamate is your complete property partner for{" "}
                <strong className="font-semibold text-[#0F172A]">
                  Rent Management, Sale & Resale.
                </strong>
              </p>

              <p>
                We partner with property owners and take care of the complete
                rental journey — from tenant search and verification to legal
                documentation, rent coordination, maintenance, tenant exit,
                and re-vacancy.
              </p>

              <p>
                Once you partner with Grihamate, you don't have to manage the
                daily hassle — we handle it for you.
              </p>
            </div>

            {/* Highlight */}
            <div className="mt-8 rounded-2xl bg-[#EEF4FF] p-6">
              <h4 className="text-xl font-bold text-[#0F172A]">
                You own it. We manage it.
              </h4>

              <p className="mt-1 text-base text-slate-500">
                Hassle-free property management for property owners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;