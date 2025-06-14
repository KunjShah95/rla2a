
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Zap, Command, Share2, Clock } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="text-indigo-500" />,
    title: "Secure",
    desc: "End-to-end encrypted agent communication.",
  },
  {
    icon: <Zap className="text-pink-500" />,
    title: "Instant",
    desc: "Real-time agent-to-agent transactions & messaging.",
  },
  {
    icon: <Command className="text-blue-500" />,
    title: "API-First",
    desc: "Robust, developer-friendly REST & WebSocket APIs.",
  },
  {
    icon: <Share2 className="text-green-500" />,
    title: "Interoperable",
    desc: "Works across diverse agent platforms and clients.",
  },
  {
    icon: <Clock className="text-orange-500" />,
    title: "Auditable",
    desc: "Verifiable protocol with transparent event logs.",
  },
];

export default function RlaFeatureCards() {
  return (
    <section className="relative z-10 mt-16 px-2 max-w-5xl mx-auto">
      <div className="mb-8 text-center">
        <Badge variant="secondary" className="mb-2 text-xs tracking-widest">
          Features
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold animate-fade-in">
          Why RLA2A Protocol?
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="rounded-xl bg-card/80 shadow-lg border border-muted/50 p-6 flex flex-col items-center text-center animate-fade-in"
            style={{ animationDelay: `${0.15 * i + 0.1}s` }}
          >
            <div className="mb-3">{f.icon}</div>
            <div className="font-semibold text-lg">{f.title}</div>
            <div className="text-muted-foreground text-sm mt-2">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
