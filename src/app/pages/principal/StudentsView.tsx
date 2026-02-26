import React from 'react';
import { Users, TrendingUp, AlertCircle, Award, Calendar, Search } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Progress } from '../../components/ui/progress';

const studentsList = [
  { id: 1, name: 'Arjun Sharma', class: '8B', roll: 24, attendance: 96, avgScore: 87, status: 'excellent' },
  { id: 2, name: 'Priya Singh', class: '9A', roll: 12, attendance: 92, avgScore: 78, status: 'good' },
  { id: 3, name: 'Rohan Mehta', class: '8B', roll: 18, attendance: 78, avgScore: 65, status: 'attention' },
  { id: 4, name: 'Ananya Desai', class: '10A', roll: 5, attendance: 98, avgScore: 95, status: 'excellent' },
  { id: 5, name: 'Vikram Kumar', class: '9B', roll: 22, attendance: 88, avgScore: 82, status: 'good' },
  { id: 6, name: 'Sneha Patel', class: '10B', roll: 14, attendance: 94, avgScore: 89, status: 'excellent' },
  { id: 7, name: 'Amit Reddy', class: '8A', roll: 8, attendance: 72, avgScore: 58, status: 'concern' },
  { id: 8, name: 'Kavya Iyer', class: '9A', roll: 16, attendance: 91, avgScore: 84, status: 'good' },
];

const topPerformers = [
  { rank: 1, name: 'Ananya Desai', class: '10A', score: 95 },
  { rank: 2, name: 'Kavita Shah', class: '10B', score: 93 },
  { rank: 3, name: 'Ravi Kumar', class: '9A', score: 92 },
];

const stats = [
  { label: 'Total Students', value: '1,247', icon: Users, color: '#2563EB' },
  { label: 'Excellent', value: '456', icon: Award, color: '#10B981' },
  { label: 'Need Attention', value: '34', icon: AlertCircle, color: '#F59E0B' },
  { label: 'Avg Attendance', value: '92.6%', icon: TrendingUp, color: '#7C3AED' },
];

export const StudentsView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Student Management 👨‍🎓
        </h1>
        <p className="text-slate-500 text-sm lg:text-base">Track student performance and attendance</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 mb-3" style={{ color: stat.color }} />
            <p className="text-xl lg:text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>
              {stat.value}
            </p>
            <p className="text-xs text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Student List */}
        <div className="lg:col-span-2 glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between mb-4">
            <h2 className="text-lg lg:text-xl font-semibold text-slate-800">All Students</h2>
            <div className="relative flex-1 lg:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="Search students..." 
                className="pl-10 bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 text-sm"
              />
            </div>
          </div>

          <div className="space-y-2 lg:space-y-3">
            {studentsList.map((student) => (
              <div key={student.id} className="glass-card rounded-xl p-3 lg:p-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-slate-800 font-bold text-sm lg:text-base flex-shrink-0">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-slate-800 font-semibold text-sm lg:text-base truncate">{student.name}</h3>
                      <p className="text-xs text-slate-500">Class {student.class} • Roll {student.roll}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 lg:gap-3 flex-wrap">
                    <Badge className={`${
                      student.status === 'excellent' ? 'bg-[#10B981]/20 text-[#10B981]' :
                      student.status === 'good' ? 'bg-[#2563EB]/20 text-[#2563EB]' :
                      student.status === 'attention' ? 'bg-[#F59E0B]/20 text-[#F59E0B]' :
                      'bg-[#F43F5E]/20 text-[#F43F5E]'
                    } border-none text-xs`}>
                      {student.avgScore}% avg
                    </Badge>
                    <Badge className="bg-slate-50 text-slate-800 border-none text-xs">
                      {student.attendance}% att
                    </Badge>
                    <Button size="sm" variant="ghost" className="text-[#2563EB] hover:bg-[#2563EB]/10 h-8 text-xs">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4 lg:space-y-6">
          {/* Top Performers */}
          <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <h2 className="text-lg lg:text-xl font-semibold text-slate-800 mb-4">Top Performers 🏆</h2>
            <div className="space-y-3">
              {topPerformers.map((student) => (
                <div key={student.rank} className="flex items-center gap-3 glass-card rounded-xl p-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    student.rank === 1 ? 'bg-[#F59E0B] text-white' :
                    student.rank === 2 ? 'bg-[#9CA3AF] text-white' :
                    'bg-[#CD7F32] text-white'
                  }`}>
                    {student.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-800 font-semibold text-sm truncate">{student.name}</p>
                    <p className="text-xs text-slate-500">{student.class}</p>
                  </div>
                  <p className="text-lg font-bold text-[#10B981]" style={{ fontFamily: 'var(--font-mono)' }}>
                    {student.score}%
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <h2 className="text-lg lg:text-xl font-semibold text-slate-800 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Button className="w-full justify-start bg-[#2563EB]/10 hover:bg-[#2563EB]/20 text-[#2563EB] border border-[#2563EB]/30 text-sm">
                <Users className="w-4 h-4 mr-2" />
                New Admission
              </Button>
              <Button className="w-full justify-start bg-[#F59E0B]/10 hover:bg-[#F59E0B]/20 text-[#D97706] border border-[#F59E0B]/30 text-sm">
                <AlertCircle className="w-4 h-4 mr-2" />
                Send Alerts (34)
              </Button>
              <Button className="w-full justify-start bg-[#10B981]/10 hover:bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
