import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { IMAGES } from '../config/images';
import emailjs from '@emailjs/browser';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    interestedIn: '',
    message: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        interested_in: formData.interestedIn,
        message: formData.message,
        to_email: 'info@smithinstruments.com' // Your email address
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          company: '',
          email: '',
          phone: '',
          interestedIn: '',
          message: '',
          consent: false
        });
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError('Failed to send message. Please try again or contact us directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'd like to inquire about Smith Instruments products or catalogues.");
    window.open(`https://wa.me/923302449855?text=${message}`, '_blank');
  };

  const faqs = [
    {
      question: 'How do I place an order?',
      answer: 'Contact us by WhatsApp or email with your requirements. Our team will guide you through the entire process and provide a customized quote.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes — we currently serve multiple South American countries and beyond. We have established shipping partnerships to ensure safe and timely delivery worldwide.'
    },
    {
      question: 'When do I pay?',
      answer: 'Only after delivery and complete satisfaction. We believe in earning your trust through quality work before receiving payment.'
    }
  ];

  return (
    <div>
      <section
        className="relative pt-40 pb-28 min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 74, 74, 0.7), rgba(74, 74, 74, 0.7)), url(${IMAGES.contact.pageBanner})`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Get in touch with our team for inquiries, quotes, or custom solutions
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-[#FAFAFA] rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-[#4A4A4A] mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-[#FFF5ED] rounded-xl flex items-center justify-center text-[#FF6B00] mr-4 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4A4A4A] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Phone / WhatsApp
                    </h4>
                    <a
                      href="tel:+923302449855"
                      className="text-[#666666] hover:text-[#FF6B00] transition-colors block"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      +92 330 2449855
                    </a>
                    <p className="text-sm text-[#999999] mt-1" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      Mon-Fri, 9am-6pm EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-[#FFF5ED] rounded-xl flex items-center justify-center text-[#FF6B00] mr-4 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4A4A4A] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Email
                    </h4>
                    <a
                      href="mailto:info@smithinstruments.com"
                      className="text-[#666666] hover:text-[#FF6B00] transition-colors block"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      info@smithinstruments.com
                    </a>
                    <p className="text-sm text-[#999999] mt-1" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      We reply within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-[#FFF5ED] rounded-xl flex items-center justify-center text-[#FF6B00] mr-4 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4A4A4A] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Location
                    </h4>
                    <p className="text-[#666666]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      United States
                    </p>
                    <p className="text-sm text-[#999999] mt-1" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      Serving clients globally
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-[#25D366] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#20ba5a] transition-all duration-300 flex items-center justify-center mt-8 group"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </button>

              <div className="mt-8 p-6 bg-white rounded-xl">
                <h4 className="font-semibold text-[#4A4A4A] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Business Hours
                </h4>
                <div className="space-y-2 text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  <div className="flex justify-between">
                    <span className="text-[#666666]">Monday - Friday</span>
                    <span className="text-[#4A4A4A] font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#666666]">Saturday</span>
                    <span className="text-[#4A4A4A] font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#666666]">Sunday</span>
                    <span className="text-[#4A4A4A] font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#4A4A4A] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Send Us a Message
              </h2>
              {submitted ? (
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold text-green-800 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Thank you for contacting us!
                  </h3>
                  <p className="text-green-700" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    We've received your message and will get back to you shortly.
                  </p>
                </div>
              ) : submitError ? (
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold text-red-800 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Error sending message
                  </h3>
                  <p className="text-red-700 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {submitError}
                  </p>
                  <button
                    onClick={() => setSubmitError('')}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 mt-8">
                  <div>
                    <label htmlFor="fullName" className="block text-[#4A4A4A] font-medium mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      Full Name <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Dr. John Smith"
                      required
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#FF6B00] focus:outline-none transition-colors"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[#4A4A4A] font-medium mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      Email Address <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.smith@hospital.com"
                      required
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#FF6B00] focus:outline-none transition-colors"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="interestedIn" className="block text-[#4A4A4A] font-medium mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      Catalogue of Interest
                    </label>
                    <input
                      type="text"
                      id="interestedIn"
                      name="interestedIn"
                      value={formData.interestedIn}
                      onChange={handleChange}
                      placeholder="e.g., Orthopedic Instruments"
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#FF6B00] focus:outline-none transition-colors"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#4A4A4A] font-medium mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      Message <span className="text-[#FF6B00]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements or questions..."
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:border-[#FF6B00] focus:outline-none transition-colors resize-none"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    />
                    <p className="text-xs text-[#999999] mt-1" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      0/1000 characters
                    </p>
                  </div>

                  <div className="bg-[#F5F5F5] rounded-lg p-4">
                    <p className="text-xs text-[#666666] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      <strong>Privacy Notice:</strong> Your information will be used solely to respond to your inquiry. We do not share your data with third parties. By submitting this form, you agree to our privacy policy.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#FF6B00] hover:bg-[#ff8533] hover:shadow-xl'
                    } text-white`}
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#4A4A4A] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[#666666] mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Quick answers to common questions
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#FF6B00]">
                <h3 className="text-xl font-semibold text-[#4A4A4A] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {faq.question}
                </h3>
                <p className="text-[#666666] leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
