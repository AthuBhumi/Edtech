import React from 'react';
import { Calendar, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';

const arjunAttendance = { present: 23, absent: 1, total: 24, percentage: 96 };
const priyaAttendance = { present: 22, absent: 2, total: 24, percentage: 92 };

const recentActivity = [
  { child: 'Arjun', date: 'Feb 23', status: 'present', class: '8B' },
  { child: 'Priya', date: 'Feb 23', status: 'present', class: '6A' },
  { child: 'Arjun', date: 'Feb 22', status: 'present', class: '8B' },
  { child: 'Priya', date: 'Feb 22', status: 'present', class: '6A' },
  { child: 'Arjun', date: 'Feb 21', status: 'present', class: '8B' },
  { child: 'Priya', date: 'Feb 21', status: 'absent', class: '6A' },
];

export const AttendanceView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Attendance Tracking 📅
        </h1>
        <p className="text-slate-500 text-sm lg:text-base">Monitor your children's attendance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Arjun (Class 8B)</h2>
          <div className="text-center mb-4">
            <p className="text-4xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
              {arjunAttendance.percentage}%
            </p>
            <p className="text-sm text-slate-500">This Month</p>
          </div>
          <Progress value={arjunAttendance.percentage} className="h-3 mb-4" />
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="glass-card rounded-lg p-3">
              <CheckCircle className="w-5 h-5 text-[#10B981] mx-auto mb-1" />
              <p className="text-xl font-bold text-slate-800">{arjunAttendance.present}</p>
              <p className="text-xs text-slate-500">Present</p>
            </div>
            <div className="glass-card rounded-lg p-3">
              <XCircle className="w-5 h-5 text-[#F43F5E] mx-auto mb-1" />
              <p className="text-xl font-bold text-slate-800">{arjunAttendance.absent}</p>
              <p className="text-xs text-slate-500">Absent</p>
            </div>
            <div className="glass-card rounded-lg p-3">
              <Calendar className="w-5 h-5 text-[#2563EB] mx-auto mb-1" />
              <p className="text-xl font-bold text-slate-800">{arjunAttendance.total}</p>
              <p className="text-xs text-slate-500">Total Days</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Priya (Class 6A)</h2>
          <div className="text-center mb-4">
            <p className="text-4xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
              {priyaAttendance.percentage}%
            </p>
            <p className="text-sm text-slate-500">This Month</p>
          </div>
          <Progress value={priyaAttendance.percentage} className="h-3 mb-4" />
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="glass-card rounded-lg p-3">
              <CheckCircle className="w-5 h-5 text-[#10B981] mx-auto mb-1" />
              <p className="text-xl font-bold text-slate-800">{priyaAttendance.present}</p>
              <p className="text-xs text-slate-500">Present</p>
            </div>
            <div className="glass-card rounded-lg p-3">
              <XCircle className="w-5 h-5 text-[#F43F5E] mx-auto mb-1" />
              <p className="text-xl font-bold text-slate-800">{priyaAttendance.absent}</p>
              <p className="text-xs text-slate-500">Absent</p>
            </div>
            <div className="glass-card rounded-lg p-3">
              <Calendar className="w-5 h-5 text-[#2563EB] mx-auto mb-1" />
              <p className="text-xl font-bold text-slate-800">{priyaAttendance.total}</p>
              <p className="text-xs text-slate-500">Total Days</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Recent Attendance</h2>
        <div className="space-y-2">
          {recentActivity.map((item, idx) => (
            <div key={idx} className="glass-card rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {item.status === 'present' ? (
                  <CheckCircle className="w-5 h-5 text-[#10B981]" />
                ) : (
                  <XCircle className="w-5 h-5 text-[#F43F5E]" />
                )}
                <div>
                  <p className="text-slate-800 font-semibold text-sm">{item.child}</p>
                  <p className="text-xs text-slate-500">Class {item.class}</p>
                </div>
              </div>
              <div className="text-right">
                <Badge className={`${
                  item.status === 'present' ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#F43F5E]/20 text-[#F43F5E]'
                } border-none text-xs`}>
                  {item.status}
                </Badge>
                <p className="text-xs text-slate-500 mt-1">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
