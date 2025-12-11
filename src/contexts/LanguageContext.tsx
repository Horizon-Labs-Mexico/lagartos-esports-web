import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navbar
    "nav.company": "Compañía",
    "nav.founders": "Founders Team",
    "nav.sponsors": "Patrocinadores",
    "nav.gaming": "Gaming Experience",
    "nav.teams": "Equipos",
    "nav.afterlife": "Afterlife",
    "nav.competitions": "Competencias",
    "nav.store": "Tienda",
    "nav.team": "Equipo",
    "nav.tournaments": "Competencias",
    "nav.news": "Noticias",
    "nav.partners": "Socios",
    "nav.shop": "Tienda",
    "nav.login": "Iniciar Sesión",
    "nav.register": "Registrarse",
    "nav.logout": "Cerrar Sesión",
    "nav.profile": "Mi Perfil",
    
    // Auth
    "auth.loginTitle": "Bienvenido de vuelta",
    "auth.loginSubtitle": "Ingresa tus credenciales para continuar",
    "auth.signupTitle": "Crear cuenta",
    "auth.signupSubtitle": "Únete a la comunidad de Lagartos Esports",
    "auth.email": "Correo electrónico",
    "auth.emailPlaceholder": "tu@email.com",
    "auth.password": "Contraseña",
    "auth.passwordPlaceholder": "••••••••",
    "auth.username": "Nombre de usuario",
    "auth.usernamePlaceholder": "tu_username",
    "auth.noAccount": "¿No tienes cuenta?",
    "auth.hasAccount": "¿Ya tienes cuenta?",
    "auth.loading": "Cargando...",
    "auth.error": "Error",
    "auth.success": "Éxito",
    "auth.loginSuccess": "Has iniciado sesión correctamente",
    "auth.signupSuccess": "Cuenta creada correctamente",
    "auth.loginError": "Error al iniciar sesión",
    "auth.signupError": "Error al crear cuenta",
    "auth.invalidCredentials": "Credenciales inválidas",
    "auth.userExists": "Este usuario ya está registrado",
    "auth.invalidEmail": "Por favor ingresa un email válido",
    "auth.passwordMin": "La contraseña debe tener al menos 6 caracteres",
    
    // Hero Match
    "hero.upcoming": "Próximo Torneo",
    "hero.tournament": "Games of The Future Mexico 2026",
    "hero.vs": "VS",
    "hero.days": "días",
    "hero.hours": "horas",
    "hero.mins": "mins",
    "hero.secs": "segs",
    "hero.watchLive": "Ver Stream en Vivo",
    "hero.tournamentInfo": "Información del Torneo",
    
    // Team Section
    "team.badge": "NUESTRO EQUIPO",
    "team.title": "CONOCE A LOS",
    "team.subtitle": "LAGARTOS",
    "team.description": "Un equipo de élite formado por los mejores jugadores de la región. Con años de experiencia competitiva y una pasión inquebrantable por el juego, estamos listos para conquistar cualquier torneo.",
    "team.achievements": "Logros Recientes",
    "team.achievement1": "Campeones Regionales",
    "team.achievement2": "Finalistas Nacionales",
    "team.achievement3": "MVP del Torneo",
    "team.viewRoster": "Ver Roster Completo",
    
    // Community Sidebar
    "community.title": "COMUNIDAD",
    "community.subtitle": "Últimas Discusiones",
    "community.discussion1": "Análisis del último partido vs Dragones",
    "community.discussion2": "Nuevos fichajes para la próxima temporada",
    "community.discussion3": "¿Cuál es la mejor estrategia en Dust2?",
    "community.discussion4": "Horarios de entrenamientos abiertos",
    "community.discussion5": "Merchandising oficial disponible",
    "community.discussion6": "Resumen del torneo regional",
    "community.replies": "respuestas",
    "community.trending": "Trending",
    
    // Footer
    "footer.description": "El mejor equipo de esports de la región.",
    "footer.team": "Equipo",
    "footer.roster": "Roster",
    "footer.staff": "Staff",
    "footer.history": "Historia",
    "footer.community": "Comunidad",
    "footer.discord": "Discord",
    "footer.twitch": "Twitch",
    "footer.twitter": "Twitter",
    "footer.legal": "Legal",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",
    "footer.contact": "Contacto",
    "footer.rights": "© 2025 Lagartos Esports. Todos los derechos reservados.",
    
    // Navigation Cards
    "nav.tournamentsDesc": "Explora nuestras competiciones y logros",
    "nav.newsDesc": "Últimas actualizaciones y anuncios del equipo",
    "nav.playersDesc": "Conoce a nuestro roster profesional",
    "nav.eventsDesc": "Próximos eventos y transmisiones",
    
    // Xbox Game Pass Page
    "xbox.title": "XBOX GAME PASS",
    "xbox.description": "Cada vez que visitas el Afterlife y eliges uno de nuestros títulos, no solo estás obteniendo una experiencia y entretenimiento de alta calidad, sino que también estás construyendo algo extraordinario junto a nosotros. Es por eso que ahora tu tiempo de juego desbloquea privilegios exclusivos de la mano de Xbox que te permitirán disfrutar aún más de tu experiencia.",
    "xbox.joinButton": "ÚNETE AHORA",
    "xbox.disclaimer": "Este beneficio solo está disponible para clientes registrados y que cuentan con su EsportsID. Consulta los preguntas frecuentes.",
    "xbox.ctaText": "ACUMULA HORAS Y LLÉVATE UN",
    "xbox.ctaHighlight": "GAME PASS ULTIMATE",
  },
  en: {
    // Navbar
    "nav.company": "Company",
    "nav.founders": "Founders Team",
    "nav.sponsors": "Sponsors",
    "nav.gaming": "Gaming Experience",
    "nav.teams": "Teams",
    "nav.afterlife": "Afterlife",
    "nav.competitions": "Competitions",
    "nav.store": "Store",
    "nav.team": "Team",
    "nav.tournaments": "Tournaments",
    "nav.news": "News",
    "nav.partners": "Partners",
    "nav.shop": "Shop",
    "nav.login": "Login",
    "nav.register": "Sign Up",
    "nav.logout": "Logout",
    "nav.profile": "My Profile",
    
    // Auth
    "auth.loginTitle": "Welcome back",
    "auth.loginSubtitle": "Enter your credentials to continue",
    "auth.signupTitle": "Create account",
    "auth.signupSubtitle": "Join the Lagartos Esports community",
    "auth.email": "Email",
    "auth.emailPlaceholder": "you@email.com",
    "auth.password": "Password",
    "auth.passwordPlaceholder": "••••••••",
    "auth.username": "Username",
    "auth.usernamePlaceholder": "your_username",
    "auth.noAccount": "Don't have an account?",
    "auth.hasAccount": "Already have an account?",
    "auth.loading": "Loading...",
    "auth.error": "Error",
    "auth.success": "Success",
    "auth.loginSuccess": "You have successfully logged in",
    "auth.signupSuccess": "Account created successfully",
    "auth.loginError": "Login failed",
    "auth.signupError": "Signup failed",
    "auth.invalidCredentials": "Invalid credentials",
    "auth.userExists": "This user is already registered",
    "auth.invalidEmail": "Please enter a valid email",
    "auth.passwordMin": "Password must be at least 6 characters",
    
    // Hero Match
    "hero.upcoming": "Upcoming Tournament",
    "hero.tournament": "Games of The Future Mexico 2026",
    "hero.vs": "VS",
    "hero.days": "days",
    "hero.hours": "hours",
    "hero.mins": "mins",
    "hero.secs": "secs",
    "hero.watchLive": "Watch Live Stream",
    "hero.tournamentInfo": "Tournament Info",
    
    // Team Section
    "team.badge": "OUR TEAM",
    "team.title": "MEET THE",
    "team.subtitle": "LAGARTOS",
    "team.description": "An elite team formed by the best players in the region. With years of competitive experience and an unwavering passion for the game, we are ready to conquer any tournament.",
    "team.achievements": "Recent Achievements",
    "team.achievement1": "Regional Champions",
    "team.achievement2": "National Finalists",
    "team.achievement3": "Tournament MVP",
    "team.viewRoster": "View Full Roster",
    
    // Community Sidebar
    "community.title": "COMMUNITY",
    "community.subtitle": "Latest Discussions",
    "community.discussion1": "Analysis of the last match vs Dragones",
    "community.discussion2": "New signings for next season",
    "community.discussion3": "What's the best strategy on Dust2?",
    "community.discussion4": "Open training schedules",
    "community.discussion5": "Official merchandise available",
    "community.discussion6": "Regional tournament recap",
    "community.replies": "replies",
    "community.trending": "Trending",
    
    // Footer
    "footer.description": "The best esports team in the region.",
    "footer.team": "Team",
    "footer.roster": "Roster",
    "footer.staff": "Staff",
    "footer.history": "History",
    "footer.community": "Community",
    "footer.discord": "Discord",
    "footer.twitch": "Twitch",
    "footer.twitter": "Twitter",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.contact": "Contact",
    "footer.rights": "© 2025 Lagartos Esports. All rights reserved.",
    
    // Navigation Cards
    "nav.tournamentsDesc": "Explore our competitions and achievements",
    "nav.newsDesc": "Latest team updates and announcements",
    "nav.playersDesc": "Meet our professional roster",
    "nav.eventsDesc": "Upcoming events and streams",
    
    // Xbox Game Pass Page
    "xbox.title": "XBOX GAME PASS",
    "xbox.description": "Every time you visit Afterlife and choose one of our titles, you're not only getting high-quality entertainment and experience, but you're also building something extraordinary with us. That's why now your playtime unlocks exclusive Xbox privileges that will allow you to enjoy your experience even more.",
    "xbox.joinButton": "JOIN NOW",
    "xbox.disclaimer": "This benefit is only available for registered customers with their EsportsID. Check the frequently asked questions.",
    "xbox.ctaText": "ACCUMULATE HOURS AND GET A",
    "xbox.ctaHighlight": "GAME PASS ULTIMATE",
  },
};