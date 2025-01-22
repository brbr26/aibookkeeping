import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Contact Us - AI Bookkeeping</title>
        <meta name="description" content="Get in touch with AI Bookkeeping for all your automated financial management needs. We're here to help streamline your business finances." />
        <meta name="keywords" content="contact AI bookkeeping, bookkeeping support, financial services contact, AI accounting help" />
        <meta property="og:title" content="Contact Us - AI Bookkeeping" />
        <meta property="og:description" content="Get in touch with AI Bookkeeping for all your automated financial management needs. We're here to help streamline your business finances." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - AI Bookkeeping" />
        <meta name="twitter:description" content="Get in touch with AI Bookkeeping for all your automated financial management needs." />
      </Helmet>
      <Header />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-12 font-oxanium">Contact Us</h1>
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