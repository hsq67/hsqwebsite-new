// import { cn } from "@/lib/utils";
// import { Highlighter } from "@/components/magicui/highlighter";

// interface SectionHeaderProps {
//   eyebrow?: string;
//   title: string;
//   subtitle?: string;
//   alignment?: "left" | "center";
//   className?: string;
// }

// export const SectionHeader = ({
//   eyebrow,
//   title,
//   subtitle,
//   alignment = "center",
//   className
// }: SectionHeaderProps) => {
//   const alignmentClasses = alignment === "center" ? "text-center" : "text-left";

//   return (
//     <div className={cn("mb-12", alignmentClasses, className)}>
//       {eyebrow && (
//         <p className="text-sm font-medium tracking-wider uppercase font-heading mb-4">
//           {eyebrow}
//         </p>
//       )}

//       <h2 className="text-3xl sm:text-4xl lg:text-4xl hsq-gold font-bold mb-6">

//         {title}

//       </h2>
//       {subtitle && (
//         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//           {subtitle}
//         </p>
//       )}
//       <div className="w-24 h-0.5 hsq-gradient-gold mt-8 mx-auto" />
//     </div>
//   );
// };
