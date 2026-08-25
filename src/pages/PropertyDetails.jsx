import PropertyGallery from "../components/property/PropertyGallery";
import { Link, useParams } from "react-router-dom";
import { featuredProperties } from "../data/property";
import PropertyDetailsInfo from "../components/property/PropertyDetailsInfo";

import PropertyVideo from "../components/property/PropertyVideo";

function PropertyDetails() {
  const { id } = useParams();

  const property = featuredProperties.find((item) => item.id === Number(id));

  if (!property) {
    return (
      <main className="min-h-screen bg-white">
        <section className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <Link
              to="/#properties"
              className="inline-flex items-center text-sm font-medium text-[#2B3A67] transition-colors hover:text-[#202D52]"
            >
              ← Back to Properties
            </Link>

            <div className="mt-12">
              <h1 className="text-4xl font-bold tracking-tight text-[#0F172A]">
                Property Not Found
              </h1>

              <p className="mt-4 text-base text-slate-500">
                The property you're looking for could not be found.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Back Button */}
          <Link
            to="/#properties"
            className="inline-flex items-center text-sm font-medium text-[#2B3A67] transition-colors hover:text-[#202D52]"
          >
            ← Back to Properties
          </Link>

          {/* Property Header */}
          <div className="mt-8">
            {/* Property Tag */}
            <span className="inline-flex items-center rounded-full bg-[#FFF4D6] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#2B3A67]">
              {property.tag}
            </span>

            {/* Property Title */}
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
              {property.title}
            </h1>

            {/* Price + Location */}
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
              <p className="text-2xl font-bold text-[#2B3A67] sm:text-3xl">
                {property.price}
              </p>

              <div className="hidden h-5 w-px bg-slate-200 sm:block" />

              <p className="text-base text-slate-500 sm:text-lg">
                {property.location}
              </p>
            </div>
          </div>

          {/* Main Property Image */}
          <div className="mt-10">
            <PropertyGallery property={property} />
            <PropertyDetailsInfo property={property} />
            <PropertyVideo property={property} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default PropertyDetails;
