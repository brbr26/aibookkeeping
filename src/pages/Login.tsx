import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/">
          <img
            src="/lovable-uploads/d6f370ae-2bad-47f8-9041-59ecc856d608.png"
            alt="AI Bookkeeping Logo"
            className="mx-auto h-14 w-auto mb-8"
          />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white font-oxanium">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[#1A1A1A] py-8 px-4 shadow-xl shadow-black/20 sm:rounded-lg sm:px-10 border border-primary/20">
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#4E94F4',
                    brandAccent: '#85C1FF',
                    inputBackground: '#FFFFFF',
                    inputText: '#121212',
                    inputPlaceholder: '#666666',
                    inputBorder: 'transparent',
                    dividerBackground: '#2A1364',
                    messageText: 'white',
                    messageTextDanger: '#ef4444',
                    anchorTextColor: '#4E94F4',
                    anchorTextHoverColor: '#85C1FF'
                  },
                  fonts: {
                    bodyFontFamily: `Lato, sans-serif`,
                    buttonFontFamily: `Oxanium, sans-serif`,
                    inputFontFamily: `Lato, sans-serif`,
                    labelFontFamily: `Oxanium, sans-serif`,
                  },
                  radii: {
                    borderRadiusButton: '0.5rem',
                    buttonBorderRadius: '0.5rem',
                    inputBorderRadius: '0.5rem',
                  },
                },
              },
              className: {
                container: 'font-lato',
                label: 'font-oxanium text-sm font-medium text-gray-300',
                button: 'font-oxanium bg-[#2A1364] hover:bg-[#3B1D8F] text-white w-full py-3 rounded-md transition-colors duration-200',
                input: 'font-lato bg-white border-primary/20 text-[#121212] placeholder-gray-400',
              },
            }}
            theme="dark"
            providers={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;