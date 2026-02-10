// components/LazySection.tsx
import React from "react";
import { useInView } from "react-intersection-observer";

interface LazySectionProps {
  children: React.ReactNode;
  threshold?: number; // percentage of visibility before loading
}

const LazySection: React.FC<LazySectionProps> = ({ children, threshold = 0.2 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <div ref={ref} className="min-h-[200px]">
      {inView ? children : (
        // Placeholder skeleton while not in view
        <div className="animate-pulse h-[200px] bg-gray-200 rounded-xl" />
      )}
    </div>
  );
};

export default LazySection;
