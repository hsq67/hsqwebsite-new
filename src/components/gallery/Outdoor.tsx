export default function Outdoor() {
  const images = [
    "/Gallery/Outdoor/outdoor1.webp",
    "/Gallery/Outdoor/outdoor2.webp",
    "/Gallery/Outdoor/outdoor3.webp",
    "/Gallery/Outdoor/outdoor4.webp",
    "/Gallery/Outdoor/outdoor5.webp",
    "/Gallery/Outdoor/outdoor6.webp",
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <div
          key={i}
          className=" overflow-hidden shadow-lg ease-out duration-500 hover:scale-105"
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
