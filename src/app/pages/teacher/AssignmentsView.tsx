import React from 'react';
import { FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';

const assignments = [
  { id: 1, title: 'Quadratic Equations Practice', class: '8A', dueDate: 'Feb 25', submitted: 28, total: 34, pending: 6, status: 'active' },
  { id: 2, title: 'Trigonometry Test', class: '9A', dueDate: 'Feb 24', submitted: 30, total: 30, pending: 0, status: 'completed' },
  { id: 3, title: 'Algebra Worksheet', class: '8B', dueDate: 'Feb 26', submitted: 25, total: 32, pending: 7, status: 'active' },
  { id: 4, title: 'Geometry Problems', class: '8A', dueDate: 'Feb 28', submitted: 12, total: 34, pending: 22, status: 'active' },
];

export const AssignmentsView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Assignments 📝
        </h1>
        <p className="text-slate-500 text-sm lg:text-base">Create and manage student assignments</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-[#2563EB] mb-3" />
          <p className="text-xl lg:text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>12</p>
          <p className="text-xs text-slate-500">Total Active</p>
        </div>
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <CheckCircle className="w-6 h-6 lg:w-8 lg:h-8 text-[#10B981] mb-3" />
          <p className="text-xl lg:text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>95</p>
          <p className="text-xs text-slate-500">Submitted</p>
        </div>
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-[#F59E0B] mb-3" />
          <p className="text-xl lg:text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>35</p>
          <p className="text-xs text-slate-500">Pending</p>
        </div>
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <AlertCircle className="w-6 h-6 lg:w-8 lg:h-8 text-[#F43F5E] mb-3" />
          <p className="text-xl lg:text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>8</p>
          <p className="text-xs text-slate-500">To Review</p>
        </div>
      </div>

      <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg lg:text-xl font-semibold text-slate-800">Recent Assignments</h2>
          <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm">
            Create New
          </Button>
        </div>

        <div className="space-y-3">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="glass-card rounded-xl p-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                <div className="flex items-start gap-3 flex-1">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    assignment.status === 'completed' ? 'bg-[#10B981]/20' : 'bg-[#2563EB]/20'
                  }`}>
                    <FileText className={`w-5 h-5 ${
                      assignment.status === 'completed' ? 'text-[#10B981]' : 'text-[#2563EB]'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-slate-800 font-semibold text-sm lg:text-base mb-1">{assignment.title}</h3>
                    <p className="text-xs text-slate-500">Class {assignment.class} • Due: {assignment.dueDate}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <Badge className={`${
                    assignment.status === 'completed' ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#F59E0B]/20 text-[#F59E0B]'
                  } border-none text-xs`}>
                    {assignment.submitted}/{assignment.total} submitted
                  </Badge>
                  {assignment.pending > 0 && (
                    <Badge className="bg-[#F43F5E]/20 text-[#F43F5E] border-none text-xs">
                      {assignment.pending} pending
                    </Badge>
                  )}
                  <Button size="sm" variant="ghost" className="text-[#2563EB] hover:bg-[#2563EB]/10 h-8 text-xs">
                    Review
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
