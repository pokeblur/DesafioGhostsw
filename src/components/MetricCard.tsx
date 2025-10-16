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
    <Card className={`p-4 bg-gradient-card border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 ${highlight ? 'border-primary/50' : ''}`}>
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg ${highlight ? 'bg-primary/10' : 'bg-muted/50'}`}>
          <Icon className={`h-5 w-5 ${highlight ? 'text-primary' : 'text-muted-foreground'}`} />
        </div>
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{label}</p>
          <div className="flex items-baseline gap-1">
            <span className={`text-2xl font-bold ${highlight ? 'text-primary' : 'text-foreground'}`}>
              {value}
            </span>
            {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MetricCard;
