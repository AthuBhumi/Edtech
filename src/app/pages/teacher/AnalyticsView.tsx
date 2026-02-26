import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const attendanceData = [
  { month: 'Sep', rate: 94 },
  { month: 'Oct', rate: 96 },
  { month: 'Nov', rate: 92 },
  { month: 'Dec', rate: 89 },
  { month: 'Jan', rate: 95 },
  { month: 'Feb', rate: 93 },
];

const performanceData = [
  { class: '8A', avg: 87 },
  { class: '8B', avg: 82 },
  { class: '9A', avg: 79 },
];

const subjectPerformance = [
  { name: 'Math', value: 87 },
  { name: 'Science', value: 92 },
  { name: 'English', value: 88 },
];

const COLORS = ['#2563EB', '#10B981', '#F59E0B'];

const stats = [
  { label: 'Avg Performance', value: '83%', icon: Award, color: '#10B981' },
  { label: 'Classes Taught', value: '156', icon: Users, color: '#2563EB' },
  { label: 'Avg Attendance', value: '93%', icon: TrendingUp, color: '#F59E0B' },
  { label: 'Teaching Hours', value: '420', icon: Clock, color: '#7C3AED' },
];

export const AnalyticsView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Teaching Analytics 📈
        </h1>
        <p className="text-white/60 text-sm lg:text-base">Insights into your teaching performance</p>
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
          <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">Attendance Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={attendanceData}>
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
              <Line type="monotone" dataKey="rate" stroke="#10B981" strokeWidth={2} dot={{ fill: '#10B981' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">Class Performance</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="class" stroke="#9CA3AF" tick={{ fontSize: 12 }} />
              <YAxis stroke="#9CA3AF" tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#111827', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Bar dataKey="avg" fill="#2563EB" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
        <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">Subject-wise Performance</h2>
        <div className="flex justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={subjectPerformance}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {subjectPerformance.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#111827', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
