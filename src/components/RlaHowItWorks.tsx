
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, ShieldCheck, Command } from "lucide-react";

export default function RlaHowItWorks() {
  return (
    <section className="relative z-10 mt-20 max-w-4xl mx-auto px-3">
      <div className="text-center mb-8">
        <Badge variant="secondary" className="mb-2 text-xs tracking-widest">
          How it works
        </Badge>
        <h2 className="text-3xl font-bold">Agent Communication, Simplified</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 flex flex-col gap-8">
          <Step
            icon={<Command className="text-blue-500" />}
            title="Registration"
            text="Digital agents register with unique cryptographic IDs."
          />
          <Step
            icon={<ShieldCheck className="text-indigo-500" />}
            title="Handshake"
            text="Agents establish encrypted channels using the protocol."
          />
          <Step
            icon={<Zap className="text-pink-500" />}
            title="Exchange"
            text="Agents send and receive verified, real-time instructions."
          />
        </div>
        <div className="flex-1 flex items-center justify-center w-full h-56 md:h-72">
          <AnimatedGraphic />
        </div>
      </div>
    </section>
  );
}

function Step({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-3 animate-fade-in">
      <div>{icon}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-muted-foreground text-sm">{text}</div>
      </div>
    </div>
  );
}

// Simple animated SVG for illustration
function AnimatedGraphic() {
  return (
    <svg className="w-full h-full" viewBox="0 0 210 210" fill="none">
      <circle cx="105" cy="105" r="75" fill="#818cf8" fillOpacity="0.22" />
      <g>
        <circle cx="105" cy="50" r="16" fill="#f472b6" className="animate-[pulse_1.5s_infinite]" />
        <circle cx="170" cy="120" r="13" fill="#38bdf8" className="animate-[pulse_2s_infinite]" />
        <circle cx="40" cy="145" r="11" fill="#34d399" className="animate-[pulse_1.8s_infinite]" />
        <ArrowRight x={88} y={58} className="absolute text-indigo-400" />
        <ArrowRight x={125} y={121} className="absolute text-blue-300" />
      </g>
    </svg>
  );
}
