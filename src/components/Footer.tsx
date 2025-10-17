import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'd like to inquire about Smith Instruments products or catalogues.");
    window.open(`https://wa.me/923302449855?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-[#4A4A4A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Smith Instruments
            </h3>
            <p className="text-[#F5F5F5] mb-4 italic" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              We Mold the Metal to Serve Life
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/smithinstrumentsusa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/smithinstruments/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {['Home', 'Catalogues', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => onNavigate(item.toLowerCase())}
                  className="text-left text-[#F5F5F5] hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Contact Info
            </h4>
            <div className="space-y-3" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <a
                href="mailto:info@smithinstruments.com"
                className="flex items-start text-[#F5F5F5] hover:text-[#FF6B00] transition-colors"
              >
                <Mail size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>info@smithinstruments.com</span>
              </a>
              <button
                onClick={handleWhatsApp}
                className="flex items-start text-[#F5F5F5] hover:text-[#FF6B00] transition-colors w-full text-left"
              >
                <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp Us</span>
              </button>
              <div className="flex items-start text-[#F5F5F5]">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>123 Industrial Parkway, USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-[#F5F5F5]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          <p>&copy; {new Date().getFullYear()} Smith Instruments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
