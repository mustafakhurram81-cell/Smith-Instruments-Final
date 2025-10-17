import { Heart, Activity, Brain, Bone, Stethoscope, Eye, Download, FileText } from 'lucide-react';
import { IMAGES } from '../config/images';

interface CataloguesPageProps {
  onNavigate: (page: string) => void;
}

export default function CataloguesPage({ onNavigate }: CataloguesPageProps) {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'd like to inquire about a custom solution for surgical instruments.");
    window.open(`https://wa.me/923302449855?text=${message}`, '_blank');
  };

  const catalogues = [
    {
      icon: <Heart size={48} />,
      title: 'Plastic Surgery Instruments',
      description: 'Comprehensive range of instruments for plastic and reconstructive surgery procedures',
      pdfUrl: '/catalogues/plastic-surgery-instruments.pdf'
    },
    {
      icon: <Activity size={48} />,
      title: 'Cardiovascular Instruments',
      description: 'Specialized precision tools for cardiac and vascular surgical procedures',
      pdfUrl: '/catalogues/cardiovascular-instruments.pdf'
    },
    {
      icon: <Brain size={48} />,
      title: 'Neurology Instruments',
      description: 'Delicate instruments designed for neurological and neurosurgical applications',
      pdfUrl: '/catalogues/neurology-instruments.pdf'
    },
    {
      icon: <Bone size={48} />,
      title: 'Orthopedic Instruments',
      description: 'Robust and durable tools for bone and joint surgical procedures',
      pdfUrl: '/catalogues/orthopedic-instruments.pdf'
    },
    {
      icon: <Stethoscope size={48} />,
      title: 'Diagnostic Instruments',
      description: 'Essential examination and diagnostic tools for medical professionals',
      pdfUrl: '/catalogues/diagnostic-instruments.pdf'
    },
    {
      icon: <Eye size={48} />,
      title: 'Laryngoscopes',
      description: 'High-quality laryngoscopes for effective airway management and intubation',
      pdfUrl: '/catalogues/laryngoscopes.pdf'
    }
  ];

  return (
    <div>
      <section
        className="relative pt-40 pb-28 min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 74, 74, 0.7), rgba(74, 74, 74, 0.7)), url(${IMAGES.catalogues.pageBanner})`
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our Catalogues
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Explore our comprehensive collection of surgical instruments across multiple specialties
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogues.map((catalogue, index) => (
              <div
                key={index}
                className="bg-white border-t-4 border-[#FF6B00] rounded-lg p-8 shadow-md hover:shadow-2xl transition-all duration-500 group card-hover"
                style={{ 
                  boxShadow: '0 4px 6px -1px rgba(255, 107, 0, 0.1), 0 2px 4px -1px rgba(255, 107, 0, 0.06)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="w-20 h-20 bg-[#FF6B00]/10 rounded-full flex items-center justify-center mb-6 text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300 mx-auto group-hover:shadow-lg">
                  {catalogue.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#4A4A4A] mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {catalogue.title}
                </h3>
                <p className="text-[#666666] mb-6 text-center leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {catalogue.description}
                </p>
                <div className="space-y-3">
                  <button
                    onClick={() => window.open(catalogue.pdfUrl, '_blank')}
                    className="w-full bg-[#FF6B00] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#ff8533] transition-all duration-300 flex items-center justify-center group/btn btn-primary"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    <FileText size={20} className="mr-2 transition-transform group-hover/btn:scale-110" />
                    <span className="transition-transform group-hover/btn:translate-x-1">View PDF</span>
                  </button>
                  <button
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = catalogue.pdfUrl;
                      link.download = `${catalogue.title}.pdf`;
                      link.click();
                    }}
                    className="w-full bg-white border-2 border-[#FF6B00] text-[#FF6B00] px-6 py-3 rounded-full font-semibold hover:bg-[#FF6B00] hover:text-white transition-all duration-300 flex items-center justify-center group/btn"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    <Download size={20} className="mr-2 transition-transform group-hover/btn:scale-110" />
                    <span className="transition-transform group-hover/btn:translate-x-1">Download PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#4A4A4A] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Want a Custom Solution?
            </h2>
            <p className="text-xl text-[#666666] mb-8 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Looking for a specific instrument or OEM service? We specialize in creating custom surgical instruments tailored to your exact specifications. From private labeling to entirely new designs, our team is ready to bring your vision to life.
            </p>
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#20ba5a] transition-all duration-300 hover:shadow-xl flex items-center mx-auto group"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Contact Us on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
