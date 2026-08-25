function PropertyVideo({ property }) {
  const videos = property.videos || [];

  if (!videos.length) {
    return null;
  }

  return (
    <section className="mt-16">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2B3A67]">
          Virtual Tour
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
          Explore the Property
        </h2>
      </div>

      <div className="overflow-hidden rounded-3xl bg-[#F3F5F9]">
        <video
          src={videos[0]}
          controls
          playsInline
          preload="metadata"
          className="h-auto max-h-175 w-full object-contain"
        />
      </div>
    </section>
  );
}

export default PropertyVideo;