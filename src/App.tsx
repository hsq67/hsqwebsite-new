import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { usePageTracking } from "@/hooks/usePageTracking";
// Pages
import Index from "@/pages/Index";
const Rooms = lazy(() => import("./pages/Rooms"));
const Gallery = lazy(() => import("./pages/Gallery"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const TermsAndCondition = lazy(() => import("./pages/TermsAndCondition"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Decor = lazy(() => import("./pages/Decor"));
const Weather = lazy(() => import("./pages/Weather"));
const Review = lazy(() => import("./pages/Review"));
const Faqs = lazy(() => import("./pages/Faqs"));
const Booking = lazy(() => import("./pages/Booking"));
const Renderpage = lazy(() => import("@/pages/RenderPage"));
// Loading component
import FrontLogo from "@/components/layout/FrontLogo";
import BookingFormpage from "./pages/BookingFormpage";
import Aminities from "./pages/Aminities";
import Restaurent from "@/pages/Restaurent";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <InnerApp />
    </BrowserRouter>
  </QueryClientProvider>
);

const InnerApp = () => {
  usePageTracking();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Suspense fallback={<FrontLogo />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsAndCondition />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/decor" element={<Decor />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/aminities" element={<Aminities />} />
          <Route path="/logo" element={<FrontLogo />} />
          <Route path="/bookingform" element={<BookingFormpage />} />
          <Route path="/3d" element={<Renderpage />} />
          <Route path="/restaurent" element={<Restaurent />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
