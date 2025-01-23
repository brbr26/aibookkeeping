import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IndustriesGrid } from "@/components/industries/IndustriesGrid";

const Industries = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Header />
      <main className="pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center py-12 font-oxanium">
          Industries We Serve
        </h1>
        <div className="container mx-auto px-4 pb-20">
          <IndustriesGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;