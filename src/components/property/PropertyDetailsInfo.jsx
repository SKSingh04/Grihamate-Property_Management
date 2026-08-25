function PropertyDetailsInfo({ property }) {
  const details = property.details || {};

  const detailItems = [
    {
      label: "Property Type",
      value: details.propertyType || "Details coming soon",
    },
    {
      label: "Configuration",
      value: details.configuration || "Details coming soon",
    },
    {
      label: "Area",
      value: details.area || "Details coming soon",
    },
    {
      label: "Property Status",
      value: details.status || "Details coming soon",
    },
    {
      label: "Possession",
      value: details.possession || "Details coming soon",
    },
    {
      label: "Location",
      value: property.location || "Details coming soon",
    },
  ];

  return (
    <section className="mt-16">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2B3A67]">
          Property Information
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
          Property Details
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {detailItems.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-[#E6EAF1] bg-white p-6 transition-shadow hover:shadow-sm"
          >
            <p className="text-sm font-medium text-[#8FA4C7]">
              {item.label}
            </p>

            <p className="mt-2 text-lg font-semibold text-[#2B3A67]">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl bg-[#F3F5F9] p-8 sm:p-10">
        <h3 className="text-2xl font-bold text-[#0F172A]">
          Property Overview
        </h3>

        <p className="mt-4 max-w-3xl leading-7 text-[#64748B]">
          Detailed information about this property will be updated as more
          details become available. Please contact Grihamate for the latest
          information, pricing, availability, and other property details.
        </p>
      </div>
    </section>
  );
}

export default PropertyDetailsInfo;