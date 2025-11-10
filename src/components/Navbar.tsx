import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Equipo", href: "#team" },
    { label: "Torneos", href: "#tournaments" },
    { label: "Noticias", href: "#news" },
    { label: "Socios", href: "#partners" },
    { label: "Tienda", href: "#shop" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-3 group">
              <img 
                src={logo} 
                alt="Lagartos Esports Logo" 
                className="h-10 w-10 transition-transform group-hover:scale-110"
              />
              <div className="flex flex-col">
                <div className="text-xl font-bold text-primary group-hover:text-brand-glow transition-colors leading-none">
                  LAGARTOS
                </div>
                <div className="text-xs font-medium text-muted-foreground">ESPORTS</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" className="text-foreground/80">
                Iniciar Sesión
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-brand-glow">
                Registrarse
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-3 border-t border-border">
                <Button variant="ghost" className="w-full justify-start">
                  Iniciar Sesión
                </Button>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-brand-glow">
                  Registrarse
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
