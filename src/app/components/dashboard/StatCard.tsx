import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change?: {
    value: string;
    positive: boolean;
  };
  progress?: number;
  color?: 'blue' | 'emerald' | 'amber' | 'violet';
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  change,
  progress,
  color = 'blue'
}) => {
  const colorClasses = {
    blue: 'from-[#2563EB]/20 to-[#2563EB]/5 text-[#2563EB]',
    emerald: 'from-[#10B981]/20 to-[#10B981]/5 text-[#10B981]',
    amber: 'from-[#F59E0B]/20 to-[#F59E0B]/5 text-[#F59E0B]',
    violet: 'from-[#7C3AED]/20 to-[#7C3AED]/5 text-[#7C3AED]'
  };

  return (
    <div className="glass-card rounded-2xl p-6 glass-card-hover">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-slate-500 mb-1">{title}</p>
          <h3 
            className="font-mono text-3xl font-bold text-slate-800"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {value}
          </h3>
        </div>
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>

      {change && (
        <div className="flex items-center gap-2">
          <span className={`text-sm ${change.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
            {change.positive ? '↑' : '↓'} {change.value}
          </span>
          <span className="text-xs text-slate-400">vs last week</span>
        </div>
      )}

      {progress !== undefined && (
        <div className="mt-4">
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${colorClasses[color]} transition-all duration-500`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
