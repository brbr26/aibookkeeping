import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* 
        Enhanced SEO:
        - Title includes primary keyword + brand.
        - Description provides a compelling, concise summary.
        - Keywords (less relevant these days, but included for completeness).
        - Canonical to avoid duplicate content issues.
        - Open Graph & Twitter props for social sharing (if supported by your SEO component).
        - Structured data that describes your business location & contact info.
      */}
      <SEO
        title="Contact Us | AI Bookkeeping"
        description="Get in touch with AI Bookkeeping for all your bookkeeping needs. Our team is ready to help your business grow and succeed."
        keywords="contact, AI Bookkeeping, bookkeeping services, business accounting, financial services"
        canonical="https://www.aibookkeeping.com/contact"
        /* Open Graph (OG) / Social Sharing */
        ogTitle="Contact AI Bookkeeping"
        ogDescription="Reach out to AI Bookkeeping for professional bookkeeping services. Our experts will help you optimize your finances."
        ogUrl="https://www.aibookkeeping.com/contact"
        ogImage="https://www.aibookkeeping.com/images/og-contact.jpg"  // Replace with a real image URL
        /* Twitter Card Data */
        twitterTitle="Contact AI Bookkeeping"
        twitterDescription="Contact AI Bookkeeping today. Let us handle your bookkeeping so you can focus on growing your business."
        twitterImage="https://www.aibookkeeping.com/images/twitter-contact.jpg" // Replace with a real image URL
        /* Example Structured Data (JSON-LD) */
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "AI Bookkeeping",
          image: "https://www.aibookkeeping.com/images/logo.jpg", // Replace with your logo
          url: "https://www.aibookkeeping.com/contact",
          telephone: "+14046180500",
          address: {
            "@type": "PostalAddress",
            streetAddress: "5328 Lanier Islands Pkwy., Ste. 102",
            addressLocality: "Buford",
            addressRegion: "GA",
            postalCode: "30518"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "34.1228179",   // Update latitude
            longitude: "-83.9889337" // Update longitude
          },
          /* Add other properties relevant to your business */
        }}
      />
      
      <Header />
      
      <main className="min-h-screen bg-[#121212]">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white font-oxanium">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4">
              Get in touch with our team of experts. We’re here to answer your 
              questions and help your business succeed.
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8 p-8 bg-primary-dark rounded-lg">
                <h2 className="text-3xl font-bold text-white font-oxanium mb-6">
                  Get In Touch
                </h2>
                
                <div className="space-y-6 text-gray-300">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                    <p className="text-lg">
                      5328 Lanier Islands Pkwy., Ste. 102
                      <br />
                      Buford, GA 30518
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 flex-shrink-0 text-primary" />
                    <a
                      href="tel:+14046180500"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      (404) 618-0500
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 flex-shrink-0 text-primary" />
                    <a
                      href="mailto:info@aibookkeeping.com"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      info@aibookkeeping.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7333465225396!2d-83.98893372427145!3d34.12281791523237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5ef2fe29f8d5d%3A0x4f65c5d0e8c51619!2s5328%20Lanier%20Islands%20Pkwy%2C%20Buford%2C%20GA%2030518!5e0!3m2!1sen!2sus!4v1709764429544!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AI Bookkeeping Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </>
  );
};

export default Contact;
