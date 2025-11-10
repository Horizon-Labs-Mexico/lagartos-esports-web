import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import teamPhoto from "@/assets/team-photo.jpg";

const TeamSection = () => {
  const achievements = [
    { title: "Campeones Regionales", year: "2024" },
    { title: "Finalistas Nacionales", year: "2024" },
    { title: "MVP del Torneo", year: "2023" },
  ];

  return (
    <section className="py-20 bg-carbon-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <span className="text-sm font-medium text-primary">NUESTRO EQUIPO</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              CONOCE A LOS
              <br />
              <span className="text-primary">LAGARTOS</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Un equipo de élite formado por los mejores jugadores de la región. Con años de
              experiencia competitiva y una pasión inquebrantable por el juego, estamos listos
              para conquistar cualquier torneo.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-bold text-foreground">Logros Recientes</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="p-4 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{achievement.title}</span>
                      <span className="text-sm text-primary font-bold">{achievement.year}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-brand-glow font-semibold">
              Ver Roster Completo
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-brand-glow/20 blur-3xl" />
            <img
              src={teamPhoto}
              alt="Equipo Lagartos Esports"
              className="relative rounded-lg w-full h-auto shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
