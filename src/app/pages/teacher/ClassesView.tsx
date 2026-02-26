import React from 'react';
import { Users, TrendingUp, BookOpen, Award } from 'lucide-react';
import { Progress } from '../../components/ui/progress';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';

const classes = [
  { name: '8A', students: 34, avgScore: 87, attendance: 94, syllabus: 78, assignments: 12, pending: 3 },
  { name: '8B', students: 32, avgScore: 82, attendance: 91, syllabus: 74, assignments: 12, pending: 5 },
  { name: '9A', students: 30, avgScore: 79, attendance: 89, syllabus: 72, assignments: 15, pending: 4 },
];

const topStudents = [
  { name: 'Ananya Desai', class: '8A', score: 95 },
  { name: 'Ravi Kumar', class: '9A', score: 92 },
  { name: 'Priya Singh', class: '8B', score: 89 },
];

export const ClassesView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          My Classes 👥
        </h1>
        <p className="text-slate-500 text-sm lg:text-base">Manage and track class performance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="lg:col-span-2 space-y-4">
          {classes.map((cls) => (
            <div key={cls.name} className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4">
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-1">Class {cls.name}</h2>
                  <p className="text-sm text-slate-500">{cls.students} students • Mathematics</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-[#2563EB]/20 text-[#2563EB] border-none">
                    Avg: {cls.avgScore}%
                  </Badge>
                  <Badge className="bg-[#10B981]/20 text-[#10B981] border-none">
                    Att: {cls.attendance}%
                  </Badge>
                  {cls.pending > 0 && (
                    <Badge className="bg-[#F59E0B]/20 text-[#F59E0B] border-none">
                      {cls.pending} pending
                    </Badge>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="glass-card rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-[#10B981]" />
                    <span className="text-xs text-slate-500">Performance</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                    {cls.avgScore}%
                  </p>
                  <Progress value={cls.avgScore} className="h-2" />
                </div>

                <div className="glass-card rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-[#2563EB]" />
                    <span className="text-xs text-slate-500">Syllabus</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                    {cls.syllabus}%
                  </p>
                  <Progress value={cls.syllabus} className="h-2" />
                </div>

                <div className="glass-card rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-[#F59E0B]" />
                    <span className="text-xs text-slate-500">Assignments</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                    {cls.assignments}
                  </p>
                  <p className="text-xs text-slate-500">{cls.pending} pending review</p>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button size="sm" className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                  View Students
                </Button>
                <Button size="sm" variant="outline" className="flex-1 border-slate-200 text-slate-800 hover:bg-slate-50">
                  Attendance
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Top Performers 🏆</h2>
            <div className="space-y-3">
              {topStudents.map((student, idx) => (
                <div key={idx} className="glass-card rounded-xl p-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      idx === 0 ? 'bg-[#F59E0B]' : idx === 1 ? 'bg-[#9CA3AF]' : 'bg-[#CD7F32]'
                    } text-slate-800`}>
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-800">{student.name}</p>
                      <p className="text-xs text-slate-500">Class {student.class}</p>
                    </div>
                    <p className="text-lg font-bold text-[#10B981]" style={{ fontFamily: 'var(--font-mono)' }}>
                      {student.score}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Button className="w-full justify-start bg-[#2563EB]/10 hover:bg-[#2563EB]/20 text-[#2563EB] border border-[#2563EB]/30 text-sm">
                <Award className="w-4 h-4 mr-2" />
                Create Assignment
              </Button>
              <Button className="w-full justify-start bg-[#10B981]/10 hover:bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 text-sm">
                <Users className="w-4 h-4 mr-2" />
                Mark Attendance
              </Button>
              <Button className="w-full justify-start bg-[#F59E0B]/10 hover:bg-[#F59E0B]/20 text-[#D97706] border border-[#F59E0B]/30 text-sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Update Syllabus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
