import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Contact AI Bookkeeping | Get Expert Financial Support</title>
        <meta name="description" content="Get in touch with our AI bookkeeping experts. We're here to help streamline your business finances and answer any questions about our automated solutions." />
        <meta name="keywords" content="contact AI bookkeeping, financial support, bookkeeping consultation, business finance help" />
        <link rel="canonical" href="https://aibookkeeping.com/contact" />
        <meta property="og:title" content="Contact AI Bookkeeping Support" />
        <meta property="og:description" content="Get expert support for your business financial needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aibookkeeping.com/contact" />
        <meta name="twitter:title" content="Contact AI Bookkeeping" />
        <meta name="twitter:description" content="Expert financial support at your service." />
      </Helmet>
      <Header />
      <main className="pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center py-12 font-oxanium">
          Contact Us
        </h1>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <p className="text-lg text-gray-700 mb-8">
              Ready to transform your business finances? Get in touch with our team of AI bookkeeping experts.
            </p>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Email</h2>
                <p className="text-gray-600">contact@aibookkeeping.com</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Phone</h2>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Address</h2>
                <p className="text-gray-600">
                  123 Business Street<br />
                  Suite 100<br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
