import PropertyCard from "./PropertyCard";
import { featuredProperties } from "../../data/property";

function FeaturedProperties() {
  return (
    <section
      id="properties"
      className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FDCB58]">
            Featured Properties
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            Explore Our Featured Properties
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Handpicked listings combining premium locations, quality
            construction, and exceptional value — curated by our
            advisory team.
          </p>
        </div>

        {/* Property Grid */}
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>

        {/* View All Properties */}
        <div className="mt-12 flex justify-center">
          <a
            href="#properties"
            className="inline-flex items-center gap-2 rounded-xl border border-[#2B3A67] px-7 py-3.5 text-sm font-semibold text-[#2B3A67] transition-all duration-200 hover:bg-[#2B3A67] hover:text-white"
          >
            View All Properties
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;