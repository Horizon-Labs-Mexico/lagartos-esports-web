import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import xboxHero from "@/assets/xbox-gamepass-hero.png";
import afterlifeLogo from "@/assets/afterlife-logo.png";

const XboxGamePass = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex items-center gap-6 mb-3">
              <img 
                src={afterlifeLogo} 
                alt="Afterlife" 
                className="h-12 md:h-16"
              />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-foreground font-orbitron mb-2">
              {t("xbox.title")}
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div className="space-y-4">
              <div className="h-1 w-16 bg-primary"></div>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                {t("xbox.description")}
              </p>

              <Button 
                size="default"
                className="bg-background text-foreground border-2 border-foreground hover:bg-foreground hover:text-background font-bold px-6"
              >
                {t("xbox.joinButton")}
              </Button>

              <p className="text-xs text-muted-foreground italic">
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
          <div className="mt-12 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground font-orbitron mb-4">
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
