import { Header } from "@/components/Header";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact Us - AI Bookkeeping</title>
        <meta name="description" content="Get in touch with AI Bookkeeping for all your financial management needs. Our team is ready to help streamline your bookkeeping processes with AI-powered solutions." />
        <meta name="keywords" content="contact AI bookkeeping, bookkeeping support, financial services contact, accounting help, business finance contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us - AI Bookkeeping" />
        <meta property="og:description" content="Get in touch with AI Bookkeeping for all your financial management needs." />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - AI Bookkeeping" />
        <meta name="twitter:description" content="Get in touch with AI Bookkeeping for all your financial management needs." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
      </Helmet>
      <Header />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-12 text-white font-oxanium">
            Contact Us
          </h1>
          <p className="text-lg text-center text-white mb-8">
            We would love to hear from you! Please fill out the form below or reach out to us via email.
          </p>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="name">Name</label>
              <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" required />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="email">Email</label>
              <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" required />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="message">Message</label>
              <textarea className="w-full p-2 border border-gray-300 rounded" id="message" rows={4} required></textarea>
            </div>
            <button className="w-full bg-primary text-white py-2 rounded hover:bg-primary/80 transition duration-300" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;