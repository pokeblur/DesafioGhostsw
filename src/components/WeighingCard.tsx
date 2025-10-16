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
      className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="h-5 w-5 text-primary" />
        <span className="text-lg font-semibold text-foreground">{formattedDate}</span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <Weight className="h-4 w-4 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Peso</p>
            <p className="text-xl font-bold text-primary">{data.weight} kg</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-accent" />
          <div>
            <p className="text-xs text-foreground/70">BMI</p>
            <p className="text-xl font-bold text-foreground">{data.bmi}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Droplets className="h-4 w-4 text-accent" />
          <div>
            <p className="text-xs text-foreground/70">Grasa Corporal</p>
            <p className="text-xl font-bold text-foreground">{data.bodyFat}%</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Heart className="h-4 w-4 text-accent" />
          <div>
            <p className="text-xs text-foreground/70">Músculo</p>
            <p className="text-xl font-bold text-foreground">{data.muscle}%</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Droplets className="h-4 w-4 text-accent" />
          <div>
            <p className="text-xs text-foreground/70">Grasa Visceral</p>
            <p className="text-xl font-bold text-foreground">{data.visceralFat}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-accent" />
          <div>
            <p className="text-xs text-foreground/70">Edad Corporal</p>
            <p className="text-xl font-bold text-foreground">{data.bodyAge}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WeighingCard;
