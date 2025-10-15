import { Target, Eye, Award, Users, Shield, Settings } from 'lucide-react';
import { IMAGES } from '../config/images';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'd like to discuss a custom solution for surgical instruments.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div>
      <section
        className="relative pt-40 pb-28 min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 74, 74, 0.7), rgba(74, 74, 74, 0.7)), url(${IMAGES.about.pageBanner})`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Two decades of excellence in surgical instrument manufacturing
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={IMAGES.about.facility}
                alt="Modern manufacturing facility producing surgical instruments"
                className="aspect-square w-full object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
            <div>
              <div className="inline-block bg-[#FF6B00] text-white px-4 py-2 rounded-full mb-4 font-semibold">
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-[#4A4A4A] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                We Mold The Metal to Serve Life
              </h2>
              <div className="space-y-4 text-[#666666] text-lg leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                <p>
                  Since 2002, Smith Instruments has been a trusted name in the surgical instruments industry. Based in the USA, we specialize in the in-house manufacturing of precision tools for plastic and reconstructive surgery. With over 50 skilled employees and a facility equipped with state-of-the-art machinery, we ensure that every instrument we produce meets the highest standards of quality, safety, and performance.
                </p>
                <p>
                  Our dedication to craftsmanship is backed by two decades of industry expertise and a commitment to constant innovation. We focus especially on serving the growing needs of the South American market, delivering reliable instruments to healthcare professionals who value precision and trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-[#4A4A4A] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Customization & OEM Services
              </h2>
              <div className="space-y-4 text-[#666666] text-lg leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                <p>
                  At Smith Instruments, we understand that no two clients are the same. That's why we offer full customization—from the development of entirely new, client-specific products to modifications of existing designs. Our team works closely with you to deliver exactly what you need.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Settings size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4A4A4A] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Custom Design
                    </h4>
                    <p className="text-sm text-[#666666]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      Tailored instruments to your specifications
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4A4A4A] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      OEM Services
                    </h4>
                    <p className="text-sm text-[#666666]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      Complete manufacturing solutions for your needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={IMAGES.about.products}
                alt="Custom surgical instruments and OEM manufacturing services"
                className="aspect-square w-full object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#4A4A4A] mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Customer First
            </h2>
            <div className="space-y-4 text-[#666666] text-lg leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <p>
                What truly sets us apart is our belief in earning trust before payment. <strong className="text-[#FF6B00]">You only pay after receiving your instruments and being completely satisfied.</strong> This approach reflects our confidence in the quality of our work and our long-term commitment to client satisfaction.
              </p>
              <p>
                We don't use complicated portals—you can place orders or start a product inquiry simply by contacting us on WhatsApp or by email. Our team is quick to respond and ready to guide you every step of the way.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-[#F5F5F5] to-white rounded-xl">
                <Shield size={48} className="text-[#FF6B00] mx-auto mb-4" />
                <h4 className="font-semibold text-[#4A4A4A] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Pay After Satisfaction
                </h4>
                <p className="text-sm text-[#666666]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  Payment only after delivery and complete approval
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#F5F5F5] to-white rounded-xl">
                <Users size={48} className="text-[#FF6B00] mx-auto mb-4" />
                <h4 className="font-semibold text-[#4A4A4A] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Simple Communication
                </h4>
                <p className="text-sm text-[#666666]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  Order directly via WhatsApp or email
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#F5F5F5] to-white rounded-xl">
                <Award size={48} className="text-[#FF6B00] mx-auto mb-4" />
                <h4 className="font-semibold text-[#4A4A4A] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Quality Guaranteed
                </h4>
                <p className="text-sm text-[#666666]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  Every instrument meets rigorous standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#4A4A4A] mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-t-4 border-[#FF6B00] rounded-lg p-8 shadow-xl">
              <div className="w-16 h-16 bg-[#FF6B00] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#4A4A4A] mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our Mission
              </h3>
              <p className="text-[#666666] leading-relaxed text-center" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                To craft precision surgical instruments that empower healthcare professionals worldwide, delivering uncompromising quality, innovative solutions, and exceptional service that saves lives and improves patient outcomes.
              </p>
            </div>
            <div className="bg-white border-t-4 border-[#FF6B00] rounded-lg p-8 shadow-xl">
              <div className="w-16 h-16 bg-[#FF6B00] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#4A4A4A] mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our Vision
              </h3>
              <p className="text-[#666666] leading-relaxed text-center" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                To be the most trusted partner in surgical instrumentation globally, recognized for our commitment to innovation, customer satisfaction, and the belief that quality instruments are essential to advancing healthcare worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
