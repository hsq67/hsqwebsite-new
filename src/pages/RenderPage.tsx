import { Maximize } from "lucide-react";
export default function RenderPage() {
  function goFullscreen() {
    const iframe = document.getElementById("kuula-frame");
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    }
    // else if (iframe.webkitRequestFullscreen) {
    //   // Safari/Chrome fallback
    //   iframe.webkitRequestFullscreen();
    // } else if (iframe.msRequestFullscreen) {
    //   iframe.msRequestFullscreen();
    // }
  }

  return (
    <div className="w-full h-screen">
      <button
        onClick={goFullscreen}
        className="absolute top-4 right-2 z-50 bg-black text-white px-1 py-1 rounded"
      >
        <Maximize color="white" />
      </button>

      <iframe
        id="kuula-frame"
        src="https://kuula.co/share/collection/7DshP?logo=1&info=0&fs=0&vr=1&zoom=1"
        className="w-full h-full border-0"
        allow="fullscreen; xr-spatial-tracking; gyroscope; accelerometer"
        allowFullScreen
      />
    </div>
  );
}
