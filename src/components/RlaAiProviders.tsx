
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap, Search, Shield } from "lucide-react";

const providers = [
  {
    icon: <Zap className="h-6 w-6 text-green-500" />,
    name: "OpenAI GPT-4o-mini",
    description: "Fast, efficient general intelligence with robust API support",
    features: ["High-speed responses", "Cost-effective", "Reliable uptime", "Comprehensive knowledge"],
    status: "Active"
  },
  {
    icon: <Brain className="h-6 w-6 text-purple-500" />,
    name: "Anthropic Claude",
    description: "Advanced reasoning and safety-focused AI with superior analysis",
    features: ["Advanced reasoning", "Safety-focused", "Context awareness", "Ethical guidelines"],
    status: "Active"
  },
  {
    icon: <Search className="h-6 w-6 text-orange-500" />,
    name: "Google Gemini",
    description: "Multimodal AI with broad knowledge and real-time capabilities",
    features: ["Multimodal support", "Real-time data", "Broad knowledge", "Integration ready"],
    status: "Active"
  }
];

const systemFeatures = [
  {
    icon: <Shield className="h-5 w-5 text-blue-500" />,
    title: "Automatic Fallback",
    description: "Seamlessly switches providers if one fails"
  },
  {
    icon: <Zap className="h-5 w-5 text-green-500" />,
    title: "Performance Tracking",
    description: "Monitor success rates and response times"
  },
  {
    icon: <Brain className="h-5 w-5 text-purple-500" />,
    title: "Smart Routing",
    description: "Route requests to optimal AI provider"
  }
];

export default function RlaAiProviders() {
  return (
    <section className="relative z-10 mt-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-2 text-xs tracking-widest">
          Multi-AI Intelligence
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Powered by Leading AI Providers
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          RL-A2A Enhanced integrates with multiple AI providers to ensure reliability, 
          performance, and access to the best AI capabilities for your agents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {providers.map((provider, i) => (
          <Card key={provider.name} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${0.1 * i}s` }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {provider.icon}
                  <div>
                    <CardTitle className="text-lg">{provider.name}</CardTitle>
                    <Badge variant="outline" className="text-xs mt-1 bg-green-50 text-green-700 border-green-200">
                      {provider.status}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{provider.description}</p>
              <ul className="space-y-2">
                {provider.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-muted/30 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-center mb-6">System Intelligence Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {systemFeatures.map((feature, i) => (
            <div key={feature.title} className="text-center animate-fade-in" style={{ animationDelay: `${0.1 * i + 0.3}s` }}>
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-background shadow-sm">
                  {feature.icon}
                </div>
              </div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
