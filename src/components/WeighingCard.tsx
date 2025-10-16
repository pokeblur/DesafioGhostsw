import { Card } from '@/components/ui/card';
import { Calendar, Weight, Activity, Heart, Droplets, User } from 'lucide-react';

interface WeighingData {
  date: string;
  weight: number;
  bmi: number;
  bodyFat: number;
  muscle: number;
  visceralFat: number;
  bodyAge: number;
}

interface WeighingCardProps {
  data: WeighingData;
  index: number;
}

const WeighingCard = ({ data, index }: WeighingCardProps) => {
  const formattedDate = new Date(data.date).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <Card 
      className="p-7 bg-gradient-card border-2 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 animate-slide-up hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(250,215,7,0.15)]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-primary/20">
        <Calendar className="h-6 w-6 text-primary drop-shadow-[0_0_10px_rgba(250,215,7,0.4)]" />
        <span className="text-xl font-extrabold text-foreground tracking-tight">{formattedDate}</span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-3 bg-primary/5 p-3 rounded-lg border border-primary/20 hover:bg-primary/10 transition-all duration-300">
          <Weight className="h-6 w-6 text-primary drop-shadow-[0_0_8px_rgba(250,215,7,0.5)]" />
          <div>
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Peso</p>
            <p className="text-2xl font-black text-primary drop-shadow-[0_0_10px_rgba(250,215,7,0.3)]">{data.weight} kg</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 bg-muted/10 p-3 rounded-lg border border-border/20 hover:bg-muted/20 transition-all duration-300">
          <Activity className="h-6 w-6 text-accent" />
          <div>
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">BMI</p>
            <p className="text-2xl font-black text-foreground">{data.bmi}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 bg-muted/10 p-3 rounded-lg border border-border/20 hover:bg-muted/20 transition-all duration-300">
          <Droplets className="h-6 w-6 text-accent" />
          <div>
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Grasa</p>
            <p className="text-2xl font-black text-foreground">{data.bodyFat}%</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 bg-muted/10 p-3 rounded-lg border border-border/20 hover:bg-muted/20 transition-all duration-300">
          <Heart className="h-6 w-6 text-accent" />
          <div>
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Músculo</p>
            <p className="text-2xl font-black text-foreground">{data.muscle}%</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 bg-muted/10 p-3 rounded-lg border border-border/20 hover:bg-muted/20 transition-all duration-300">
          <Droplets className="h-6 w-6 text-accent" />
          <div>
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">G. Visceral</p>
            <p className="text-2xl font-black text-foreground">{data.visceralFat}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 bg-muted/10 p-3 rounded-lg border border-border/20 hover:bg-muted/20 transition-all duration-300">
          <User className="h-6 w-6 text-accent" />
          <div>
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Edad Corp.</p>
            <p className="text-2xl font-black text-foreground">{data.bodyAge}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WeighingCard;
