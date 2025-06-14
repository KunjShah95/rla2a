
// Homepage for RL-A2A Enhanced – Secure Multi-AI Agent Communication System

import RlaNavbar from "@/components/RlaNavbar";
import Rla3DHero from "@/components/Rla3DHero";
import RlaFeatureCards from "@/components/RlaFeatureCards";
import RlaArchitectureOptions from "@/components/RlaArchitectureOptions";
import RlaAiProviders from "@/components/RlaAiProviders";
import RlaHowItWorks from "@/components/RlaHowItWorks";
import RlaStats from "@/components/RlaStats";
import RlaUseCases from "@/components/RlaUseCases";
import RlaTechSpecs from "@/components/RlaTechSpecs";
import RlaSecurityFeatures from "@/components/RlaSecurityFeatures";
import RlaCTA from "@/components/RlaCTA";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Shield, Zap, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground relative overflow-x-clip">
      {/* Navigation */}
      <RlaNavbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] pb-8 pt-24 bg-gradient-to-b from-background via-blue-50 via-60% to-transparent dark:via-blue-950/20 transition-all">
        <Rla3DHero />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-2 mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
              <Shield className="w-3 h-3 mr-1" />
              Security Enhanced
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
              <Users className="w-3 h-3 mr-1" />
              OpenAI | Claude | Gemini
            </Badge>
            <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">
              <Zap className="w-3 h-3 mr-1" />
              Production Ready
            </Badge>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight animate-fade-in text-center" style={{ animationDelay: "0.2s" }}>
            RL-A2A Enhanced
          </h1>
          <div className="text-xl sm:text-2xl mb-6 text-muted-foreground font-medium animate-fade-in text-center max-w-4xl" style={{ animationDelay: "0.4s" }}>
            Secure Multi-AI Agent Communication System with Enterprise-Grade Security and Real-Time Visualization
          </div>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in text-center max-w-3xl" style={{ animationDelay: "0.5s" }}>
            Enhanced Agent-to-Agent protocol with multi-AI provider support (OpenAI, Claude, Gemini), 
            comprehensive security features, and production-ready architecture for enterprise applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" asChild>
              <a href="https://github.com/KunjShah01/RL-A2A" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Repository
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/KunjShah01/RL-A2A.github.io/wiki" target="_blank" rel="noopener noreferrer">
                Quick Start Guide
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features">
        <RlaFeatureCards />
      </section>

      {/* Architecture Options Section */}
      <section id="architecture">
        <RlaArchitectureOptions />
      </section>

      {/* AI Providers Section */}
      <section id="ai-providers">
        <RlaAiProviders />
      </section>

      {/* Stats Section */}
      <RlaStats />

      {/* How it Works / 3-Step Section */}
      <section id="how-it-works">
        <RlaHowItWorks />
      </section>

      {/* Security Features */}
      <section id="security">
        <RlaSecurityFeatures />
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
              <h3 className="font-bold text-xl mb-4">RL-A2A Enhanced</h3>
              <p className="text-muted-foreground">
                Building the future of multi-AI agent communication with enterprise-grade security, 
                real-time visualization, and production-ready architecture for next-generation applications.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Product</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#features" className="hover:underline">Features</a></li>
                  <li><a href="#architecture" className="hover:underline">Architecture</a></li>
                  <li><a href="#use-cases" className="hover:underline">Use Cases</a></li>
                  <li><a href="#security" className="hover:underline">Security</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Developers</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="https://github.com/KunjShah01/RL-A2A" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub Repository</a></li>
                  <li><a href="https://github.com/KunjShah01/RL-A2A/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="hover:underline">Documentation</a></li>
                  <li><a href="https://github.com/KunjShah01/RL-A2A/blob/main/MCP_GUIDE.md" target="_blank" rel="noopener noreferrer" className="hover:underline">MCP Guide</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Community</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="https://github.com/KunjShah01/RL-A2A" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a></li>
                  <li><a href="https://github.com/KunjShah01/RL-A2A/issues" target="_blank" rel="noopener noreferrer" className="hover:underline">Issues</a></li>
                  <li><a href="https://github.com/KunjShah01/RL-A2A/discussions" target="_blank" rel="noopener noreferrer" className="hover:underline">Discussions</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t">
            <div className="font-medium">© {new Date().getFullYear()} RL-A2A Enhanced — Secure Multi-AI Agent Communication</div>
            <nav className="flex gap-6 text-muted-foreground text-sm">
              <a className="hover:underline" href="https://github.com/KunjShah01/RL-A2A/blob/main/SECURITY.md" target="_blank" rel="noopener noreferrer">Security</a>
              <a className="hover:underline" href="#">Privacy</a>
              <a className="hover:underline" href="#">Terms</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
