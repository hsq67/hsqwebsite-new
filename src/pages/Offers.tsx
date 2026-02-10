// import { SEO } from "@/components/SEO";
// import { Section } from "@/components/layout/Section";
// import { SectionHeader } from "@/components/layout/SectionHeader";
// import { OfferCard } from "@/components/cards/OfferCard";
// import { useOffersData } from "@/hooks/useData";

// const Offers = () => {
//   const { data: offers } = useOffersData();

//   return (
//     <>
//       <SEO
//         title="Special Offers & Packages - HSQ Hotels Murree"
//         description="Discover exclusive offers and packages at HSQ Hotels, designed to enhance your luxury mountain experience in Murree."
//       />

//       <div className="pt-20">
//         <Section background="muted" padding="xl">
//           <SectionHeader
//             eyebrow="Special Offers"
//             title="Exclusive Packages"
//             subtitle="Take advantage of our carefully curated packages and special offers designed to make your stay even more memorable."
//           />
//         </Section>

//         <Section>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {offers?.map((offer) => (
//               <OfferCard key={offer.id} offer={offer} />
//             ))}
//           </div>
//         </Section>
//       </div>
//     </>
//   );
// };

// export default Offers;
