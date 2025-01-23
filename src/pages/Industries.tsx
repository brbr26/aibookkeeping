import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IndustriesGrid } from "@/components/industries/IndustriesGrid";

const Industries = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Header />
      
      <main className="container mx-auto px-4">
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            Industries We{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
              Serve
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Discover how our AI-powered bookkeeping solutions are tailored to meet the unique needs of your industry.
          </p>
        </section>

        <IndustriesGrid />
      </main>

      <Footer />
    </div>
  );
};

export default Industries;