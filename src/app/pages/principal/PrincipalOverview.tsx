import React from 'react';
import { AriaOrb } from '../../components/aria/AriaOrb';
import { Users, TrendingUp, DollarSign, UserCheck, Calendar, ArrowUpRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const feeData = [
  { month: 'Jan', collected: 8.2, target: 10 },
  { month: 'Feb', collected: 9.1, target: 10 },
  { month: 'Mar', collected: 8.4, target: 10 },
  { month: 'Apr', collected: 9.5, target: 10 },
  { month: 'May', collected: 8.8, target: 10 },
];

const classPerformance = [
  { class: '8A', score: 87 },
  { class: '8B', score: 82 },
  { class: '9A', score: 79 },
  { class: '9B', score: 85 },
  { class: '10A', score: 92 },
  { class: '10B', score: 88 },
];

const recentActivities = [
  { time: '10:30 AM', event: 'Class 9A Science exam completed', type: 'academic' },
  { time: '11:45 AM', event: 'New admission request from Parent Portal', type: 'admin' },
  { time: '12:15 PM', event: 'Teacher Meena marked attendance for 8B', type: 'attendance' },
  { time: '1:30 PM', event: 'Fee payment received: ₹24,500', type: 'financial' },
  { time: '2:00 PM', event: 'Library: 12 new books added', type: 'library' },
];

export const PrincipalOverview: React.FC = () => {
  return (
    <div className="p-6">
      {/* Hero Section */}
      <div
        className="glass-card rounded-3xl p-8 mb-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(6, 182, 212, 0.05))'
        }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2563EB]/10 to-transparent rounded-full blur-3xl" />

        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            Good Morning, Dr. Sharma! 👋
          </h1>
          <p className="text-slate-700 text-lg mb-6">Principal • Monday, February 23, 2026</p>

          <div className="grid grid-cols-4 gap-4">
            <div className="glass-card rounded-xl p-4">
              <Users className="w-6 h-6 text-[#2563EB] mb-2" />
              <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>1,247</p>
              <p className="text-xs text-slate-500">Total Students</p>
            </div>

            <div className="glass-card rounded-xl p-4">
              <Users className="w-6 h-6 text-[#2563EB] mb-2" />
              <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>30</p>
              <p className="text-xs text-slate-500">Total Faculty</p>
            </div>

            <div className="glass-card rounded-xl p-4">
              <UserCheck className="w-6 h-6 text-[#10B981] mb-2" />
              <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>94%</p>
              <p className="text-xs text-slate-500">Attendance Today</p>
            </div>

            <div className="glass-card rounded-xl p-4">
              <DollarSign className="w-6 h-6 text-[#F59E0B] mb-2" />
              <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>₹8.8L</p>
              <p className="text-xs text-slate-500">Fee Collection (This Month)</p>
            </div>

            <div className="glass-card rounded-xl p-4">
              <TrendingUp className="w-6 h-6 text-[#7C3AED] mb-2" />
              <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>87%</p>
              <p className="text-xs text-slate-500">Avg Performance</p>
            </div>
          </div>
        </div>
      </div>

      {/* ARIA Alerts */}
      <div className="glass-card rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <AriaOrb size="sm" animated />
          <h2 className="text-xl font-semibold text-slate-800">ARIA Priority Alerts</h2>
        </div>
        <div className="space-y-3">
          <div className="glass-card rounded-xl p-4 bg-[#F59E0B]/10 border border-[#F59E0B]/20">
            <p className="text-slate-800 mb-2">
              ⚠️ Class 9A attendance dropped 8% this week — 5 students flagged for consistent absences
            </p>
            <Button size="sm" className="bg-[#F59E0B] hover:bg-[#D97706] text-white">
              View Report
            </Button>
          </div>

          <div className="glass-card rounded-xl p-4 bg-[#F43F5E]/10 border border-[#F43F5E]/20">
            <p className="text-slate-800 mb-2">
              💰 Fee collection 16% below target — 47 reminder notifications ready to send
            </p>
            <Button size="sm" className="bg-[#F43F5E] hover:bg-[#DC2626] text-white">
              Send Now
            </Button>
          </div>

          <div className="glass-card rounded-xl p-4 bg-[#10B981]/10 border border-[#10B981]/20">
            <p className="text-slate-800">
              ✅ Teacher Priya Kumar's classes consistently score 12% above school average
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Fee Collection */}
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Fee Collection Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={feeData}>
              <defs>
                <linearGradient id="colorCollected" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  color: '#1E293B'
                }}
              />
              <Area
                type="monotone"
                dataKey="collected"
                stroke="#2563EB"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorCollected)"
              />
              <Area
                type="monotone"
                dataKey="target"
                stroke="#F59E0B"
                strokeWidth={2}
                strokeDasharray="5 5"
                fillOpacity={0}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Class Performance */}
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Class Performance</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={classPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="class" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  color: '#1E293B'
                }}
              />
              <Bar dataKey="score" fill="#10B981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="glass-card rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Recent School Activities</h2>
        <div className="space-y-3">
          {recentActivities.map((activity, idx) => (
            <div key={idx} className="flex items-center gap-4 glass-card rounded-xl p-4">
              <div className="w-16 text-center">
                <Calendar className="w-5 h-5 text-[#2563EB] mx-auto mb-1" />
                <p className="text-xs text-slate-500">{activity.time}</p>
              </div>
              <div className="flex-1">
                <p className="text-slate-800">{activity.event}</p>
              </div>
              <Button size="sm" variant="ghost" className="text-[#2563EB] hover:bg-[#2563EB]/10">
                View
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
