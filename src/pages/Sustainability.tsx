import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Recycle, Leaf, Monitor, Battery, Beer, Cpu } from "lucide-react";

const Sustainability = () => {
  const { t } = useLanguage();

  const wasteItems = [
    { icon: Beer, label: t("sustainability.plasticBottles") },
    { icon: Battery, label: t("sustainability.aluminumCans") },
    { icon: Cpu, label: t("sustainability.batteries") },
    { icon: Monitor, label: t("sustainability.electronics") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial" />
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block text-primary text-sm md:text-base font-medium tracking-widest uppercase mb-6">
                {t("sustainability.badge")}
              </span>
              <h1 className="font-monument text-4xl md:text-6xl lg:text-7xl text-foreground uppercase tracking-wide mb-8">
                {t("sustainability.title")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {t("sustainability.intro")}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Text */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-monument text-2xl md:text-3xl text-foreground uppercase tracking-wide mb-4">
                    {t("sustainability.afterlifeTitle")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("sustainability.afterlifeText")}
                  </p>
                </div>

                <div>
                  <h2 className="font-monument text-2xl md:text-3xl text-foreground uppercase tracking-wide mb-4">
                    {t("sustainability.recyclingTitle")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("sustainability.recyclingText")}
                  </p>
                </div>

                <div>
                  <h2 className="font-monument text-2xl md:text-3xl text-foreground uppercase tracking-wide mb-4">
                    {t("sustainability.circularTitle")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("sustainability.circularText")}
                  </p>
                </div>
              </div>

              {/* Right: Visual Card */}
              <div className="relative">
                <div className="rounded-lg border border-border bg-card p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Recycle className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-monument text-xl md:text-2xl text-foreground uppercase tracking-wide">
                      {t("sustainability.recycledMaterials")}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {wasteItems.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 p-4 rounded-md bg-background border border-border"
                      >
                        <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <div className="flex items-center gap-3">
                      <Leaf className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {t("sustainability.commitment")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative accent */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Statement Banner */}
        <section className="py-16 md:py-24 border-y border-border">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="font-monument text-xl md:text-3xl text-foreground uppercase tracking-wide leading-relaxed">
                {t("sustainability.statement")}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sustainability;
