import { useEffect, useState } from "react";

function PropertyGallery({ property }) {
  const images = property.gallery || [];
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
  if (selectedIndex === null) return;

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setSelectedIndex(null);
    }

    if (event.key === "ArrowLeft") {
      setSelectedIndex((current) =>
        current === 0 ? images.length - 1 : current - 1
      );
    }

    if (event.key === "ArrowRight") {
      setSelectedIndex((current) =>
        current === images.length - 1 ? 0 : current + 1
      );
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedIndex, images.length]);

  if (!images.length) {
    return (
      <div className="flex min-h-125 items-center justify-center rounded-3xl bg-[#F3F5F9]">
        <p className="text-[#8FA4C7]">
          Property images coming soon
        </p>
      </div>
    );
  }

  const mainImage = images[0];
  const secondaryImages = images.slice(1, 5);
  const remainingCount = images.length - 5;

  return (
    <section>
      {/* Gallery Grid */}
      <div className="grid h-140 grid-cols-2 gap-3 overflow-hidden rounded-3xl lg:grid-cols-4">

        {/* Main Image */}
        <button
          type="button"
          onClick={() => setSelectedIndex(0)}
          className="relative col-span-2 row-span-2 cursor-pointer overflow-hidden bg-[#F3F5F9]"
        >
          <img
            src={mainImage}
            alt={`${property.title} - Main`}
            className="h-full w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
          />
        </button>

        {/* Secondary Images */}
        {secondaryImages.map((image, index) => {
          const actualIndex = index + 1;
          const isLastImage = index === secondaryImages.length - 1;
          const showRemaining = isLastImage && remainingCount > 0;

          return (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedIndex(actualIndex)}
              className="relative cursor-pointer overflow-hidden bg-[#F3F5F9]"
            >
              <img
                src={image}
                alt={`${property.title} - ${actualIndex + 1}`}
                className="h-full w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
              />

              {showRemaining && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#2B3A67]">
                    +{remainingCount} More Photos
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
            aria-label="Close gallery"
          >
            ×
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedIndex(
                selectedIndex === 0
                  ? images.length - 1
                  : selectedIndex - 1
              );
            }}
            className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition-colors hover:bg-white/20"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={images[selectedIndex]}
            alt={`${property.title} - ${selectedIndex + 1}`}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          {/* Next */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedIndex(
                selectedIndex === images.length - 1
                  ? 0
                  : selectedIndex + 1
              );
            }}
            className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition-colors hover:bg-white/20"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}

export default PropertyGallery;