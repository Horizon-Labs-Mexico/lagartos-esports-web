import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import jerseyImage from "@/assets/jersey-2026.png";

const JerseyShowcase = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content - Left Side */}
          <div className="order-2 md:order-1">
            <h2 className="font-antonio text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 uppercase tracking-wider">
              Jersey Official de 2026
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Viste como un campeón
            </p>
            
            <Button 
              size="lg"
              className="text-base md:text-lg px-8"
            >
              Compra ahora
            </Button>
          </div>
          
          {/* Jersey Image - Right Side */}
          <div className="order-1 md:order-2 relative">
            <div className="relative">
              <img 
                src={jerseyImage} 
                alt="Jersey Official 2026" 
                className="w-full h-auto object-contain max-h-[500px] md:max-h-[600px]"
              />
              {/* Glow effect behind jersey */}
              <div className="absolute inset-0 -z-10 bg-primary/10 blur-3xl rounded-full scale-75" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JerseyShowcase;