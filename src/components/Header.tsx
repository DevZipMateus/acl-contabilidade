
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`bg-primary text-primary-foreground py-2 text-xs sm:text-sm transition-all duration-300 ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-50' : 'relative'
      }`}>
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Phone size={12} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">(55) 98146-5271</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Mail size={12} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">dirceu.conrad@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <MapPin size={12} className="sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">Santa Maria/RS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'fixed top-8 sm:top-10 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white relative'
        }`}
      >
        <nav className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 lg:py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 lg:space-x-3">
              <img 
                src="/lovable-uploads/9f12f653-9867-4dde-8c6c-798c6cc07d2c.png" 
                alt="ALC Serviços Contábeis - Logo"
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
              <div>
                <h2 className="font-bold text-sm sm:text-lg lg:text-xl text-primary">ALC Serviços Contábeis</h2>
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Qualidade e Responsabilidade</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="btn-ghost text-sm xl:text-base">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="btn-ghost text-sm xl:text-base">
                Sobre
              </button>
              <button onClick={() => scrollToSection('servicos')} className="btn-ghost text-sm xl:text-base">
                Serviços
              </button>
              <button onClick={() => scrollToSection('contato')} className="btn-ghost text-sm xl:text-base">
                Contato
              </button>
              <a 
                href="https://wa.me/5555981465271" 
                className="btn-primary text-sm xl:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar Conosco
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t animate-fade-in">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('inicio')} className="text-left py-2 px-2 hover:text-primary transition-colors text-sm sm:text-base">
                  Início
                </button>
                <button onClick={() => scrollToSection('sobre')} className="text-left py-2 px-2 hover:text-primary transition-colors text-sm sm:text-base">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('servicos')} className="text-left py-2 px-2 hover:text-primary transition-colors text-sm sm:text-base">
                  Serviços
                </button>
                <button onClick={() => scrollToSection('contato')} className="text-left py-2 px-2 hover:text-primary transition-colors text-sm sm:text-base">
                  Contato
                </button>
                <a 
                  href="https://wa.me/5555981465271" 
                  className="btn-primary text-center mt-4 text-sm sm:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar Conosco
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
