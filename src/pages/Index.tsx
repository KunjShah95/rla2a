
// Homepage for RLA2A Protocol – Agent-to-Agent Protocol

import Rla3DHero from "@/components/Rla3DHero";
import RlaFeatureCards from "@/components/RlaFeatureCards";
import RlaHowItWorks from "@/components/RlaHowItWorks";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground relative overflow-x-clip">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[82vh] pb-8 pt-8 sm:pt-20 bg-gradient-to-b from-background via-blue-50 via-60% to-transparent transition-all">
        <Rla3DHero />
        <div className="relative z-10 w-full max-w-3xl mx-auto px-3 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            RLA2A Protocol
          </h1>
          <div className="text-xl sm:text-2xl mb-4 text-muted-foreground font-medium animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Secure, instant, agent-to-agent communication and automation.
          </div>
          <Button size="lg" className="mt-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            View Documentation
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <RlaFeatureCards />

      {/* How it Works / 3-Step Section */}
      <RlaHowItWorks />

      {/* Footer */}
      <footer className="mt-28 py-10 border-t bg-background/95 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
          <div className="font-semibold">© {new Date().getFullYear()} RLA2A Protocol — Agent-to-Agent, Reinvented</div>
          <nav className="flex gap-5 text-muted-foreground text-sm">
            <a className="hover:underline" href="#">Docs</a>
            <a className="hover:underline" href="#">GitHub</a>
            <a className="hover:underline" href="#">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
