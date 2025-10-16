import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface WeightData {
  date: string;
  weight: number;
}

interface WeightChartProps {
  data: WeightData[];
  goal: number;
}

const WeightChart = ({ data, goal }: WeightChartProps) => {
  const chartData = data.map(item => ({
    date: new Date(item.date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' }),
    weight: item.weight,
    goal: goal,
  }));

  return (
    <div className="w-full h-[300px] animate-fade-in">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.2} />
          <XAxis 
            dataKey="date" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
            domain={[80, 110]}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              color: 'hsl(var(--foreground))'
            }}
            labelStyle={{ color: 'hsl(var(--muted-foreground))' }}
          />
          <Line 
            type="monotone" 
            dataKey="weight" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--primary))', r: 5 }}
            activeDot={{ r: 8, fill: 'hsl(var(--primary))', stroke: 'hsl(var(--background))', strokeWidth: 3 }}
            name="Peso (kg)"
            animationDuration={2000}
            animationEasing="ease-in-out"
          />
          <Line 
            type="monotone" 
            dataKey="goal" 
            stroke="hsl(var(--primary))" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
            name="Objetivo (kg)"
            animationDuration={1500}
            animationEasing="ease-in-out"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeightChart;
