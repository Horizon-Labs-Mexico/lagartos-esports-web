import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import sponsorBanner from "@/assets/sponsor-banner.png";
import heroCardMerch from "@/assets/hero-card-merch.jpg";
import heroCardTeam from "@/assets/hero-card-team.png";

interface HeroCardProps {
  headline: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

const HeroCard = ({ headline, subtitle, ctaText, ctaLink, backgroundImage }: HeroCardProps) => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-carbon-800">
      {/* Background image */}
      <img 
        src={backgroundImage} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 md:p-10 z-10 max-w-2xl">
        <h3 className="font-monument text-2xl md:text-3xl lg:text-4xl text-foreground uppercase tracking-wide mb-3">
          {headline}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base font-normal mb-6">
          {subtitle}
        </p>
        <Link to={ctaLink}>
          <Button 
            className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-6 py-2 rounded-md"
          >
            {ctaText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

const NavigationCards = () => {
  const cards: HeroCardProps[] = [
    {
      headline: "Official Merch 2026",
      subtitle: "Represent your team with exclusive gear designed for champions.",
      ctaText: "Shop Now",
      ctaLink: "/shop",
      backgroundImage: heroCardMerch
    },
    {
      headline: "Join the Elite",
      subtitle: "Discover our competitive roster and become part of the legacy.",
      ctaText: "Learn More",
      ctaLink: "/teams",
      backgroundImage: heroCardTeam
    }
  ];

  return (
    <div className="container mx-auto px-6 md:px-8 py-12">
      {/* Sponsor Banner */}
      <div className="mb-12">
        <Link to="/xbox-game-pass">
          <img 
            src={sponsorBanner} 
            alt="Sponsors" 
            className="w-full rounded-lg shadow-lg cursor-pointer"
          />
        </Link>
      </div>

      {/* Hero Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-[1500px] mx-auto">
        <div className="md:col-span-3">
          <HeroCard {...cards[0]} />
        </div>
        <div className="md:col-span-2">
          <HeroCard {...cards[1]} />
        </div>
      </div>
    </div>
  );
};

export default NavigationCards;
