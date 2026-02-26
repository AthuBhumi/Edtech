import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Award, Users, BookOpen } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';

const arjunProgress = [
  { month: 'Sep', score: 82 },
  { month: 'Oct', score: 85 },
  { month: 'Nov', score: 83 },
  { month: 'Dec', score: 87 },
  { month: 'Jan', score: 89 },
  { month: 'Feb', score: 87 },
];

const priyaProgress = [
  { month: 'Sep', score: 88 },
  { month: 'Oct', score: 90 },
  { month: 'Nov', score: 89 },
  { month: 'Dec', score: 91 },
  { month: 'Jan', score: 92 },
  { month: 'Feb', score: 91 },
];

const subjectComparison = [
  { subject: 'Math', arjun: 87, priya: 93 },
  { subject: 'Science', arjun: 92, priya: 95 },
  { subject: 'English', arjun: 88, priya: 89 },
  { subject: 'Hindi', arjun: 79, priya: 85 },
];

export const ProgressView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Academic Progress 📈
        </h1>
        <p className="text-slate-500 text-sm lg:text-base">Track your children's performance over time</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Arjun's Progress (Class 8B)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={arjunProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="month" stroke="#9CA3AF" tick={{ fontSize: 12 }} />
              <YAxis stroke="#9CA3AF" tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  color: '#1E293B'
                }} 
              />
              <Line type="monotone" dataKey="score" stroke="#2563EB" strokeWidth={2} dot={{ fill: '#2563EB' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Priya's Progress (Class 6A)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={priyaProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="month" stroke="#9CA3AF" tick={{ fontSize: 12 }} />
              <YAxis stroke="#9CA3AF" tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  color: '#1E293B'
                }} 
              />
              <Line type="monotone" dataKey="score" stroke="#10B981" strokeWidth={2} dot={{ fill: '#10B981' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6 mb-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Subject-wise Comparison</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={subjectComparison}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
            <XAxis dataKey="subject" stroke="#9CA3AF" tick={{ fontSize: 12 }} />
            <YAxis stroke="#9CA3AF" tick={{ fontSize: 12 }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#FFFFFF', 
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                color: '#1E293B'
              }} 
            />
            <Bar dataKey="arjun" fill="#2563EB" radius={[8, 8, 0, 0]} name="Arjun" />
            <Bar dataKey="priya" fill="#10B981" radius={[8, 8, 0, 0]} name="Priya" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Arjun's Areas</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-slate-800">Strong: Science</span>
                <Badge className="bg-[#10B981]/20 text-[#10B981] border-none text-xs">92%</Badge>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-slate-800">Needs Improvement: Hindi</span>
                <Badge className="bg-[#F59E0B]/20 text-[#F59E0B] border-none text-xs">79%</Badge>
              </div>
              <Progress value={79} className="h-2" />
            </div>
          </div>
        </div>

        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Priya's Areas</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-slate-800">Strong: Science</span>
                <Badge className="bg-[#10B981]/20 text-[#10B981] border-none text-xs">95%</Badge>
              </div>
              <Progress value={95} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-slate-800">Improving: Hindi</span>
                <Badge className="bg-[#2563EB]/20 text-[#2563EB] border-none text-xs">85%</Badge>
              </div>
              <Progress value={85} className="h-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
