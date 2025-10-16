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
      <section className="relative overflow-hidden bg-gradient-hero border-b-2 border-primary/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        {/* Logo in top right corner */}
        <div className="absolute top-6 right-6 z-10 animate-fade-in">
          <img 
            src={logoImage} 
            alt="Proyecto Ghost Logo" 
            className="h-24 w-24 md:h-32 md:w-32 drop-shadow-[0_0_35px_rgba(250,215,7,0.9)] hover:scale-110 hover:rotate-6 transition-all duration-500"
          />
        </div>

        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-primary drop-shadow-[0_0_30px_rgba(250,215,7,0.5)] tracking-tight">
              Proyecto Ghost
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto font-medium tracking-wide">
              Documentando la transformación del Cristian a los 85 kg
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Initial Weight Card */}
        <Card className="p-8 bg-gradient-card border-2 border-primary/30 backdrop-blur-sm animate-pulse-glow animate-slide-up shadow-[0_0_40px_rgba(250,215,7,0.15)] hover:shadow-[0_0_60px_rgba(250,215,7,0.25)] transition-all duration-500">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-6 w-6 text-primary animate-pulse" />
                <span className="text-base text-muted-foreground font-medium">{formattedInitialDate}</span>
              </div>
              <h2 className="text-3xl font-extrabold text-foreground mb-3 tracking-tight">Peso Inicial</h2>
              <div className="flex items-baseline gap-3">
                <span className="text-7xl font-black text-primary drop-shadow-[0_0_20px_rgba(250,215,7,0.4)]">{initialWeight}</span>
                <span className="text-3xl text-muted-foreground font-bold">kg</span>
              </div>
            </div>
            <div className="h-px md:h-32 w-32 md:w-px bg-gradient-to-r md:bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
            <div className="text-center flex-1">
              <Target className="h-14 w-14 text-primary mx-auto mb-3 drop-shadow-[0_0_20px_rgba(250,215,7,0.4)]" />
              <p className="text-base text-muted-foreground mb-2 font-medium tracking-wide">Objetivo</p>
              <p className="text-5xl font-black text-primary drop-shadow-[0_0_20px_rgba(250,215,7,0.4)]">{goalWeight} kg</p>
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
        <Card className="p-8 bg-gradient-card border-2 border-primary/20 backdrop-blur-sm animate-slide-up shadow-[0_0_30px_rgba(250,215,7,0.1)] hover:shadow-[0_0_50px_rgba(250,215,7,0.2)] transition-all duration-500" style={{ animationDelay: '200ms' }}>
          <h2 className="text-3xl font-extrabold mb-8 text-foreground tracking-tight border-b-2 border-primary/30 pb-4">Evolución del Peso</h2>
          <WeightChart data={chartData} goal={goalWeight} />
        </Card>

        {/* Weighings Timeline */}
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold text-foreground animate-slide-up tracking-tight border-l-4 border-primary pl-4" style={{ animationDelay: '300ms' }}>
            Historial de Pesajes
          </h2>
          <div className="space-y-5">
            {weighings.map((weighing, index) => (
              <WeighingCard key={weighing.date} data={weighing} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer with love tag */}
      <footer className="mt-16 py-8 bg-gradient-card border-t-2 border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <div className="px-6 py-3 bg-gradient-primary rounded-lg border-2 border-primary/40 shadow-[0_0_30px_rgba(250,215,7,0.3)] hover:shadow-[0_0_50px_rgba(250,215,7,0.5)] transition-all duration-500 hover:scale-105">
              <p className="text-background font-black text-lg tracking-wider">
                hecho con amor x shays ✨
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
