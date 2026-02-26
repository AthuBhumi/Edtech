import React from 'react';
import { AriaOrb } from '../../components/aria/AriaOrb';
import { Clock, Users, FileText, AlertCircle, CheckCircle, TrendingUp, Award } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { Badge } from '../../components/ui/badge';

const todayClasses = [
  { period: 1, subject: 'Mathematics', class: '8B', time: '8:00 - 8:45', room: 'A-201', status: 'completed' },
  { period: 2, subject: 'Science', class: '8A', time: '8:45 - 9:30', room: 'Lab-2', status: 'completed' },
  { period: 3, subject: 'Mathematics', class: '9A', time: '10:00 - 10:45', room: 'A-201', status: 'current' },
  { period: 4, subject: 'Science', class: '9B', time: '11:00 - 11:45', room: 'Lab-2', status: 'upcoming' },
  { period: 5, subject: 'Mathematics', class: '10A', time: '12:00 - 12:45', room: 'A-201', status: 'upcoming' },
];

const myClasses = [
  { name: 'Class 8B', students: 34, subject: 'Mathematics & Science', attendance: 94, avgScore: 87 },
  { name: 'Class 9A', students: 32, subject: 'Mathematics', attendance: 87, avgScore: 82 },
  { name: 'Class 9B', students: 30, subject: 'Science', attendance: 91, avgScore: 85 },
];

const assignments = {
  toGrade: 24,
  draft: 1,
  assigned: 2,
};

const flaggedStudents = [
  { name: 'Rohan Mehta', class: '8B', reason: 'Missing 3 consecutive assignments', attendance: 78, score: 65 },
  { name: 'Priya Singh', class: '9A', reason: 'Performance dropped 15% this month', attendance: 92, score: 58 },
  { name: 'Ankit Kumar', class: '8B', reason: 'Low attendance (72%) + 2 missing assignments', attendance: 72, score: 70 },
];

export const TeacherOverview: React.FC = () => {
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
              Good Morning, Ms. Priya! 👋
            </h1>
            <p className="text-slate-700 text-lg">Mathematics & Science Teacher • Monday, February 23, 2026</p>
          </div>

          <div className="flex gap-4">
            <div className="glass-card rounded-2xl p-6 text-center min-w-[120px]">
              <Users className="w-8 h-8 text-[#2563EB] mx-auto mb-2" />
              <p className="text-3xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>96</p>
              <p className="text-xs text-slate-500">Total Students</p>
            </div>

            <div className="glass-card rounded-2xl p-6 text-center min-w-[120px]">
              <FileText className="w-8 h-8 text-[#F59E0B] mx-auto mb-2" />
              <p className="text-3xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>24</p>
              <p className="text-xs text-slate-500">To Grade</p>
            </div>
          </div>
        </div>
      </div>

      {/* ARIA Alert */}
      <div className="glass-card rounded-2xl p-6 mb-6 bg-gradient-to-r from-[#F43F5E]/10 to-[#F59E0B]/10">
        <div className="flex items-start gap-4">
          <AriaOrb size="md" animated />
          <div className="flex-1">
            <h3 className="text-slate-800 font-semibold mb-2">ARIA Alert:</h3>
            <p className="text-slate-800 mb-3">
              3 students haven't submitted yesterday's homework. Rohan Mehta (8B), Priya Singh (9A), and Ankit Kumar (8B). Would you like to send them a reminder?
            </p>
            <div className="flex gap-2">
              <Button size="sm" className="bg-[#F43F5E] hover:bg-[#DC2626] text-white">
                Send Reminder
              </Button>
              <Button size="sm" variant="outline" className="glass-card border-slate-200 text-slate-800 hover:bg-slate-100">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Today's Schedule */}
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Today's Classes</h2>
          <div className="space-y-2">
            {todayClasses.map((period) => (
              <div
                key={period.period}
                className={`glass-card rounded-xl p-3 ${period.status === 'current' ? 'border-2 border-[#2563EB] bg-[#2563EB]/10' : ''
                  }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-lg font-bold ${period.status === 'current' ? 'text-[#2563EB]' : 'text-slate-500'
                    }`} style={{ fontFamily: 'var(--font-mono)' }}>
                    P{period.period}
                  </span>
                  <span className="text-xs text-slate-500">{period.time}</span>
                </div>
                <p className="text-slate-800 font-medium">{period.subject}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-slate-500">{period.class} • {period.room}</span>
                  {period.status === 'completed' && <CheckCircle className="w-4 h-4 text-[#10B981]" />}
                  {period.status === 'current' && (
                    <div className="flex items-center gap-1 text-[#2563EB] text-xs">
                      <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse" />
                      Now
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Classes */}
        <div className="glass-card rounded-2xl p-6 col-span-2">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">My Classes</h2>
          <div className="space-y-3">
            {myClasses.map((cls, idx) => (
              <div key={idx} className="glass-card rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-slate-800 font-semibold text-lg mb-1">{cls.name}</h3>
                    <p className="text-sm text-slate-500">{cls.subject}</p>
                  </div>
                  <Badge className="bg-[#2563EB]/20 text-[#2563EB] border-none">
                    {cls.students} students
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-500">Attendance</span>
                      <span className="text-sm text-slate-800 font-semibold">{cls.attendance}%</span>
                    </div>
                    <Progress value={cls.attendance} className="h-2" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-500">Avg Score</span>
                      <span className="text-sm text-slate-800 font-semibold">{cls.avgScore}%</span>
                    </div>
                    <Progress value={cls.avgScore} className="h-2" />
                  </div>
                </div>

                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="outline" className="flex-1 glass-card border-slate-200 text-slate-800 hover:bg-slate-100">
                    Take Attendance
                  </Button>
                  <Button size="sm" className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                    View Class
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Assignment Overview */}
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Assignment Overview</h2>

          <div className="space-y-4">
            <div className="glass-card rounded-xl p-4 bg-[#F43F5E]/10 border border-[#F43F5E]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F43F5E]/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#F43F5E]" />
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold">To Grade</p>
                    <p className="text-xs text-slate-500">Needs your attention</p>
                  </div>
                </div>
                <p className="text-3xl font-bold text-[#F43F5E]" style={{ fontFamily: 'var(--font-mono)' }}>
                  {assignments.toGrade}
                </p>
              </div>
              <Button size="sm" className="w-full bg-[#F43F5E] hover:bg-[#DC2626] text-white">
                Start Grading
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-[#F59E0B]" />
                  <p className="text-slate-800 font-medium">Draft</p>
                </div>
                <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>
                  {assignments.draft}
                </p>
              </div>

              <div className="glass-card rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-[#10B981]" />
                  <p className="text-slate-800 font-medium">Assigned</p>
                </div>
                <p className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>
                  {assignments.assigned}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flagged Students */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-slate-800">Students Need Attention</h2>
            <AlertCircle className="w-5 h-5 text-[#F59E0B]" />
          </div>

          <div className="space-y-3">
            {flaggedStudents.map((student, idx) => (
              <div key={idx} className="glass-card rounded-xl p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-slate-800 font-semibold">{student.name}</p>
                    <p className="text-xs text-slate-500">{student.class}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>{student.score}%</p>
                    <p className="text-xs text-slate-500">{student.attendance}% attend.</p>
                  </div>
                </div>
                <p className="text-sm text-slate-700 mb-3">{student.reason}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 glass-card border-slate-200 text-slate-800 hover:bg-slate-100 text-xs">
                    View Profile
                  </Button>
                  <Button size="sm" className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs">
                    Contact Parent
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
