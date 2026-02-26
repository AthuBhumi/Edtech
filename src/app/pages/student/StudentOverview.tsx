import React from 'react';
import { AriaOrb } from '../../components/aria/AriaOrb';
import { Flame, Clock, BookOpen, CheckCircle, AlertCircle, Bus, Wallet, TrendingUp } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

const todaySchedule = [
  { time: '8:00 - 8:45', subject: 'Mathematics', teacher: 'Ms. Priya Nair', room: 'A-201', status: 'completed' },
  { time: '8:45 - 9:30', subject: 'Science', teacher: 'Mr. Rahul Kumar', room: 'Lab-2', status: 'completed' },
  { time: '10:00 - 10:45', subject: 'English', teacher: 'Mrs. Sunita Desai', room: 'B-105', status: 'current' },
  { time: '11:00 - 11:45', subject: 'History', teacher: 'Mr. Arjun Singh', room: 'C-302', status: 'upcoming' },
  { time: '12:00 - 12:45', subject: 'Physical Education', teacher: 'Coach Ravi', room: 'Ground', status: 'upcoming' },
];

const homework = [
  {
    id: 1,
    title: 'Quadratic Equations - Exercise 4.2',
    subject: 'Mathematics',
    dueDate: 'Tomorrow',
    priority: 'high',
    status: 'pending'
  },
  {
    id: 2,
    title: 'Photosynthesis Lab Report',
    subject: 'Science',
    dueDate: 'Feb 26',
    priority: 'medium',
    status: 'pending'
  },
  {
    id: 3,
    title: 'Essay on Freedom Struggle',
    subject: 'History',
    dueDate: 'Feb 28',
    priority: 'low',
    status: 'pending'
  },
];

const performanceData = [
  { subject: 'Math', thisQuarter: 85, lastQuarter: 78 },
  { subject: 'Science', thisQuarter: 88, lastQuarter: 82 },
  { subject: 'English', thisQuarter: 92, lastQuarter: 90 },
  { subject: 'History', thisQuarter: 79, lastQuarter: 85 },
  { subject: 'Hindi', thisQuarter: 87, lastQuarter: 84 },
  { subject: 'P.E.', thisQuarter: 95, lastQuarter: 93 },
];

export const StudentOverview: React.FC = () => {
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

        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              Welcome back, Arjun! 👋
            </h1>
            <p className="text-slate-700 text-lg">Class 8B • Monday, February 23, 2026</p>
          </div>

          <div className="flex gap-4">
            <div className="glass-card rounded-2xl p-6 text-center min-w-[120px]">
              <Flame className="w-8 h-8 text-[#F59E0B] mx-auto mb-2" />
              <p className="text-3xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>12</p>
              <p className="text-xs text-slate-500">Day Streak</p>
            </div>

            <div className="glass-card rounded-2xl p-6 text-center min-w-[120px]">
              <TrendingUp className="w-8 h-8 text-[#10B981] mx-auto mb-2" />
              <p className="text-3xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>87%</p>
              <p className="text-xs text-slate-500">Avg Score</p>
            </div>
          </div>
        </div>
      </div>

      {/* ARIA Proactive Alert */}
      <div className="glass-card rounded-2xl p-6 mb-6 bg-gradient-to-r from-[#2563EB]/10 to-[#06B6D4]/10">
        <div className="flex items-start gap-4">
          <AriaOrb size="md" animated />
          <div className="flex-1">
            <h3 className="text-slate-800 font-semibold mb-2">ARIA says:</h3>
            <p className="text-slate-800 mb-3">
              Hey Arjun! Your Physics exam is in 4 days. Based on your past tests, you should focus on Optics — you scored 58% there last time. Want a practice quiz?
            </p>
            <div className="flex gap-2">
              <Button size="sm" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                Start Quiz
              </Button>
              <Button size="sm" variant="outline" className="glass-card border-slate-200 text-slate-800 hover:bg-slate-100">
                Show Study Plan
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Quick Actions */}
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Button className="w-full justify-start bg-[#2563EB]/10 hover:bg-[#2563EB]/20 text-[#2563EB] border border-[#2563EB]/30">
              <Bus className="w-4 h-4 mr-2" />
              Track School Bus
              <span className="ml-auto text-xs bg-[#10B981]/20 text-[#10B981] px-2 py-1 rounded-full">
                15 mins away
              </span>
            </Button>

            <Button className="w-full justify-start bg-[#F59E0B]/10 hover:bg-[#F59E0B]/20 text-[#D97706] border border-[#F59E0B]/30">
              <Wallet className="w-4 h-4 mr-2" />
              Canteen Wallet
              <span className="ml-auto text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
                ₹845
              </span>
            </Button>

            <Button className="w-full justify-start bg-[#7C3AED]/10 hover:bg-[#7C3AED]/20 text-[#7C3AED] border border-[#7C3AED]/30">
              <BookOpen className="w-4 h-4 mr-2" />
              Library Books
              <span className="ml-auto text-xs">
                2 borrowed
              </span>
            </Button>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="glass-card rounded-2xl p-6 col-span-2">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Today's Schedule</h2>
          <div className="space-y-2">
            {todaySchedule.map((period, idx) => (
              <div
                key={idx}
                className={`glass-card rounded-xl p-3 flex items-center gap-3 ${period.status === 'current' ? 'border-2 border-[#2563EB] bg-[#2563EB]/10' : ''
                  }`}
              >
                <div className={`w-16 text-center ${period.status === 'current' ? 'text-[#2563EB]' :
                    period.status === 'completed' ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                  <Clock className="w-4 h-4 mx-auto mb-1" />
                  <p className="text-xs" style={{ fontFamily: 'var(--font-mono)' }}>{period.time}</p>
                </div>

                <div className="flex-1">
                  <p className={`font-semibold ${period.status === 'completed' ? 'text-slate-500' : 'text-slate-800'
                    }`}>
                    {period.subject}
                  </p>
                  <p className="text-xs text-slate-500">{period.teacher} • {period.room}</p>
                </div>

                {period.status === 'completed' && <CheckCircle className="w-5 h-5 text-[#10B981]" />}
                {period.status === 'current' && (
                  <div className="flex items-center gap-2 text-[#2563EB] text-sm">
                    <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse" />
                    Now
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Pending Homework */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-slate-800">Pending Homework</h2>
            <AlertCircle className="w-5 h-5 text-[#F59E0B]" />
          </div>
          <div className="space-y-3">
            {homework.map((hw) => (
              <div key={hw.id} className="glass-card rounded-xl p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-slate-800 font-medium mb-1">{hw.title}</p>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span>{hw.subject}</span>
                      <span>•</span>
                      <span className={hw.priority === 'high' ? 'text-[#F43F5E]' : ''}>
                        Due: {hw.dueDate}
                      </span>
                    </div>
                  </div>
                  {hw.priority === 'high' && (
                    <div className="w-2 h-2 bg-[#F43F5E] rounded-full" />
                  )}
                </div>
                <Button size="sm" className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white mt-2">
                  Start Assignment
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Radar */}
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Performance Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={performanceData}>
              <PolarGrid stroke="rgba(0,0,0,0.06)" />
              <PolarAngleAxis dataKey="subject" stroke="#9CA3AF" />
              <Radar
                name="This Quarter"
                dataKey="thisQuarter"
                stroke="#2563EB"
                fill="#2563EB"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Radar
                name="Last Quarter"
                dataKey="lastQuarter"
                stroke="#06B6D4"
                fill="#06B6D4"
                fillOpacity={0.2}
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </RadarChart>
          </ResponsiveContainer>
          <div className="flex gap-4 justify-center mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#2563EB] rounded-full" />
              <span className="text-xs text-slate-500">This Quarter</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#06B6D4] rounded-full" />
              <span className="text-xs text-slate-500">Last Quarter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
