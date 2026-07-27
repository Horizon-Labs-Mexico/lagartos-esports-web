import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";
import sponsorHeineken from "@/assets/sponsor-heineken.png";
import sponsorAfterlife from "@/assets/sponsor-afterlife.png";
import sponsorG2a from "@/assets/sponsor-g2a.png";
import sponsorUniversity from "@/assets/sponsor-university.png";
import sponsorXbox from "@/assets/sponsor-xbox.png";

interface Partner {
  id: string;
  name: string;
  logo: string;
  descriptionEs: string;
  descriptionEn: string;
  url: string;
}

const partners: Partner[] = [
  {
    id: "heineken",
    name: "Heineken",
    logo: sponsorHeineken,
    descriptionEs:
      "Con más de 150 años de historia, Heineken es una de las cervezas más reconocidas del mundo. Su apoyo al deporte y a la cultura esports impulsa experiencias únicas para nuestra comunidad, celebrando cada victoria de los Lagartos con la calidad y pasión que los distingue.",
    descriptionEn:
      "With over 150 years of history, Heineken is one of the most recognized beers in the world. Their support of sports and esports culture powers unique experiences for our community, celebrating every Lagartos victory with the quality and passion that defines them.",
    url: "https://www.heineken.com",
  },
  {
    id: "afterlife",
    name: "Afterlife",
    logo: sponsorAfterlife,
    descriptionEs:
      "Afterlife es el partner oficial de Lagartos Esports, colaborando en el desarrollo de contenido, eventos y experiencias phygital. Juntos creamos un puente entre el mundo digital y el físico para llevar el esports a un nuevo nivel en Latinoamérica.",
    descriptionEn:
      "Afterlife is Lagartos Esports' official partner, collaborating on content development, events and phygital experiences. Together we build a bridge between the digital and physical worlds to take esports to a new level in Latin America.",
    url: "#",
  },
  {
    id: "g2a",
    name: "G2A",
    logo: sponsorG2a,
    descriptionEs:
      "G2A.COM es el marketplace global líder para productos digitales de gaming. Con millones de usuarios en todo el mundo, G2A hace que jugar sea más accesible ofreciendo a la comunidad Lagartos ofertas exclusivas en los mejores títulos y suscripciones.",
    descriptionEn:
      "G2A.COM is the leading global marketplace for digital gaming products. With millions of users worldwide, G2A makes gaming more accessible by offering the Lagartos community exclusive deals on the best titles and subscriptions.",
    url: "https://www.g2a.com",
  },
  {
    id: "university",
    name: "University Esports México",
    logo: sponsorUniversity,
    descriptionEs:
      "University Esports México es la mayor competencia universitaria de esports del país, formando la próxima generación de jugadores profesionales. Su alianza con Lagartos abre caminos para el talento emergente y fortalece la escena competitiva mexicana.",
    descriptionEn:
      "University Esports México is the country's largest university esports competition, developing the next generation of pro players. Their alliance with Lagartos opens paths for emerging talent and strengthens the Mexican competitive scene.",
    url: "https://universityesports.mx",
  },
  {
    id: "xbox",
    name: "Xbox Game Pass",
    logo: sponsorXbox,
    descriptionEs:
      "Xbox Game Pass es el servicio de suscripción de videojuegos definitivo, con acceso instantáneo a cientos de títulos de alta calidad. Como partner de Lagartos, Xbox impulsa nuestra pasión por el gaming y da a nuestra comunidad acceso a experiencias premium.",
    descriptionEn:
      "Xbox Game Pass is the ultimate gaming subscription service, giving instant access to hundreds of high-quality titles. As a Lagartos partner, Xbox fuels our passion for gaming and gives our community access to premium experiences.",
    url: "https://www.xbox.com/xbox-game-pass",
  },
];

const Partners = () => {
  const { language, t } = useLanguage();
  const [selected, setSelected] = useState<Partner>(partners[0]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-16">
        {/* Header */}
        <section className="relative overflow-hidden border-b border-border">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.25), transparent 55%)",
            }}
          />
          <div className="relative container mx-auto px-6 md:px-8 py-16 md:py-24">
            <h1 className="font-monument text-4xl md:text-6xl lg:text-7xl uppercase tracking-wide text-foreground">
              {language === "es" ? (
                <>
                  {t("partners.titlePrefix")}{" "}
                  <span className="text-primary">
                    {t("partners.titleAccent")}
                  </span>
                </>
              ) : (
                <>
                  {t("partners.titlePrefix")}{" "}
                  <span className="text-primary">
                    {t("partners.titleAccent")}
                  </span>
                </>
              )}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl">
              {t("partners.subtitle")}
            </p>
          </div>
        </section>

        {/* Logos row */}
        <section className="container mx-auto px-6 md:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {partners.map((p) => {
              const isActive = selected.id === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelected(p)}
                  className={`group relative h-28 md:h-32 rounded-md border transition-all bg-card flex items-center justify-center px-6 ${
                    isActive
                      ? "border-primary shadow-[0_0_0_1px_hsl(var(--primary))]"
                      : "border-border hover:border-primary/60"
                  }`}
                  aria-label={p.name}
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-14 md:max-h-16 w-auto object-contain"
                  />
                </button>
              );
            })}
          </div>
        </section>

        {/* Detail */}
        <section className="container mx-auto px-6 md:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: brand crossover */}
            <div className="relative rounded-md overflow-hidden bg-card border border-border min-h-[380px] md:min-h-[460px] flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at center, hsl(var(--primary) / 0.35), transparent 60%)",
                }}
              />
              <div className="relative flex items-center justify-center gap-8 md:gap-14 px-8">
                <img
                  src={logo}
                  alt="Lagartos Esports"
                  className="h-20 md:h-28 w-auto object-contain"
                />
                <span className="text-3xl md:text-4xl text-foreground/70 font-light">
                  ×
                </span>
                <img
                  src={selected.logo}
                  alt={selected.name}
                  className="max-h-20 md:max-h-24 w-auto object-contain"
                />
              </div>
            </div>

            {/* Right: description */}
            <div className="rounded-md bg-card border border-border p-8 md:p-10 flex flex-col">
              <h2 className="font-monument text-2xl md:text-3xl uppercase tracking-wide text-foreground">
                {selected.name}
              </h2>
              <div className="h-px bg-border my-5" />
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed flex-1">
                {language === "es"
                  ? selected.descriptionEs
                  : selected.descriptionEn}
              </p>
              <a
                href={selected.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8"
              >
                <Button className="w-full h-12 gap-2">
                  {t("partners.visit")} {selected.name}
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Partners;
