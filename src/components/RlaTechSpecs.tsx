
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Lock, Zap } from "lucide-react";

const techSpecs = [
  {
    icon: <Code className="h-6 w-6 text-blue-500" />,
    title: "Protocol Standards",
    specs: [
      "WebSocket & HTTP/2 support",
      "JSON-RPC 2.0 compatible",
      "RESTful API architecture",
      "GraphQL query support"
    ]
  },
  {
    icon: <Lock className="h-6 w-6 text-green-500" />,
    title: "Security Features",
    specs: [
      "AES-256 encryption",
      "RSA-4096 key exchange",
      "OAuth 2.0 / JWT tokens",
      "Rate limiting & DDoS protection"
    ]
  },
  {
    icon: <Database className="h-6 w-6 text-purple-500" />,
    title: "Data Management",
    specs: [
      "MongoDB & PostgreSQL",
      "Redis caching layer",
      "Event sourcing patterns",
      "GDPR compliance ready"
    ]
  },
  {
    icon: <Zap className="h-6 w-6 text-orange-500" />,
    title: "Performance",
    specs: [
      "Horizontal auto-scaling",
      "Load balancing",
      "Edge computing support",
      "99.9% SLA guarantee"
    ]
  }
];

export default function RlaTechSpecs() {
  return (
    <section className="relative z-10 mt-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-2 text-xs tracking-widest">
          Technical Specifications
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Enterprise-Grade Architecture
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Built on proven technologies with modern standards for security, 
          performance, and scalability at its core.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techSpecs.map((spec, i) => (
          <Card key={spec.title} className="animate-fade-in" style={{ animationDelay: `${0.15 * i}s` }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                {spec.icon}
                <CardTitle className="text-xl">{spec.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {spec.specs.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm">{item}</span>
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
