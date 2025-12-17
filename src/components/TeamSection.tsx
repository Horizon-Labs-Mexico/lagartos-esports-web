import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import teamPhoto from "@/assets/team-photo.jpg";

const TeamSection = () => {
  const { t } = useLanguage();
  
  const achievements = [
    { title: t("team.achievement1"), year: "2024" },
    { title: t("team.achievement2"), year: "2024" },
    { title: t("team.achievement3"), year: "2023" },
  ];

  return (
    <section className="py-20 bg-carbon-light">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <span className="text-sm font-medium text-primary">{t("team.badge")}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-monument text-foreground mb-6 uppercase">
              {t("team.title")}
              <br />
              <span className="text-primary">{t("team.subtitle")}</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              {t("team.description")}
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-monument text-foreground uppercase">{t("team.achievements")}</h3>
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
              {t("team.viewRoster")}
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
