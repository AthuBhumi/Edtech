import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Award, BookOpen, Target } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';

const monthlyPerformance = [
  { month: 'Sep', score: 82 },
  { month: 'Oct', score: 85 },
  { month: 'Nov', score: 83 },
  { month: 'Dec', score: 87 },
  { month: 'Jan', score: 89 },
  { month: 'Feb', score: 92 },
];

const subjectProgress = [
  { subject: 'Math', score: 87 },
  { subject: 'Science', score: 92 },
  { subject: 'English', score: 88 },
  { subject: 'Hindi', score: 79 },
  { subject: 'Social Sci', score: 85 },
  { subject: 'Computer', score: 94 },
];

const strengths = [
  { area: 'Problem Solving', level: 92 },
  { area: 'Scientific Thinking', level: 88 },
  { area: 'Communication', level: 85 },
  { area: 'Analytical Skills', level: 90 },
];

const improvements = [
  { area: 'Grammar', current: 75, target: 85 },
  { area: 'Speed Math', current: 70, target: 80 },
  { area: 'Essay Writing', current: 78, target: 88 },
];

const stats = [
  { label: 'Overall Score', value: '87.5%', icon: Award, color: '#10B981' },
  { label: 'Class Rank', value: '#8', icon: TrendingUp, color: '#2563EB' },
  { label: 'Attendance', value: '96%', icon: Target, color: '#F59E0B' },
  { label: 'Assignments', value: '42/45', icon: BookOpen, color: '#7C3AED' },
];

export const PerformanceView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          My Performance 📊
        </h1>
        <p className="text-white/60 text-sm lg:text-base">Track your academic progress</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 mb-3" style={{ color: stat.color }} />
            <p className="text-xl lg:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>
              {stat.value}
            </p>
            <p className="text-xs text-white/60">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">Performance Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="#9CA3AF" tick={{ fontSize: 12 }} />
              <YAxis stroke="#9CA3AF" tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#111827', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Line type="monotone" dataKey="score" stroke="#10B981" strokeWidth={2} dot={{ fill: '#10B981' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">Subject-wise Scores</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={subjectProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="subject" stroke="#9CA3AF" tick={{ fontSize: 11 }} />
              <YAxis stroke="#9CA3AF" tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#111827', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Bar dataKey="score" fill="#2563EB" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Your Strengths 💪</h2>
          <div className="space-y-4">
            {strengths.map((strength, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-white">{strength.area}</span>
                  <Badge className="bg-[#10B981]/20 text-[#10B981] border-none text-xs">
                    {strength.level}%
                  </Badge>
                </div>
                <Progress value={strength.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Areas to Improve 🎯</h2>
          <div className="space-y-4">
            {improvements.map((item, idx) => (
              <div key={idx} className="glass-card rounded-xl p-3">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-white font-medium">{item.area}</span>
                  <span className="text-xs text-white/60">Target: {item.target}%</span>
                </div>
                <div className="flex justify-between mb-2 text-xs">
                  <span className="text-white/60">Current</span>
                  <span className="text-white">{item.current}%</span>
                </div>
                <Progress value={item.current} className="h-2 mb-1" />
                <p className="text-xs text-[#F59E0B] mt-1">
                  +{item.target - item.current}% to reach goal
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
