
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Layers, CheckCircle, Code } from "lucide-react";

const architectures = [
  {
    icon: <FileText className="h-8 w-8 text-green-500" />,
    title: "All-in-One (rla2a.py)",
    subtitle: "Recommended for Beginners",
    features: [
      "One command installation",
      "Auto-dependency management",
      "Self-contained deployment",
      "Complete system overview",
      "Multi-AI support built-in"
    ],
    useCases: ["Learning", "Prototyping", "Quick deployment"]
  },
  {
    icon: <Layers className="h-8 w-8 text-blue-500" />,
    title: "Modular (a2a_server.py)",
    subtitle: "Recommended for Development",
    features: [
      "Scalable microservice architecture",
      "Easy component extension",
      "Docker/container friendly",
      "Clear separation of concerns",
      "Custom agent creation"
    ],
    useCases: ["Production", "Custom development", "Enterprise"]
  }
];

export default function RlaArchitectureOptions() {
  return (
    <section className="relative z-10 mt-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-2 text-xs tracking-widest">
          Architecture Options
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Choose Your Development Approach
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          RL-A2A Enhanced offers flexible architecture options to match your development 
          needs and deployment requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {architectures.map((arch, i) => (
          <Card key={arch.title} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${0.15 * i}s` }}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                {arch.icon}
                <div>
                  <CardTitle className="text-xl">{arch.title}</CardTitle>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">{arch.subtitle}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {arch.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Code className="h-4 w-4 text-blue-500" />
                    Best For
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {arch.useCases.map((useCase, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {useCase}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
