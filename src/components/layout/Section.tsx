import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  background?: "default" | "muted" | "dark" | "gradient-gold" | "gradient-dark";
  padding?: "sm" | "md" | "lg" | "xl";
}

const backgroundMap = {
  default: "",
  muted: "bg-muted",
  dark: "bg-hsq-black text-hsq-white",
  "gradient-gold": "hsq-gradient-gold text-white",
  "gradient-dark": "hsq-gradient-dark text-white"
};

const paddingMap = {
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-16", 
  lg: "py-16 sm:py-24",
  xl: "py-24 sm:py-32"
};

export const Section = ({ 
  children, 
  className, 
  containerSize = "lg",
  background = "default",
  padding = "lg"
}: SectionProps) => {
  return (
    <section className={cn(backgroundMap[background], paddingMap[padding], className)}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};