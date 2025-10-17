import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { IMAGES } from '../config/images';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Catalogues', id: 'catalogues' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img 
              src={IMAGES.logo} 
              alt="Smith Instruments Logo" 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-12' : 'h-14'
              }`}
              style={{ width: 'auto', maxWidth: '200px' }}
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-base transition-colors font-medium ${
                  currentPage === item.id
                    ? 'text-[#FF6B00]'
                    : 'text-[#4A4A4A] hover:text-[#FF6B00]'
                }`}
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => onNavigate('contact')}
            className="hidden md:block bg-[#FF6B00] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#ff8533] transition-all duration-300 hover:shadow-lg"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Contact Us
          </button>

          <button
            className="md:hidden text-[#4A4A4A]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#E0E0E0] pt-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-base transition-colors font-medium ${
                    currentPage === item.id
                      ? 'text-[#FF6B00]'
                      : 'text-[#4A4A4A]'
                  }`}
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-[#FF6B00] text-white px-6 py-2.5 rounded-full font-semibold text-center"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
