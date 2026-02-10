export default function Rooms() {
  const images = [
    "/Gallery/Rooms/room1.webp",
    "/Gallery/Rooms/room2.webp",
    "/Gallery/Rooms/room3.webp",
    "/Gallery/Rooms/room4.webp",
    "/Gallery/Rooms/room5.webp",
    "/Gallery/Rooms/room6.webp",
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 2xl:gap-10">
      {images.map((src, i) => (
        <div
          key={i}
          className="rounded-m overflow-hidden shadow-lg ease-out duration-500 hover:scale-105"
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
