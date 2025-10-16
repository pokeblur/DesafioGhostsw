import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  unit?: string;
  highlight?: boolean;
}

const MetricCard = ({ icon: Icon, label, value, unit, highlight }: MetricCardProps) => {
  return (
    <Card className={`p-6 bg-gradient-card border-2 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(250,215,7,0.2)] ${highlight ? 'border-primary/40 shadow-[0_0_25px_rgba(250,215,7,0.15)]' : 'border-border/30'}`}>
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl transition-all duration-300 ${highlight ? 'bg-primary/15 shadow-[0_0_20px_rgba(250,215,7,0.2)]' : 'bg-muted/50'}`}>
          <Icon className={`h-7 w-7 ${highlight ? 'text-primary drop-shadow-[0_0_10px_rgba(250,215,7,0.6)]' : 'text-muted-foreground'}`} />
        </div>
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-2 font-semibold tracking-wide uppercase">{label}</p>
          <div className="flex items-baseline gap-2">
            <span className={`text-3xl font-black tracking-tight ${highlight ? 'text-primary drop-shadow-[0_0_15px_rgba(250,215,7,0.4)]' : 'text-foreground'}`}>
              {value}
            </span>
            {unit && <span className="text-base text-muted-foreground font-bold">{unit}</span>}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MetricCard;
