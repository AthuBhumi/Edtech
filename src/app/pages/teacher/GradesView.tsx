import React from 'react';
import { Award, TrendingUp, Users, Search } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Progress } from '../../components/ui/progress';

const students = [
  { id: 1, name: 'Ananya Desai', class: '8A', roll: 12, math: 95, science: 92, english: 88, overall: 92 },
  { id: 2, name: 'Ravi Kumar', class: '9A', roll: 8, math: 88, science: 85, english: 90, overall: 88 },
  { id: 3, name: 'Priya Singh', class: '8B', roll: 15, math: 82, science: 89, english: 86, overall: 86 },
  { id: 4, name: 'Arjun Sharma', class: '8B', roll: 24, math: 87, science: 92, english: 88, overall: 89 },
  { id: 5, name: 'Neha Patel', class: '8A', roll: 21, math: 79, science: 81, english: 85, overall: 82 },
  { id: 6, name: 'Rohan Mehta', class: '9A', roll: 18, math: 92, science: 88, english: 87, overall: 89 },
];

const gradeDistribution = [
  { grade: 'A+', count: 12, percentage: 18 },
  { grade: 'A', count: 28, percentage: 42 },
  { grade: 'B+', count: 18, percentage: 27 },
  { grade: 'B', count: 8, percentage: 12 },
  { grade: 'C', count: 1, percentage: 1 },
];

export const GradesView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Grade Management 📊
        </h1>
        <p className="text-slate-500 text-sm lg:text-base">View and manage student grades</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-6">
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <Award className="w-6 h-6 lg:w-8 lg:h-8 text-[#10B981] mb-3" />
          <p className="text-xl lg:text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>87.4%</p>
          <p className="text-xs text-slate-500">Class Average</p>
        </div>
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <TrendingUp className="w-6 h-6 lg:w-8 lg:h-8 text-[#2563EB] mb-3" />
          <p className="text-xl lg:text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>+5.2%</p>
          <p className="text-xs text-slate-500">Improvement</p>
        </div>
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <Users className="w-6 h-6 lg:w-8 lg:h-8 text-[#F59E0B] mb-3" />
          <p className="text-xl lg:text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>96</p>
          <p className="text-xs text-slate-500">Total Students</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="lg:col-span-2 glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between mb-4">
            <h2 className="text-lg lg:text-xl font-semibold text-slate-800">Student Grades</h2>
            <div className="relative flex-1 lg:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="Search students..." 
                className="pl-10 bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 text-sm"
              />
            </div>
          </div>

          <div className="space-y-3">
            {students.map((student) => (
              <div key={student.id} className="glass-card rounded-xl p-3 lg:p-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-slate-800 font-bold">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-slate-800 font-semibold text-sm lg:text-base">{student.name}</h3>
                      <p className="text-xs text-slate-500">Class {student.class} • Roll {student.roll}</p>
                    </div>
                  </div>
                  <Badge className={`${
                    student.overall >= 90 ? 'bg-[#10B981]/20 text-[#10B981]' :
                    student.overall >= 80 ? 'bg-[#2563EB]/20 text-[#2563EB]' :
                    'bg-[#F59E0B]/20 text-[#F59E0B]'
                  } border-none`}>
                    {student.overall}%
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-2 lg:gap-3">
                  <div className="glass-card rounded-lg p-2 text-center">
                    <p className="text-xs text-slate-500 mb-1">Math</p>
                    <p className="text-sm lg:text-base font-bold text-slate-800">{student.math}%</p>
                  </div>
                  <div className="glass-card rounded-lg p-2 text-center">
                    <p className="text-xs text-slate-500 mb-1">Science</p>
                    <p className="text-sm lg:text-base font-bold text-slate-800">{student.science}%</p>
                  </div>
                  <div className="glass-card rounded-lg p-2 text-center">
                    <p className="text-xs text-slate-500 mb-1">English</p>
                    <p className="text-sm lg:text-base font-bold text-slate-800">{student.english}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Grade Distribution</h2>
            <div className="space-y-3">
              {gradeDistribution.map((item) => (
                <div key={item.grade}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-800">Grade {item.grade}</span>
                    <span className="text-sm text-slate-500">{item.count} students</span>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Button className="w-full justify-start bg-[#2563EB]/10 hover:bg-[#2563EB]/20 text-[#2563EB] border border-[#2563EB]/30 text-sm">
                Export Grades
              </Button>
              <Button className="w-full justify-start bg-[#10B981]/10 hover:bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 text-sm">
                Update Marks
              </Button>
              <Button className="w-full justify-start bg-[#F59E0B]/10 hover:bg-[#F59E0B]/20 text-[#D97706] border border-[#F59E0B]/30 text-sm">
                Generate Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
