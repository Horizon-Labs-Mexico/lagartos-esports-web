import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Newspaper, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import sponsorBanner from "@/assets/sponsor-banner.png";

const NavigationCards = () => {
  const { t } = useLanguage();

  const sections = [
    {
      title: t("nav.tournaments"),
      description: t("nav.tournamentsDesc"),
      icon: Trophy,
      color: "from-primary/20 to-primary/5"
    },
    {
      title: t("nav.news"),
      description: t("nav.newsDesc"),
      icon: Newspaper,
      color: "from-accent/20 to-accent/5"
    },
    {
      title: t("nav.players"),
      description: t("nav.playersDesc"),
      icon: Users,
      color: "from-primary/20 to-primary/5"
    },
    {
      title: t("nav.events"),
      description: t("nav.eventsDesc"),
      icon: Calendar,
      color: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
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

      {/* Navigation Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((section, index) => (
          <Card 
            key={index}
            className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur"
          >
            <CardContent className="p-6">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <section.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {section.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {section.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NavigationCards;
