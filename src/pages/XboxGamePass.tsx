import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import xboxHero from "@/assets/xbox-gamepass-hero.png";

const XboxGamePass = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-8">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                {t("xbox.title")}
              </h1>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="h-1 w-16 bg-primary"></div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("xbox.description")}
              </p>

              <Button 
                size="lg"
                className="bg-background text-foreground border-2 border-foreground hover:bg-foreground hover:text-background font-bold px-8"
              >
                {t("xbox.joinButton")}
              </Button>

              <p className="text-sm text-muted-foreground italic">
                {t("xbox.disclaimer")}
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img 
                src={xboxHero} 
                alt="Xbox Game Pass Games"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              {t("xbox.ctaText")}{" "}
              <span className="text-primary">{t("xbox.ctaHighlight")}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XboxGamePass;
