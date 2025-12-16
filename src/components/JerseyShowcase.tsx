import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import jerseyImage from "@/assets/jersey-2026.png";

const JerseyShowcase = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden py-8">
      <div className="container mx-auto px-6 md:px-8">
        <div className="relative w-full">
          <img 
            src={jerseyImage} 
            alt="Jersey Official 2026" 
            className="w-full h-auto object-contain rounded-lg"
          />
          
          {/* Gradient Shadow Overlay at Bottom */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/90 via-background/50 to-transparent rounded-b-lg" />
          
          {/* Content Container */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full px-6 md:px-8 pb-8 md:pb-12">
              <div className="max-w-2xl">
                {/* Title */}
                <h2 className="font-monument text-4xl md:text-6xl lg:text-7xl text-foreground mb-2 uppercase tracking-wider">
                  Jersey Official de 2026
                </h2>
                
                {/* Subtitle */}
                <p className="text-lg md:text-xl text-foreground/80 mb-6">
                  Viste como un campeón
                </p>
                
                {/* Button */}
                <Button 
                  size="lg"
                  className="text-base md:text-lg px-8"
                >
                  Compra ahora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JerseyShowcase;