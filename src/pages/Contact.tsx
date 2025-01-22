import { Header } from "@/components/Header";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact Us - AI Bookkeeping</title>
        <meta name="description" content="Get in touch with us for any inquiries or support regarding AI Bookkeeping." />
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
              <textarea className="w-full p-2 border border-gray-300 rounded" id="message" rows="4" required></textarea>
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
