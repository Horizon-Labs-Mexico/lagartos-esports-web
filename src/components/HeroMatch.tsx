import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroMatch = () => {
  const [time, setTime] = useState({
    days: 13,
    hours: 15,
    minutes: 2,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">Próximo Torneo</span>
          </div>

          <h2 className="text-sm font-medium text-muted-foreground mb-2">
            Counter-Strike 2 Championship 2025
          </h2>

          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-8 leading-tight">
            LAGARTOS
            <br />
            <span className="text-primary">VS</span>
            <br />
            DRAGONES
          </h1>

          {/* Countdown Timer */}
          <div className="flex gap-4 mb-8">
            {[
              { value: time.days, label: "días" },
              { value: time.hours, label: "horas" },
              { value: time.minutes, label: "mins" },
              { value: time.seconds, label: "segs" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg w-20 h-20 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground mt-2">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary text-primary-foreground hover:bg-brand-glow font-semibold">
              Ver Stream en Vivo
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Información del Torneo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMatch;
