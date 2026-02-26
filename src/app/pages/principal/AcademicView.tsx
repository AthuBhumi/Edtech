import React from 'react';
import { BookOpen, Users, Award, TrendingUp, Calendar, FileText } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Progress } from '../../components/ui/progress';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';

const classData = [
  { class: '8A', students: 34, avgScore: 87, attendance: 94, teacher: 'Ms. Priya Kumar' },
  { class: '8B', students: 32, avgScore: 82, attendance: 91, teacher: 'Mr. Rahul Singh' },
  { class: '9A', students: 30, avgScore: 79, attendance: 89, teacher: 'Mrs. Sunita Desai' },
  { class: '9B', students: 28, avgScore: 85, attendance: 93, teacher: 'Mr. Arjun Patel' },
  { class: '10A', students: 35, avgScore: 92, attendance: 96, teacher: 'Dr. Meena Shah' },
  { class: '10B', students: 33, avgScore: 88, attendance: 94, teacher: 'Ms. Kavita Reddy' },
];

const examSchedule = [
  { date: 'Mar 1-5', exam: 'Unit Test 3', classes: 'All Classes', status: 'upcoming' },
  { date: 'Mar 15-20', exam: 'Mid-Term Exams', classes: '8-10', status: 'upcoming' },
  { date: 'Apr 10', exam: 'Project Submissions', classes: '9-10', status: 'scheduled' },
];

const syllabusProgress = [
  { subject: 'Mathematics', progress: 78, class: '8A' },
  { subject: 'Science', progress: 82, class: '8A' },
  { subject: 'English', progress: 91, class: '8A' },
  { subject: 'History', progress: 74, class: '8A' },
  { subject: 'Hindi', progress: 85, class: '8A' },
];

const monthlyPerformance = [
  { month: 'Sep', avgScore: 82 },
  { month: 'Oct', avgScore: 84 },
  { month: 'Nov', avgScore: 85 },
  { month: 'Dec', avgScore: 83 },
  { month: 'Jan', avgScore: 87 },
  { month: 'Feb', avgScore: 89 },
];

export const AcademicView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Academic Overview 📚
        </h1>
        <p className="text-white/60 text-sm lg:text-base">Class performance, exams, and curriculum tracking</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <BookOpen className="w-6 h-6 lg:w-8 lg:h-8 text-[#2563EB] mb-3" />
          <p className="text-xl lg:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>87%</p>
          <p className="text-xs text-white/60">Avg Performance</p>
        </div>

        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <Award className="w-6 h-6 lg:w-8 lg:h-8 text-[#10B981] mb-3" />
          <p className="text-xl lg:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>95.8%</p>
          <p className="text-xs text-white/60">Pass Rate</p>
        </div>

        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <Users className="w-6 h-6 lg:w-8 lg:h-8 text-[#F59E0B] mb-3" />
          <p className="text-xl lg:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>192</p>
          <p className="text-xs text-white/60">Total Classes</p>
        </div>

        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-[#7C3AED] mb-3" />
          <p className="text-xl lg:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>83%</p>
          <p className="text-xs text-white/60">Syllabus Complete</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-6">
        {/* Class Performance */}
        <div className="lg:col-span-2 glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">Class Performance Overview</h2>
          <div className="space-y-3">
            {classData.map((cls, idx) => (
              <div key={idx} className="glass-card rounded-xl p-3 lg:p-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-white font-semibold text-base lg:text-lg">{cls.class}</h3>
                    <p className="text-xs text-white/60">{cls.teacher} • {cls.students} students</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-[#2563EB]/20 text-[#2563EB] border-none text-xs">
                      Score: {cls.avgScore}%
                    </Badge>
                    <Badge className="bg-[#10B981]/20 text-[#10B981] border-none text-xs">
                      Att: {cls.attendance}%
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="flex justify-between mb-1 text-xs">
                      <span className="text-white/60">Performance</span>
                      <span className="text-white">{cls.avgScore}%</span>
                    </div>
                    <Progress value={cls.avgScore} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-xs">
                      <span className="text-white/60">Attendance</span>
                      <span className="text-white">{cls.attendance}%</span>
                    </div>
                    <Progress value={cls.attendance} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Exams */}
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">Exam Schedule</h2>
          <div className="space-y-3">
            {examSchedule.map((exam, idx) => (
              <div key={idx} className="glass-card rounded-xl p-3 lg:p-4">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm truncate">{exam.exam}</h4>
                    <p className="text-xs text-white/60">{exam.date}</p>
                    <p className="text-xs text-white/40">{exam.classes}</p>
                  </div>
                </div>
                <Badge className="bg-[#F59E0B]/20 text-[#F59E0B] border-none text-xs w-full justify-center">
                  {exam.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Syllabus Progress */}
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">Syllabus Completion (Class 8A)</h2>
          <div className="space-y-4">
            {syllabusProgress.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-white">{item.subject}</span>
                  <span className="text-sm text-white/60">{item.progress}%</span>
                </div>
                <Progress value={item.progress} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Performance Trend */}
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">School-Wide Performance</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="#9CA3AF" tick={{ fontSize: 12 }} />
              <YAxis stroke="#9CA3AF" domain={[70, 100]} tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#111827', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Line type="monotone" dataKey="avgScore" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
