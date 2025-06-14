
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, AlertTriangle, Key, Server } from "lucide-react";

const securityFeatures = [
  {
    icon: <Lock className="h-6 w-6 text-green-500" />,
    title: "JWT Authentication",
    description: "Secure token-based authentication system with automatic session management",
    details: ["Token-based access control", "Automatic session cleanup", "Configurable expiration"]
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-500" />,
    title: "Rate Limiting",
    description: "Configurable request throttling to prevent abuse and ensure system stability",
    details: ["Per-endpoint rate limits", "Configurable thresholds", "Automatic DDoS protection"]
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-orange-500" />,
    title: "Data Validation",
    description: "Comprehensive input sanitization and validation with size limits",
    details: ["Input sanitization", "Size limit enforcement", "Data poisoning protection"]
  },
  {
    icon: <Server className="h-6 w-6 text-purple-500" />,
    title: "CORS Protection",
    description: "Configurable Cross-Origin Resource Sharing with trusted host validation",
    details: ["Origin validation", "Trusted host lists", "Secure headers"]
  },
  {
    icon: <Key className="h-6 w-6 text-indigo-500" />,
    title: "Secure Sessions",
    description: "Advanced session management with automatic timeout and cleanup",
    details: ["Session encryption", "Automatic timeout", "Secure cookie handling"]
  },
  {
    icon: <Eye className="h-6 w-6 text-pink-500" />,
    title: "Security Monitoring",
    description: "Real-time security dashboard with metrics and alerts",
    details: ["Real-time monitoring", "Security alerts", "Comprehensive logging"]
  }
];

export default function RlaSecurityFeatures() {
  return (
    <section className="relative z-10 mt-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-2 text-xs tracking-widest">
          Enterprise Security
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Built-in Security from the Ground Up
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          RL-A2A Enhanced implements comprehensive security measures to protect your 
          multi-agent systems against threats and ensure enterprise-grade reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {securityFeatures.map((feature, i) => (
          <Card key={feature.title} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${0.1 * i}s` }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                {feature.icon}
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-xl p-8 border border-green-200 dark:border-green-800">
        <div className="text-center">
          <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Security-First Architecture</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every component of RL-A2A Enhanced is designed with security as a primary concern. 
            From authentication to data handling, we implement industry best practices to 
            ensure your agent communications remain secure and reliable.
          </p>
        </div>
      </div>
    </section>
  );
}
