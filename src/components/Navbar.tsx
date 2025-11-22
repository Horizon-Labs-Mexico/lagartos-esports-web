import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingCart, Languages, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t("nav.teams"), href: "#equipos" },
    { label: t("nav.afterlife"), href: "#afterlife" },
    { label: t("nav.competitions"), href: "#competencias" },
    { label: t("nav.store"), href: "#tienda" },
  ];

  const companyLinks = [
    { label: t("nav.founders"), href: "#founders" },
    { label: t("nav.sponsors"), href: "#patrocinadores" },
    { label: t("nav.gaming"), href: "#gaming-experience" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Lagartos Esports Logo" 
                className="h-12 w-12"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                  {t("nav.company")}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border-border">
                  {companyLinks.map((link) => (
                    <DropdownMenuItem key={link.label} asChild>
                      <a href={link.href} className="cursor-pointer">
                        {link.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
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
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground/80 hover:text-primary"
              onClick={toggleLanguage}
              title={language === "es" ? "Switch to English" : "Cambiar a Español"}
            >
              <Languages className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" className="text-foreground/80">
                {t("nav.login")}
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-brand-glow">
                {t("nav.register")}
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
              <div className="flex flex-col gap-2">
                <div className="text-sm font-semibold text-foreground/60 px-2">{t("nav.company")}</div>
                {companyLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2 pl-4"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
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
                  {t("nav.login")}
                </Button>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-brand-glow">
                  {t("nav.register")}
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
