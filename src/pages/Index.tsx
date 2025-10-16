import { Target, TrendingDown, Calendar, Weight, Activity } from 'lucide-react';
import { Card } from '@/components/ui/card';
import WeightChart from '@/components/WeightChart';
import MetricCard from '@/components/MetricCard';
import WeighingCard from '@/components/WeighingCard';
import logoImage from '@/assets/proyecto-ghost-logo.png';

const Index = () => {
  const initialWeight = 103.2;
  const goalWeight = 85.0;
  const initialDate = '2025-09-25';
  
  const weighings = [
    {
      date: '2025-09-30',
      weight: 102.3,
      bmi: 33.8,
      bodyFat: 34.3,
      muscle: 31.9,
      visceralFat: 14,
      bodyAge: 64
    },
    {
      date: '2025-10-05',
      weight: 101.3,
      bmi: 33.5,
      bodyFat: 36.9,
      muscle: 30.3,
      visceralFat: 15,
      bodyAge: 64
    },
    {
      date: '2025-10-10',
      weight: 100.8,
      bmi: 33.3,
      bodyFat: 36.7,
      muscle: 30.4,
      visceralFat: 15.0,
      bodyAge: 64
    },
    {
      date: '2025-10-15',
      weight: 99.8,
      bmi: 33,
      bodyFat: 36.6,
      muscle: 30.5,
      visceralFat: 14,
      bodyAge: 63
    }
  ];

  const currentWeight = weighings[weighings.length - 1].weight;
  const weightLost = initialWeight - currentWeight;
  const progressPercentage = ((initialWeight - currentWeight) / (initialWeight - goalWeight) * 100).toFixed(1);
  
  const chartData = [
    { date: initialDate, weight: initialWeight },
    ...weighings.map(w => ({ date: w.date, weight: w.weight }))
  ];

  const formattedInitialDate = new Date(initialDate).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        {/* Logo in top right corner */}
        <div className="absolute top-6 right-6 z-10 animate-fade-in">
          <img 
            src={logoImage} 
            alt="Proyecto Ghost Logo" 
            className="h-24 w-24 md:h-32 md:w-32 drop-shadow-[0_0_25px_rgba(250,215,7,0.8)] hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-secondary">
              Proyecto Ghost
            </h1>
            <p className="text-xl text-foreground/90 max-w-2xl mx-auto">
              Documentando la transformación del Cristian a los 85 kg
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Initial Weight Card */}
        <Card className="p-8 bg-gradient-card border-primary/50 backdrop-blur-sm animate-pulse-glow animate-slide-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">{formattedInitialDate}</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Peso Inicial</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-bold text-primary">{initialWeight}</span>
                <span className="text-2xl text-muted-foreground">kg</span>
              </div>
            </div>
            <div className="h-px md:h-24 w-24 md:w-px bg-border"></div>
            <div className="text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-1">Objetivo</p>
              <p className="text-4xl font-bold text-primary">{goalWeight} kg</p>
            </div>
          </div>
        </Card>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <MetricCard
            icon={Weight}
            label="Peso Actual"
            value={currentWeight}
            unit="kg"
            highlight
          />
          <MetricCard
            icon={TrendingDown}
            label="Peso Perdido"
            value={weightLost.toFixed(1)}
            unit="kg"
            highlight
          />
          <MetricCard
            icon={Activity}
            label="Progreso"
            value={progressPercentage}
            unit="%"
            highlight
          />
        </div>

        {/* Weight Evolution Chart */}
        <Card className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '200ms' }}>
          <h2 className="text-2xl font-bold mb-6 text-foreground">Evolución del Peso</h2>
          <WeightChart data={chartData} goal={goalWeight} />
        </Card>

        {/* Weighings Timeline */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground animate-slide-up" style={{ animationDelay: '300ms' }}>
            Historial de Pesajes
          </h2>
          <div className="space-y-4">
            {weighings.map((weighing, index) => (
              <WeighingCard key={weighing.date} data={weighing} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
