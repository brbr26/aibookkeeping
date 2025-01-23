import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Contact AI Bookkeeping - Get Expert Financial Support</title>
        <meta name="description" content="Connect with AI Bookkeeping experts for personalized financial solutions. Get answers to your questions about our AI-powered bookkeeping services and start optimizing your business finances." />
        <meta name="keywords" content="contact AI bookkeeping, financial services support, bookkeeping consultation, business finance help, accounting services contact" />
        <meta property="og:title" content="Contact AI Bookkeeping - Expert Financial Support" />
        <meta property="og:description" content="Connect with AI Bookkeeping experts for personalized financial solutions and optimize your business finances." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact AI Bookkeeping - Expert Financial Support" />
        <meta name="twitter:description" content="Connect with AI Bookkeeping experts for personalized financial solutions." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <link rel="canonical" href="https://aibookkeeping.com/contact" />
      </Helmet>
      <Header />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-12 font-oxanium">Get in Touch with Our Financial Experts</h1>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-gray-700 mb-6">
              We'd love to hear from you. Please reach out using the contact information below.
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