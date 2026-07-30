import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import teamEafc from "@/assets/team-eafc.jpg";
import teamF1 from "@/assets/team-f1.jpg";
import teamOverwatch from "@/assets/team-overwatch.jpg";
import teamChess from "@/assets/team-chess.jpg";

interface TeamCard {
  id: string;
  name: string;
  image: string;
  taglineEs: string;
  taglineEn: string;
}

const teams: TeamCard[] = [
  { id: "ea-fc", name: "EA FC", image: teamEafc, taglineEs: "Fútbol competitivo", taglineEn: "Competitive football" },
  { id: "f1", name: "F1", image: teamF1, taglineEs: "Velocidad y precisión", taglineEn: "Speed and precision" },
  { id: "overwatch", name: "Overwatch", image: teamOverwatch, taglineEs: "Acción por equipos", taglineEn: "Team-based action" },
  { id: "chess", name: "Chess", image: teamChess, taglineEs: "Estrategia pura", taglineEn: "Pure strategy" },
];

const Teams = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-20 px-6 md:px-8">
        <div className="container mx-auto">
          <header className="text-center mb-12">
            <h1 className="font-monument text-3xl md:text-5xl text-foreground uppercase tracking-wide">
              {t("nav.teams")}
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {language === "es"
                ? "Conoce las divisiones que representan a Lagartos Esports en cada título."
                : "Meet the divisions representing Lagartos Esports across every title."}
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[1400px] mx-auto">
            {teams.map((team) => (
              <Link
                key={team.id}
                to={`/teams/${team.id}`}
                className="group relative block h-[340px] md:h-[440px] rounded-lg overflow-hidden border border-border hover:border-primary transition-colors"
              >
                <img
                  src={team.image}
                  alt={`Equipo Lagartos ${team.name}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-monument text-3xl md:text-5xl text-primary uppercase tracking-wide text-center px-4 drop-shadow-[0_0_25px_hsl(var(--primary)/0.45)]">
                    {team.name}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {language === "es" ? team.taglineEs : team.taglineEn}
                  </span>
                  <span className="text-sm font-medium text-primary">
                    {language === "es" ? "Ver equipo" : "View team"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Teams;
