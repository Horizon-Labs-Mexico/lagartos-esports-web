import Navbar from "@/components/Navbar";
import HeroMatch from "@/components/HeroMatch";
import CommunitySidebar from "@/components/CommunitySidebar";
import NavigationCards from "@/components/NavigationCards";
import TeamSection from "@/components/TeamSection";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Main Content with Sidebar */}
      <div className="pt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 py-8">
            {/* Main Content */}
            <div className="flex-1">
              <HeroMatch />
            </div>
            
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <CommunitySidebar />
            </aside>
          </div>
        </div>

        <NavigationCards />

        <TeamSection />

        {/* Footer */}
        <footer className="bg-carbon py-12 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">LAGARTOS</h3>
              <p className="text-sm text-muted-foreground">
                {t("footer.description")}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t("footer.team")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">{t("footer.roster")}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t("footer.staff")}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t("footer.history")}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t("footer.community")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">{t("footer.discord")}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t("footer.twitch")}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t("footer.twitter")}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t("footer.legal")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">{t("footer.privacy")}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t("footer.terms")}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t("footer.contact")}</a></li>
              </ul>
            </div>
            </div>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              {t("footer.rights")}
            </p>
          </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
