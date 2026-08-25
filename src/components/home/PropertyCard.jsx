import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Property Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Property Tag */}
        {property.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-[#FDCB58] px-3 py-1 text-sm font-semibold uppercase tracking-wide text-[#2B3A67]">
            {property.tag}
          </span>
        )}
      </div>

      {/* Property Information */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-[#2B3A67]">
              {property.title}
            </h3>

            <p className="mt-1.5 text-xl font-bold text-[#2B3A67]">
              {property.price}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="mt-2.5 flex items-center gap-2 text-sm text-slate-500">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4 text-[#2B3A67]"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
            />
            <circle cx="12" cy="10" r="2.5" />
          </svg>

          <span>{property.location}</span>
        </div>

        {/* View Details */}
        <Link
          to={`/properties/${property.id}`}
          className="mt-6 flex w-full items-center justify-center rounded-xl border border-[#2B3A67] px-6 py-3.5 text-sm font-semibold text-[#2B3A67] transition-colors duration-200 hover:bg-[#2B3A67] hover:text-white"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

export default PropertyCard;
