import { SEO } from "@/components/SEO";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { useDiningData } from "@/hooks/useData";
import restaurantImage from "@/assets/restaurant.jpg";

const Dining = () => {
  const { data: dining } = useDiningData();

  return (
    <>
      <SEO 
        title="Fine Dining & Bar - HSQ Hotels Murree"
        description="Experience culinary excellence at HSQ Hotels with our diverse dining venues, from fine dining to casual café experiences."
      />
      
      <div className="pt-20">
        <Section background="muted" padding="xl">
          <SectionHeader
            eyebrow="Culinary Excellence"
            title="Dining & Bar"
            subtitle={dining?.overview}
          />
        </Section>

        <Section>
          <div className="space-y-12">
            {dining?.venues.map((venue, index) => (
              <div key={venue.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''}`}>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-4">{venue.name}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{venue.hours}</p>
                  <p className="text-lg mb-6">{venue.description}</p>
                </div>
                <div>
                  <img 
                    src={restaurantImage} 
                    alt={venue.name}
                    className="rounded-2xl hsq-shadow-luxury w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
};

export default Dining;