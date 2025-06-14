
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Zap, Users, Eye, Server, Cpu } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="text-green-500" />,
    title: "Enterprise Security",
    desc: "JWT authentication, rate limiting, CORS protection, and data validation.",
  },
  {
    icon: <Users className="text-blue-500" />,
    title: "Multi-AI Support",
    desc: "OpenAI, Claude, and Gemini integration with automatic fallback.",
  },
  {
    icon: <Zap className="text-orange-500" />,
    title: "Real-Time Communication",
    desc: "WebSocket-based instant agent communication with RL feedback.",
  },
  {
    icon: <Eye className="text-purple-500" />,
    title: "3D Visualization",
    desc: "Interactive Plotly dashboards with live monitoring and analytics.",
  },
  {
    icon: <Server className="text-indigo-500" />,
    title: "Production Ready",
    desc: "Docker support, auto-configuration, and scalable architecture.",
  },
  {
    icon: <Cpu className="text-pink-500" />,
    title: "MCP Integration",
    desc: "Model Context Protocol for seamless AI assistant integration.",
  },
];

export default function RlaFeatureCards() {
  return (
    <section className="relative z-10 mt-16 px-2 max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <Badge variant="secondary" className="mb-2 text-xs tracking-widest">
          Enhanced Features
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold animate-fade-in">
          Why RL-A2A Enhanced?
        </h2>
        <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
          Enterprise-grade multi-agent communication system with advanced security, 
          multiple AI providers, and production-ready architecture.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="rounded-xl bg-card/80 shadow-lg border border-muted/50 p-6 flex flex-col items-center text-center animate-fade-in hover:shadow-xl transition-shadow"
            style={{ animationDelay: `${0.1 * i + 0.1}s` }}
          >
            <div className="mb-4 p-3 rounded-full bg-muted/20">{f.icon}</div>
            <div className="font-semibold text-lg mb-2">{f.title}</div>
            <div className="text-muted-foreground text-sm">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
