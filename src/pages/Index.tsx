import Navbar from "@/components/Navbar";
import HeroMatch from "@/components/HeroMatch";
import CommunitySidebar from "@/components/CommunitySidebar";
import NavigationCards from "@/components/NavigationCards";
import TeamSection from "@/components/TeamSection";
import JerseyShowcase from "@/components/JerseyShowcase";
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
            <div className="flex-1 space-y-8">
              <HeroMatch />
              <JerseyShowcase />
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
        <footer className="bg-background border-t border-border">
          <div className="px-6 md:px-8 py-12">
            {/* Top Section - Logo and Light Mode */}
            <div className="flex items-start justify-between mb-12">
              <div className="text-2xl font-bold text-foreground">7K</div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors">
                <span className="text-sm text-foreground">Light Mode</span>
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-foreground"></div>
                </div>
              </button>
            </div>

            {/* Middle Section - Links and Social Icons */}
            <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
              {/* Links Columns */}
              <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
                {/* About Column */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">About</h4>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="text-foreground hover:text-primary transition-colors">Our Story</a></li>
                    <li><a href="#" className="text-foreground hover:text-primary transition-colors">Careers</a></li>
                    <li><a href="#" className="text-foreground hover:text-primary transition-colors">Brand Guidelines</a></li>
                    <li><a href="#" className="text-foreground hover:text-primary transition-colors">Network</a></li>
                    <li><a href="#" className="text-foreground hover:text-primary transition-colors">Contact Us</a></li>
                    <li><a href="#" className="text-foreground hover:text-primary transition-colors">Wallpapers</a></li>
                  </ul>
                </div>

                {/* Shop Column */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Shop</h4>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="text-foreground hover:text-primary transition-colors">Help</a></li>
                    <li><a href="#" className="text-foreground hover:text-primary transition-colors">Downloads</a></li>
                    <li><a href="#" className="text-foreground hover:text-primary transition-colors">Shipping</a></li>
                    <li><a href="#" className="text-foreground hover:text-primary transition-colors">Returns</a></li>
                  </ul>
                </div>

                {/* Terms Column */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Terms and Policies</h4>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="text-foreground hover:text-primary transition-colors">All Terms and Policies</a></li>
                  </ul>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a href="#" className="w-11 h-11 rounded border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="w-11 h-11 rounded border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6.857 1.714h10.286c2.366 0 4.286 1.92 4.286 4.286v10.286c0 2.366-1.92 4.286-4.286 4.286H6.857c-2.366 0-4.286-1.92-4.286-4.286V6c0-2.366 1.92-4.286 4.286-4.286z"/></svg>
                </a>
                <a href="#" className="w-11 h-11 rounded border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="#" className="w-11 h-11 rounded border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-11 h-11 rounded border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
                <a href="#" className="w-11 h-11 rounded border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-11 h-11 rounded border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                </a>
                <a href="#" className="w-11 h-11 rounded border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>

            {/* Bottom Section - Copyright */}
            <div className="flex justify-end">
              <p className="text-sm text-foreground">
                © 2020 - 2025. LAGARTOS All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
