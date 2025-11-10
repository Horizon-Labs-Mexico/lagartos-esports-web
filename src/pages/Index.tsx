import Navbar from "@/components/Navbar";
import HeroMatch from "@/components/HeroMatch";
import CommunitySidebar from "@/components/CommunitySidebar";
import TeamSection from "@/components/TeamSection";

const Index = () => {
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

        <TeamSection />

        {/* Footer */}
        <footer className="bg-carbon py-12 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">LAGARTOS</h3>
                <p className="text-sm text-muted-foreground">
                  El mejor equipo de esports de la región.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Equipo</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Roster</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Staff</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Historia</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Comunidad</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Twitch</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Términos</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                © 2025 Lagartos Esports. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
