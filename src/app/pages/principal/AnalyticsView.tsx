import React from 'react';
import { TrendingUp, Users, BookOpen, Award, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Badge } from '../../components/ui/badge';

const enrollmentData = [
  { month: 'Jan', students: 1180, target: 1200 },
  { month: 'Feb', students: 1205, target: 1200 },
  { month: 'Mar', students: 1220, target: 1250 },
  { month: 'Apr', students: 1235, target: 1250 },
  { month: 'May', students: 1247, target: 1300 },
];

const subjectPerformance = [
  { subject: 'Math', avgScore: 82, passRate: 94 },
  { subject: 'Science', avgScore: 85, passRate: 96 },
  { subject: 'English', avgScore: 88, passRate: 98 },
  { subject: 'Hindi', avgScore: 79, passRate: 92 },
  { subject: 'Social', avgScore: 83, passRate: 95 },
  { subject: 'Comp Sci', avgScore: 91, passRate: 99 },
];

const attendanceData = [
  { day: 'Mon', attendance: 94 },
  { day: 'Tue', attendance: 93 },
  { day: 'Wed', attendance: 95 },
  { day: 'Thu', attendance: 92 },
  { day: 'Fri', attendance: 89 },
];

const gradeDistribution = [
  { grade: 'A+', students: 180, color: '#10B981' },
  { grade: 'A', students: 320, color: '#2563EB' },
  { grade: 'B', students: 410, color: '#F59E0B' },
  { grade: 'C', students: 250, color: '#F43F5E' },
  { grade: 'D', students: 87, color: '#7C3AED' },
];

const metrics = [
  { label: 'Total Revenue', value: '₹1.2Cr', change: '+12%', trend: 'up', icon: DollarSign, color: '#10B981' },
  { label: 'Active Students', value: '1,247', change: '+5.2%', trend: 'up', icon: Users, color: '#2563EB' },
  { label: 'Avg Attendance', value: '92.6%', change: '-1.2%', trend: 'down', icon: BookOpen, color: '#F59E0B' },
  { label: 'Pass Rate', value: '95.8%', change: '+2.1%', trend: 'up', icon: Award, color: '#7C3AED' },
];

export const AnalyticsView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          School Analytics 📊
        </h1>
        <p className="text-slate-500 text-sm lg:text-base">Comprehensive performance metrics and insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
        {metrics.map((metric, idx) => (
          <div key={idx} className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <metric.icon className="w-6 h-6 lg:w-8 lg:h-8" style={{ color: metric.color }} />
              <Badge className={`${
                metric.trend === 'up' ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#F43F5E]/20 text-[#F43F5E]'
              } border-none text-xs`}>
                {metric.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {metric.change}
              </Badge>
            </div>
            <p className="text-xl lg:text-2xl font-bold text-slate-800 mb-1" style={{ fontFamily: 'var(--font-mono)' }}>
              {metric.value}
            </p>
            <p className="text-xs text-slate-500">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
        {/* Enrollment Trend */}
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-slate-800 mb-4">Enrollment Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={enrollmentData}>
              <defs>
                <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                </linearGradient>
              </defs>
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
              <Area type="monotone" dataKey="students" stroke="#2563EB" strokeWidth={2} fillOpacity={1} fill="url(#colorStudents)" />
              <Area type="monotone" dataKey="target" stroke="#F59E0B" strokeWidth={2} strokeDasharray="5 5" fillOpacity={0} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Subject Performance */}
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-slate-800 mb-4">Subject Performance</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={subjectPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="subject" stroke="#9CA3AF" tick={{ fontSize: 11 }} />
              <YAxis stroke="#9CA3AF" tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  color: '#1E293B'
                }} 
              />
              <Bar dataKey="avgScore" fill="#2563EB" radius={[8, 8, 0, 0]} />
              <Bar dataKey="passRate" fill="#10B981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Attendance */}
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-slate-800 mb-4">Weekly Attendance Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="day" stroke="#9CA3AF" tick={{ fontSize: 12 }} />
              <YAxis stroke="#9CA3AF" domain={[85, 100]} tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  color: '#1E293B'
                }} 
              />
              <Line type="monotone" dataKey="attendance" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Grade Distribution */}
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-slate-800 mb-4">Grade Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={gradeDistribution}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="students"
                label={({ grade, students }) => `${grade}: ${students}`}
              >
                {gradeDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  color: '#1E293B'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
