import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizeMap = {
  sm: "max-w-4xl",
  md: "max-w-6xl",
  lg: "max-w-7xl",
  xl: "max-w-screen-2xl",
  full: "max-w-full",
};

export const Container = ({
  children,
  className,
  size = "lg",
}: ContainerProps) => {
  return (
    <div
      className={cn("mx-auto px-4 sm:px-6 lg:px-8", sizeMap[size], className)}
    >
      {children}
    </div>
  );
};
