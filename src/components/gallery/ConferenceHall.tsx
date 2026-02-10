export default function ConferenceHall() {
  const images = [
    "src/assets/Gallary/v1.svg",
    "src/assets/Gallary/v2.svg",
    "src/assets/Gallary/v3.svg",
    "src/assets/Gallary/v4.svg",
    "src/assets/Gallary/v4.svg",
    "src/assets/Gallary/v4.svg",
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <div
          key={i}
          className="rounded-md overflow-hidden shadow-lg ease-out duration-500 hover:scale-105"
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
