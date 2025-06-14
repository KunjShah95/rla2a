
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Building2, Cpu, Globe, ShoppingCart, Workflow } from "lucide-react";

const useCases = [
  {
    icon: <Bot className="h-8 w-8 text-blue-500" />,
    title: "AI Assistant Networks",
    description: "Connect multiple AI assistants for complex task coordination and knowledge sharing across different domains.",
    features: ["Multi-agent collaboration", "Knowledge synchronization", "Task delegation"]
  },
  {
    icon: <Building2 className="h-8 w-8 text-green-500" />,
    title: "Enterprise Automation",
    description: "Streamline business processes with intelligent agent-to-agent communication for workflow automation.",
    features: ["Process automation", "Data synchronization", "Enterprise integration"]
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-purple-500" />,
    title: "E-commerce Intelligence",
    description: "Enable smart shopping agents to communicate with inventory, pricing, and recommendation systems.",
    features: ["Dynamic pricing", "Inventory management", "Personalized recommendations"]
  },
  {
    icon: <Globe className="h-8 w-8 text-orange-500" />,
    title: "IoT Device Networks",
    description: "Facilitate communication between smart devices and AI agents for intelligent home and city management.",
    features: ["Device orchestration", "Predictive maintenance", "Energy optimization"]
  },
  {
    icon: <Cpu className="h-8 w-8 text-pink-500" />,
    title: "ML Model Coordination",
    description: "Coordinate multiple machine learning models for complex inference and decision-making processes.",
    features: ["Model ensemble", "Real-time inference", "Performance optimization"]
  },
  {
    icon: <Workflow className="h-8 w-8 text-indigo-500" />,
    title: "Workflow Orchestration",
    description: "Manage complex workflows with intelligent agents that can adapt and optimize processes in real-time.",
    features: ["Dynamic workflows", "Error handling", "Performance monitoring"]
  }
];

export default function RlaUseCases() {
  return (
    <section className="relative z-10 mt-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-2 text-xs tracking-widest">
          Use Cases
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Powering the Future of AI
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          From enterprise automation to IoT networks, RLA2A Protocol enables seamless 
          communication between AI agents across diverse industries and applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {useCases.map((useCase, i) => (
          <Card key={useCase.title} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${0.1 * i}s` }}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                {useCase.icon}
                <CardTitle className="text-lg">{useCase.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{useCase.description}</p>
              <ul className="space-y-1">
                {useCase.features.map((feature, idx) => (
                  <li key={idx} className="text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
