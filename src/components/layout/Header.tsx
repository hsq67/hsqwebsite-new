import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Instagram, Globe, User, Phone, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "./Container";
// import { BookingWidget } from "../BookingWidget";
import { cn } from "@/lib/utils";
import navIcon from "@/assets/hsq_logo.webp";
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

import { motion } from "framer-motion";
// Primary navigation (desktop)
const navPrimary = [
  { name: "Rooms", href: "/rooms" },
  { name: "Gallery", href: "/gallery" },
  { name: "3D", href: "/3d" },
  { name: "Decor", href: "/decor" },
  { name: "Weather", href: "/weather" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQs", href: "/faqs" },
];

// Social links (shown inside the pill on desktop, in drawer on mobile)
const navSocial = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/hsqtowers/",
    external: true,
    Icon: Instagram,
  },
  {
    label: "Tiktok",
    href: "https://www.tiktok.com/@hsqtowers",
    external: true,
    Icon: FaTiktok,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/hsq.towers/",
    external: true,
    Icon: FaFacebookF,
  },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-20 duration-300",
        isScrolled ? "bg-transparent" : "bg-transparent",
      )}
    >
      <Container className="relative h-full">
        <div className="flex items-center h-full">
          {/* Left: Logo */}
          <Link to="/" className="shrink-0 flex items-center">
            <img
              src={navIcon}
              alt="HSQ Towers"
              className="h-12 w-auto object-contain 2xl:h-20"
            />
          </Link>

          {/* Right: Nav pill (desktop only) */}
          <div className="ml-auto hidden lg:block">
            <div
              className={
                isScrolled
                  ? "rounded-full border border-white/20 bg-black/35  backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                  : "rounded-full border border-white/20 bg-white/10  backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              }
            >
              <nav className="flex items-center gap-1 pl-2 pr-2 py-2 ">
                {navPrimary.map((item) => {
                  const active = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "px-3 py-1.5 rounded-full uppercase tracking-wider text-[12px] 2xl:text-[14px] poppins-semibold transition-colors",
                        active ? "hsq-gold" : "text-white hover:text-primary",
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                {/* Book Now chip */}
                <div className="pl-1">
                  <Link to="/book">
                    <Button
                      size="sm"
                      className="rounded-full h-8 px-4 text-[12px] 2xl:text-[14px] font-semibold text-black bg-gradient-to-t from-[#D7AB4E] to-[#D49136]"
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>

                {/* Divider before socials */}
                <div className="mx-1 h-6 w-px bg-primary" />

                {/* Social icons inside the pill */}
                <div className="flex items-center gap-1 pr-1">
                  {navSocial.map(({ Icon, href, label, external }) =>
                    external ? (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/30 text-white/90 bg-black/30 hover:bg-black/50 hover:text-white hover:border-white/60 transition-colors 2xl:w-10 2xl:h-10"
                      >
                        <Icon className="w-4 h-4 2xl:h-5 2xl:w-5" />
                      </a>
                    ) : (
                      <Link
                        key={label}
                        to={href}
                        aria-label={label}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/30 text-white/90 bg-black/30 hover:bg-black/50 hover:text-white hover:border-white/60 transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                      </Link>
                    ),
                  )}
                </div>
              </nav>
            </div>
          </div>

          {/* Mobile hamburger pinned far right */}
          <div className="ml-auto lg:hidden -mr-2 sm:mr-0">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button size="sm" variant="burger" className="lg:hidden">
                  <Menu color="white" className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="text-2xl text-center font-heading poppins-bold hsq-gold">
                    HSQ Hotels
                  </div>

                  <nav className="flex flex-col  items-center space-y-3 pt-2">
                    {navPrimary.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "text-lg font-medium hsq-transition",
                          location.pathname === item.href
                            ? "hsq-gold"
                            : "text-foreground hover:hsq-gold",
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div>
                    <Link className="flex justify-center" to="/book">
                      <Button
                        size="sm"
                        className="rounded-full h-8 px-4 text-[12px] poppins-semibold text-black bg-gradient-to-t from-[#D7AB4E] to-[#D49136]"
                      >
                        Book Now
                      </Button>
                    </Link>
                  </div>

                  {/* Booking widget in mobile drawer */}
                  {/* <div className="pt-6 border-t">
                    <BookingWidget />
                  </div> */}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
};
