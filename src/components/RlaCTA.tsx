
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github, BookOpen, Play } from "lucide-react";

export default function RlaCTA() {
  return (
    <section className="relative z-10 mt-20 px-4 max-w-4xl mx-auto">
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-100">
        <CardContent className="p-8 text-center">
          <Badge variant="secondary" className="mb-4 text-xs tracking-widest">
            Get Started
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your AI Infrastructure?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of developers and enterprises already using RLA2A Protocol 
            to build the next generation of intelligent applications.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="group" asChild>
              <a href="https://github.com/rla2a/protocol" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Documentation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Play className="w-4 h-4 mr-2" />
              Quick Start Guide
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-blue-200">
            <p className="text-sm text-muted-foreground">
              Open source • MIT License • Community driven
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
