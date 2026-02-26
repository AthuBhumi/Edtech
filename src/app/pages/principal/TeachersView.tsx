import React from 'react';
import { Users, Award, BookOpen, Star, Clock, TrendingUp, Search } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Progress } from '../../components/ui/progress';

const teachersList = [
  { id: 1, name: 'Ms. Priya Kumar', subject: 'Mathematics', classes: ['8A', '9A'], experience: 8, rating: 4.8, performance: 94, students: 68 },
  { id: 2, name: 'Mr. Rahul Singh', subject: 'Science', classes: ['8B', '10A'], experience: 12, rating: 4.9, performance: 96, students: 70 },
  { id: 3, name: 'Mrs. Sunita Desai', subject: 'English', classes: ['9A', '9B'], experience: 6, rating: 4.7, performance: 92, students: 58 },
  { id: 4, name: 'Mr. Arjun Patel', subject: 'Hindi', classes: ['8A', '8B', '10B'], experience: 10, rating: 4.6, performance: 89, students: 95 },
  { id: 5, name: 'Dr. Meena Shah', subject: 'Physics', classes: ['10A', '10B'], experience: 15, rating: 5.0, performance: 98, students: 68 },
  { id: 6, name: 'Ms. Kavita Reddy', subject: 'Chemistry', classes: ['9A', '10A'], experience: 7, rating: 4.8, performance: 93, students: 60 },
];

const stats = [
  { label: 'Total Teachers', value: '48', icon: Users, color: '#2563EB' },
  { label: 'Avg Rating', value: '4.7/5', icon: Star, color: '#F59E0B' },
  { label: 'Avg Performance', value: '93.5%', icon: TrendingUp, color: '#10B981' },
  { label: 'Active Classes', value: '192', icon: BookOpen, color: '#7C3AED' },
];

const topPerformers = [
  { name: 'Dr. Meena Shah', subject: 'Physics', rating: 5.0, performance: 98 },
  { name: 'Mr. Rahul Singh', subject: 'Science', rating: 4.9, performance: 96 },
  { name: 'Ms. Priya Kumar', subject: 'Mathematics', rating: 4.8, performance: 94 },
];

export const TeachersView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Teacher Management 👨‍🏫
        </h1>
        <p className="text-slate-500 text-sm lg:text-base">Faculty performance and workload tracking</p>
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
        {/* Teachers List */}
        <div className="lg:col-span-2 glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between mb-4">
            <h2 className="text-lg lg:text-xl font-semibold text-slate-800">All Teachers</h2>
            <div className="relative flex-1 lg:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="Search teachers..." 
                className="pl-10 bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 text-sm"
              />
            </div>
          </div>

          <div className="space-y-2 lg:space-y-3">
            {teachersList.map((teacher) => (
              <div key={teacher.id} className="glass-card rounded-xl p-3 lg:p-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#F59E0B] flex items-center justify-center text-slate-800 font-bold text-sm lg:text-base flex-shrink-0">
                      {teacher.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-slate-800 font-semibold text-sm lg:text-base truncate">{teacher.name}</h3>
                      <p className="text-xs text-slate-500">{teacher.subject} • {teacher.experience}y exp • {teacher.students} students</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 lg:gap-3 flex-wrap">
                    <Badge className="bg-[#F59E0B]/20 text-[#F59E0B] border-none text-xs flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      {teacher.rating}
                    </Badge>
                    <Badge className="bg-[#10B981]/20 text-[#10B981] border-none text-xs">
                      {teacher.performance}%
                    </Badge>
                    <Button size="sm" variant="ghost" className="text-[#2563EB] hover:bg-[#2563EB]/10 h-8 text-xs">
                      View
                    </Button>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="flex justify-between mb-1 text-xs">
                    <span className="text-slate-500">Classes: {teacher.classes.join(', ')}</span>
                    <span className="text-slate-800">{teacher.performance}%</span>
                  </div>
                  <Progress value={teacher.performance} className="h-2" />
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
              {topPerformers.map((teacher, idx) => (
                <div key={idx} className="glass-card rounded-xl p-3">
                  <div className="flex items-start gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      idx === 0 ? 'bg-[#F59E0B] text-white' :
                      idx === 1 ? 'bg-[#9CA3AF] text-white' :
                      'bg-[#CD7F32] text-white'
                    }`}>
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-800 font-semibold text-sm truncate">{teacher.name}</p>
                      <p className="text-xs text-slate-500">{teacher.subject}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-[#F59E0B]/20 text-[#F59E0B] border-none text-xs flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      {teacher.rating}
                    </Badge>
                    <Badge className="bg-[#10B981]/20 text-[#10B981] border-none text-xs">
                      {teacher.performance}%
                    </Badge>
                  </div>
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
                Hire New Teacher
              </Button>
              <Button className="w-full justify-start bg-[#10B981]/10 hover:bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 text-sm">
                <Award className="w-4 h-4 mr-2" />
                Performance Review
              </Button>
              <Button className="w-full justify-start bg-[#F59E0B]/10 hover:bg-[#F59E0B]/20 text-[#D97706] border border-[#F59E0B]/30 text-sm">
                <Clock className="w-4 h-4 mr-2" />
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
