import React from 'react';
import { AriaOrb } from '../../components/aria/AriaOrb';
import { CheckCircle, Bus, BookOpen, Wallet, TrendingUp, AlertCircle, Award } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const academicProgress = [
  { month: 'Sep', gpa: 3.8, attendance: 95 },
  { month: 'Oct', gpa: 3.9, attendance: 93 },
  { month: 'Nov', gpa: 4.0, attendance: 96 },
  { month: 'Dec', gpa: 3.7, attendance: 91 },
  { month: 'Jan', gpa: 3.9, attendance: 94 },
  { month: 'Feb', gpa: 4.1, attendance: 96 },
];

const recentTests = [
  { subject: 'Mathematics', score: 87, maxScore: 100, date: 'Feb 18', change: '+5' },
  { subject: 'Science', score: 92, maxScore: 100, date: 'Feb 15', change: '+8' },
  { subject: 'English', score: 85, maxScore: 100, date: 'Feb 12', change: '-3' },
  { subject: 'History', score: 78, maxScore: 100, date: 'Feb 10', change: '+2' },
];

export const ParentOverview: React.FC = () => {
  return (
    <div className="p-6">
      {/* Hero Section - Child Overview */}
      <div
        className="glass-card rounded-3xl p-8 mb-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(27, 58, 140, 0.2), rgba(6, 182, 212, 0.1))'
        }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2563EB]/8 to-transparent rounded-full blur-3xl" />

        <div className="relative z-10 flex items-start gap-6">
          {/* Child Avatar */}
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-slate-800 text-3xl font-bold flex-shrink-0">
            AS
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              Arjun Sharma
            </h1>
            <p className="text-slate-500 mb-4">Class 8B • Roll No. 24</p>

            <div className="flex flex-wrap gap-3 mb-6">
              <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#10B981]" />
                <span className="text-slate-800 text-sm font-medium">In School</span>
              </div>
              <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2">
                <Bus className="w-4 h-4 text-[#06B6D4]" />
                <span className="text-slate-800 text-sm font-medium">Bus Arrived 8:42 AM</span>
              </div>
              <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#7C3AED]" />
                <span className="text-slate-800 text-sm font-medium">4 Classes Today</span>
              </div>
            </div>

            <div className="glass-card rounded-xl p-4 inline-flex items-start gap-3">
              <AriaOrb size="sm" animated={false} />
              <p className="text-slate-800 text-sm">
                <strong>ARIA:</strong> Arjun is having a great week — attendance 100% this week and excellent homework completion!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ARIA Parent Alerts */}
      <div className="glass-card rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <AriaOrb size="sm" animated={false} />
          <h2 className="text-xl font-semibold text-slate-800">3 things you should know today</h2>
        </div>
        <div className="space-y-3">
          <div className="glass-card rounded-xl p-4 flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#10B981]/20 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-[#10B981]" />
            </div>
            <div className="flex-1">
              <p className="text-slate-800 mb-2">Math test results are out — Arjun scored <strong>87/100</strong> (+8 from last test)</p>
              <Button size="sm" variant="outline" className="glass-card border-slate-200 text-slate-800 hover:bg-slate-100">
                View Report
              </Button>
            </div>
          </div>

          <div className="glass-card rounded-xl p-4 flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/20 flex items-center justify-center flex-shrink-0">
              <Wallet className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <div className="flex-1">
              <p className="text-slate-800 mb-2">₹845 canteen wallet — running low, consider recharging</p>
              <Button size="sm" className="bg-[#F59E0B] hover:bg-[#D97706] text-white">
                Add Money
              </Button>
            </div>
          </div>

          <div className="glass-card rounded-xl p-4 flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/20 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-5 h-5 text-[#7C3AED]" />
            </div>
            <div className="flex-1">
              <p className="text-slate-800 mb-2">Library book "Wings of Fire" due in 2 days</p>
              <Button size="sm" variant="outline" className="glass-card border-slate-200 text-slate-800 hover:bg-slate-100">
                Renew Online
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Academic Progress */}
        <div className="col-span-2 glass-card rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-2">Academic Progress</h2>
          <p className="text-sm text-slate-500 mb-4">Last 6 months performance trend</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={academicProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" domain={[0, 5]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  color: '#1E293B'
                }}
              />
              <Line
                type="monotone"
                dataKey="gpa"
                stroke="#2563EB"
                strokeWidth={3}
                dot={{ fill: '#2563EB', r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="attendance"
                stroke="#10B981"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: '#10B981', r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#2563EB] rounded-full" />
              <span className="text-xs text-slate-500">GPA (out of 5.0)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#10B981] rounded-full" />
              <span className="text-xs text-slate-500">Attendance %</span>
            </div>
          </div>
        </div>

        {/* Recent Test Results */}
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Recent Tests</h2>
          <div className="space-y-3">
            {recentTests.map((test, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-3">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-slate-800 font-semibold text-sm">{test.subject}</h4>
                  <Badge className={`text-xs px-2 py-1 rounded-full ${test.change.startsWith('+')
                      ? 'bg-[#10B981]/20 text-[#10B981] border-none'
                      : 'bg-[#F43F5E]/20 text-[#F43F5E] border-none'
                    }`}>
                    {test.change}
                  </Badge>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>
                    {test.score}
                  </span>
                  <span className="text-sm text-slate-500">/{test.maxScore}</span>
                </div>
                <p className="text-xs text-slate-400">{test.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">
        {/* Quick Actions */}
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Button className="w-full justify-start bg-[#F43F5E]/10 hover:bg-[#F43F5E]/20 text-[#F43F5E] border border-[#F43F5E]/30">
              <Wallet className="w-4 h-4 mr-2" />
              Pay Fees
              <span className="ml-auto text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
                ₹24,500 due
              </span>
            </Button>

            <Button className="w-full justify-start bg-[#2563EB]/10 hover:bg-[#2563EB]/20 text-[#2563EB] border border-[#2563EB]/30">
              <Bus className="w-4 h-4 mr-2" />
              Track Bus
              <span className="ml-auto text-xs bg-[#10B981]/20 text-[#10B981] px-2 py-1 rounded-full">
                On time
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

        {/* This Week Summary */}
        <div className="col-span-2 glass-card rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">This Week Summary</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-slate-50 rounded-xl p-4">
              <Award className="w-6 h-6 text-[#10B981] mb-2" />
              <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>100%</p>
              <p className="text-xs text-slate-500">Attendance</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <CheckCircle className="w-6 h-6 text-[#2563EB] mb-2" />
              <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>4/4</p>
              <p className="text-xs text-slate-500">Homework Done</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <TrendingUp className="w-6 h-6 text-[#F59E0B] mb-2" />
              <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>87%</p>
              <p className="text-xs text-slate-500">Avg Score</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <BookOpen className="w-6 h-6 text-[#7C3AED] mb-2" />
              <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>3</p>
              <p className="text-xs text-slate-500">Tests Taken</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
