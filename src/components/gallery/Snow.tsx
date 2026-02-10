export default function Snow() {
  const images = [
    "/Gallery/Snow/snow1.webp",
    "/Gallery/Snow/snow2.webp",
    "/Gallery/Snow/snow3.webp",
    "/Gallery/Snow/snow4.webp",
    "/Gallery/Snow/snow5.webp",
    "/Gallery/Snow/snow6.webp",
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <div
          key={i}
          className="overflow-hidden shadow-lg ease-out duration-500 hover:scale-105"
        >
          <img
            src={src}
            alt={`Restaurant ${i + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
