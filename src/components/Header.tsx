import { Button } from "@/components/ui/button";
import { Link2, Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-b border-white/5 bg-background/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Compacto */}
        <div className="flex items-center gap-2">
          <div className="relative p-1.5 rounded-lg bg-gradient-neon">
            <Link2 className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold font-poppins text-foreground">
            Abrev.io
          </span>
        </div>

        {/* CTA Principal Mobile - Sempre Visível */}
        <div className="lg:hidden">
          <Button 
            size="sm" 
            className="bg-gradient-neon hover:shadow-neon btn-futuristic text-xs px-4 h-8"
            onClick={() => navigate("/dashboard")}
          >
            <Zap className="h-3 w-3 mr-1" />
            Criar
          </Button>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          <a 
            href="#recursos" 
            className="text-sm text-foreground/70 hover:text-neon-blue transition-colors font-medium"
          >
            Recursos
          </a>
          <button 
            onClick={() => navigate("/pricing")}
            className="text-sm text-foreground/70 hover:text-neon-blue transition-colors font-medium"
          >
            Preços
          </button>
          <a 
            href="#depoimentos" 
            className="text-sm text-foreground/70 hover:text-neon-blue transition-colors font-medium"
          >
            Cases
          </a>
        </nav>

        {/* CTA Buttons Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-foreground/70 hover:text-neon-blue hover:bg-white/5"
          >
            Entrar
          </Button>
          <Button 
            size="sm"
            className="bg-gradient-neon hover:shadow-neon btn-futuristic font-semibold"
          >
            Começar Grátis
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="hidden text-foreground/70 hover:text-neon-blue hover:bg-white/5 w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden glass-card border-t border-white/10 animate-fade-in">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-4 mb-6">
              <a 
                href="#recursos" 
                className="text-foreground/80 hover:text-neon-blue transition-all duration-300 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Recursos
              </a>
              <button 
                onClick={() => {
                  navigate("/pricing");
                  setIsMenuOpen(false);
                }}
                className="text-foreground/80 hover:text-neon-blue transition-all duration-300 py-2 font-medium text-left"
              >
                Preços
              </button>
              <a 
                href="#depoimentos" 
                className="text-foreground/80 hover:text-neon-blue transition-all duration-300 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#contato" 
                className="text-foreground/80 hover:text-neon-blue transition-all duration-300 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </nav>
            <div className="flex flex-col gap-3">
              <Button 
                variant="ghost" 
                className="justify-start text-foreground hover:text-neon-blue hover:bg-white/5"
              >
                Entrar
              </Button>
              <Button className="bg-gradient-neon hover:shadow-neon btn-futuristic font-semibold">
                Começar Grátis
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;