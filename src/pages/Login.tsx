import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Header />
      
      <main className="container mx-auto px-4">
        <section className="pt-32 md:pt-40 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-oxanium text-white mb-6 font-extrabold">
            Login to{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#9F7AEA] text-transparent bg-clip-text">
              Your Account
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-lato">
            Access your AI-powered bookkeeping dashboard.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Login;