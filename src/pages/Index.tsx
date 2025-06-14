
// Homepage for RLA2A Protocol – Agent-to-Agent Protocol

import RlaNavbar from "@/components/RlaNavbar";
import Rla3DHero from "@/components/Rla3DHero";
import RlaFeatureCards from "@/components/RlaFeatureCards";
import RlaHowItWorks from "@/components/RlaHowItWorks";
import RlaStats from "@/components/RlaStats";
import RlaUseCases from "@/components/RlaUseCases";
import RlaTechSpecs from "@/components/RlaTechSpecs";
import RlaCTA from "@/components/RlaCTA";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground relative overflow-x-clip">
      {/* Navigation */}
      <RlaNavbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] pb-8 pt-24 bg-gradient-to-b from-background via-blue-50 via-60% to-transparent dark:via-blue-950/20 transition-all">
        <Rla3DHero />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight animate-fade-in text-center" style={{ animationDelay: "0.2s" }}>
            RLA2A Protocol
          </h1>
          <div className="text-xl sm:text-2xl mb-6 text-muted-foreground font-medium animate-fade-in text-center max-w-3xl" style={{ animationDelay: "0.4s" }}>
            The next-generation protocol for secure, instant, and intelligent agent-to-agent communication and automation.
          </div>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in text-center max-w-2xl" style={{ animationDelay: "0.5s" }}>
            Empowering AI systems to collaborate seamlessly across platforms, organizations, and use cases with enterprise-grade security and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" asChild>
              <a href="https://github.com/rla2a/protocol" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Documentation
              </a>
            </Button>
            <Button size="lg" variant="outline">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <RlaFeatureCards />
      </section>

      {/* Stats Section */}
      <RlaStats />

      {/* How it Works / 3-Step Section */}
      <section id="how-it-works">
        <RlaHowItWorks />
      </section>

      {/* Use Cases Section */}
      <section id="use-cases">
        <RlaUseCases />
      </section>

      {/* Technical Specifications */}
      <section id="tech-specs">
        <RlaTechSpecs />
      </section>

      {/* Call to Action */}
      <RlaCTA />

      {/* Footer */}
      <footer className="mt-28 py-12 border-t bg-background/95 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            <div className="max-w-md">
              <h3 className="font-bold text-xl mb-4">RLA2A Protocol</h3>
              <p className="text-muted-foreground">
                Building the future of AI agent communication with secure, scalable, 
                and intelligent protocols for the next generation of applications.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Product</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#features" className="hover:underline">Features</a></li>
                  <li><a href="#" className="hover:underline">Pricing</a></li>
                  <li><a href="#use-cases" className="hover:underline">Use Cases</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Developers</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="https://github.com/rla2a/protocol" target="_blank" rel="noopener noreferrer" className="hover:underline">Documentation</a></li>
                  <li><a href="#" className="hover:underline">API Reference</a></li>
                  <li><a href="#" className="hover:underline">SDKs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Community</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="https://github.com/rla2a/protocol" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a></li>
                  <li><a href="#" className="hover:underline">Discord</a></li>
                  <li><a href="#" className="hover:underline">Blog</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t">
            <div className="font-medium">© {new Date().getFullYear()} RLA2A Protocol — Agent-to-Agent, Reinvented</div>
            <nav className="flex gap-6 text-muted-foreground text-sm">
              <a className="hover:underline" href="#">Privacy</a>
              <a className="hover:underline" href="#">Terms</a>
              <a className="hover:underline" href="#">Security</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
