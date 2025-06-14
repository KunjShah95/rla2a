
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    value: "99.9%",
    label: "Uptime",
    description: "Reliable agent communication"
  },
  {
    value: "<10ms",
    label: "Latency",
    description: "Lightning-fast response times"
  },
  {
    value: "256-bit",
    label: "Encryption",
    description: "Military-grade security"
  },
  {
    value: "1M+",
    label: "Transactions",
    description: "Processed daily"
  }
];

export default function RlaStats() {
  return (
    <section className="relative z-10 mt-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-2 text-xs tracking-widest">
          Performance
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Built for Scale
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          RLA2A Protocol delivers enterprise-grade performance with the reliability 
          and security that modern AI agents demand.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${0.1 * i}s` }}>
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
