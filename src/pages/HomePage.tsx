import { ArrowRight, Award, CheckCircle, Truck, Heart, Brain, Stethoscope, Bone, Activity, Eye, Package } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { IMAGES } from '../config/images';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <HeroSection onNavigate={onNavigate} />
      <ImpactSection />
      <WhyChooseSection />
      <ProductsCarousel onNavigate={onNavigate} />
      <AboutPreview onNavigate={onNavigate} />
      <TestimonialsSection />
    </div>
  );
}

function HeroSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section
      className="relative pt-40 pb-32 min-h-[85vh] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(74, 74, 74, 0.5), rgba(74, 74, 74, 0.5)), url(${IMAGES.home.heroBanner})`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            We Mold the Metal to Serve Life
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            A decades-long commitment to crafting surgical instruments that deliver precision and performance.
          </p>
          <button
            onClick={() => onNavigate('catalogues')}
            className="bg-[#FF6B00] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ff8533] transition-all duration-300 hover:shadow-xl inline-flex items-center group"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Explore Catalogue
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  const [counts, setCounts] = useState({ years: 0, countries: 0, clients: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        years: Math.floor(20 * progress),
        countries: Math.floor(20 * progress),
        clients: Math.floor(50 * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({ years: 20, countries: 20, clients: 50 });
      }
    }, interval);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-6xl font-bold mb-2 text-[#FF6B00]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {counts.years}+
            </div>
            <div className="text-xl text-[#4A4A4A]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Years of Service
            </div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold mb-2 text-[#FF6B00]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {counts.countries}+
            </div>
            <div className="text-xl text-[#4A4A4A]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Countries Reached
            </div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold mb-2 text-[#FF6B00]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {counts.clients}+
            </div>
            <div className="text-xl text-[#4A4A4A]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Clients Served
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const { ref, isRevealed } = useScrollReveal();
  const features = [
    {
      icon: <Award size={32} />,
      title: 'Medical-Grade Stainless Steel',
      description: 'All instruments crafted from premium materials meeting international standards for surgical precision.'
    },
    {
      icon: <Package size={32} />,
      title: 'Customizable Solutions',
      description: 'We create fully custom designs and tailor instruments to your exact specifications.'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Pay After Satisfaction',
      description: 'We believe in earning your trust. Payment is only required after delivery and complete satisfaction.'
    },
    {
      icon: <Truck size={32} />,
      title: 'Fast & Global Delivery',
      description: 'Efficient shipping to over 20 countries, with a focus on serving South American markets.'
    }
  ];

  return (
    <section ref={ref} className={`py-20 bg-white scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#4A4A4A] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Why Choose Us
        </h2>
        <p className="text-center text-[#666666] mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          Two decades of excellence in surgical instrument manufacturing
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-t-4 border-[#FF6B00] rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
              style={{ boxShadow: '0 4px 6px -1px rgba(255, 107, 0, 0.1), 0 2px 4px -1px rgba(255, 107, 0, 0.06)' }}
            >
              <div className="w-16 h-16 bg-[#F5F5F5] rounded-full flex items-center justify-center mb-4 text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300 group-hover:shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {feature.title}
              </h3>
              <p className="text-[#666666] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsCarousel({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, isRevealed } = useScrollReveal();

  const products = [
    { icon: <Heart size={40} />, title: 'Plastic Surgery', description: 'Precision instruments for reconstructive and cosmetic procedures' },
    { icon: <Activity size={40} />, title: 'Cardiovascular', description: 'Specialized tools for cardiac and vascular surgeries' },
    { icon: <Brain size={40} />, title: 'Neurology', description: 'Delicate instruments for neurological procedures' },
    { icon: <Bone size={40} />, title: 'Orthopedics', description: 'Robust tools for bone and joint surgeries' },
    { icon: <Stethoscope size={40} />, title: 'Diagnostics', description: 'Essential instruments for medical examination and diagnosis' },
    { icon: <Eye size={40} />, title: 'Laryngoscopes', description: 'High-quality laryngoscopes for airway management' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className={`py-20 bg-gradient-to-br from-[#F5F5F5] to-white scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#4A4A4A] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Our Products
        </h2>
        <p className="text-center text-[#666666] mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          Comprehensive range of surgical instruments across multiple specialties
        </p>

        {/* Carousel with transform-based sliding */}
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-xl">
          <div 
            className="flex"
            style={{
              transform: `translateX(-${currentSlide * 33.333}%)`,
              transition: 'transform 800ms cubic-bezier(0.4, 0, 0.2, 1)',
              width: `${products.length * 33.333}%`,
              willChange: 'transform'
            }}
          >
            {products.map((product, idx) => (
              <div
                key={idx}
                className="px-4 flex-shrink-0"
                style={{ width: `${100 / 3}%`, minWidth: `${100 / 3}%` }}
              >
                <div className="bg-white border-t-4 border-[#FF6B00] rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col transition-all duration-300">
                  <div className="w-16 h-16 bg-[#FF6B00]/10 rounded-full flex items-center justify-center mb-4 text-[#FF6B00] mx-auto flex-shrink-0">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#4A4A4A] mb-3 text-center flex-shrink-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {product.title}
                  </h3>
                  <p className="text-[#666666] mb-4 text-center text-sm leading-relaxed flex-grow" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {product.description}
                  </p>
                  <button
                    onClick={() => onNavigate('catalogues')}
                    className="w-full bg-[#FF6B00] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#ff8533] text-sm flex-shrink-0 transition-colors duration-300"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-12 gap-4">
          <button
            onClick={prevSlide}
            className="bg-white text-[#FF6B00] p-3 rounded-full shadow-lg hover:bg-[#FF6B00] hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <ArrowRight size={24} className="rotate-180" />
          </button>

          <div className="flex gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-[#FF6B00] w-8 h-3'
                    : 'bg-[#E0E0E0] w-3 h-3 hover:bg-[#FF6B00]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-white text-[#FF6B00] p-3 rounded-full shadow-lg hover:bg-[#FF6B00] hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

function AboutPreview({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { ref, isRevealed } = useScrollReveal();
  
  return (
    <section ref={ref} className={`py-20 bg-white scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#4A4A4A] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              About Smith Instruments
            </h2>
            <p className="text-[#666666] mb-4 leading-relaxed text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Since 2002, Smith Instruments has been a trusted name in the surgical instruments industry. Based in the USA, we specialize in the in-house manufacturing of precision tools for plastic and reconstructive surgery.
            </p>
            <p className="text-[#666666] mb-6 leading-relaxed text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              With over 50 skilled employees and state-of-the-art machinery, we ensure every instrument meets the highest standards of quality, safety, and performance.
            </p>
            <button
              onClick={() => onNavigate('about')}
              className="bg-[#FF6B00] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ff8533] transition-all duration-300 hover:shadow-lg flex items-center group"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
          <div>
            <img
              src={IMAGES.home.whyChooseUs}
              alt="Manufacturing facility with precision equipment for surgical instruments"
              className="aspect-square w-full object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { ref, isRevealed } = useScrollReveal();
  const testimonials = [
    {
      name: 'Dr. Maria Rodriguez',
      role: 'Plastic Surgeon, Buenos Aires',
      text: 'Smith Instruments has been our trusted partner for over 5 years. The quality is exceptional and their custom solutions have helped us deliver better patient outcomes.',
      avatar: 'MR'
    },
    {
      name: 'Dr. Carlos Mendez',
      role: 'Chief of Surgery, São Paulo',
      text: 'The precision and durability of their instruments are unmatched. What sets them apart is their commitment to customer satisfaction and flexible payment terms.',
      avatar: 'CM'
    },
    {
      name: 'Dr. Ana Silva',
      role: 'Cardiovascular Specialist, Lima',
      text: 'Working with Smith Instruments has been seamless. From ordering via WhatsApp to receiving perfectly crafted custom instruments, the experience is consistently excellent.',
      avatar: 'AS'
    }
  ];

  return (
    <section ref={ref} className={`py-20 bg-gradient-to-br from-[#F5F5F5] to-white scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#4A4A4A] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          What Our Clients Say
        </h2>
        <p className="text-center text-[#666666] mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          Trusted by healthcare professionals across continents
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="text-[#FF6B00] text-6xl font-serif absolute top-4 left-6 opacity-30">&ldquo;</div>
              <p className="text-[#666666] leading-relaxed mb-6 pt-8 relative z-10" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {testimonial.text}
              </p>
              <div className="flex items-center border-t border-[#E0E0E0] pt-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#ff8533] rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-[#4A4A4A]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#666666]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
