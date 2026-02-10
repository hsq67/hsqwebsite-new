export default function Decor() {
  const images = [
    "/Gallery/Decor/decor1.webp",
    "/Gallery/Decor/decor2.webp",
    "/Gallery/Decor/decor3.webp",
    "/Gallery/Decor/decor4.webp",
    "/Gallery/Decor/decor5.webp",
    "/Gallery/Decor/decor6.webp",
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
