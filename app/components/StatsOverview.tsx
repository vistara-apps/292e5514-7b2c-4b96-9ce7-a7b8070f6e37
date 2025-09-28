'use client';

import { TrendingUp, Users, Target, Zap } from 'lucide-react';

interface StatsOverviewProps {
  totalPredictions: number;
  activePredictions: number;
  totalUsers: number;
  totalVolume: number;
}

export function StatsOverview({
  totalPredictions,
  activePredictions,
  totalUsers,
  totalVolume
}: StatsOverviewProps) {
  const stats = [
    {
      label: 'Total Predictions',
      value: totalPredictions.toLocaleString(),
      icon: TrendingUp,
      color: 'text-accent',
    },
    {
      label: 'Active Markets',
      value: activePredictions.toLocaleString(),
      icon: Zap,
      color: 'text-success',
    },
    {
      label: 'Total Users',
      value: totalUsers.toLocaleString(),
      icon: Users,
      color: 'text-primary',
    },
    {
      label: 'Volume (ETH)',
      value: totalVolume.toFixed(2),
      icon: Target,
      color: 'text-warning',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="metric-card">
          <div className="flex items-center justify-center mb-2">
            <stat.icon className={`w-6 h-6 ${stat.color}`} />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-text-secondary">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
