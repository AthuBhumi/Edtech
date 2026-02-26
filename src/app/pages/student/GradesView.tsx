import React from 'react';
import { Award, TrendingUp, BookOpen } from 'lucide-react';
import { Progress } from '../../components/ui/progress';
import { Badge } from '../../components/ui/badge';

const subjects = [
  { name: 'Mathematics', score: 87, grade: 'A', rank: 12, total: 34, assignments: [95, 82, 89, 84] },
  { name: 'Science', score: 92, grade: 'A+', rank: 5, total: 34, assignments: [98, 89, 91, 93] },
  { name: 'English', score: 88, grade: 'A', rank: 8, total: 34, assignments: [85, 91, 87, 89] },
  { name: 'Hindi', score: 79, grade: 'B+', rank: 18, total: 34, assignments: [72, 85, 78, 81] },
  { name: 'Social Science', score: 85, grade: 'A', rank: 10, total: 34, assignments: [88, 84, 83, 86] },
  { name: 'Computer Science', score: 94, grade: 'A+', rank: 3, total: 34, assignments: [96, 95, 92, 94] },
];

const overall = {
  percentage: 87.5,
  grade: 'A',
  rank: 8,
  total: 34
};

export const GradesView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          My Grades 🎓
        </h1>
        <p className="text-white/60 text-sm lg:text-base">Track your academic performance</p>
      </div>

      <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6 mb-6">
        <h2 className="text-lg font-semibold text-white mb-4">Overall Performance</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-white/60 mb-1">Percentage</p>
            <p className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>
              {overall.percentage}%
            </p>
          </div>
          <div>
            <p className="text-sm text-white/60 mb-1">Grade</p>
            <Badge className="bg-[#10B981]/20 text-[#10B981] border-none text-2xl px-4 py-2">
              {overall.grade}
            </Badge>
          </div>
          <div>
            <p className="text-sm text-white/60 mb-1">Class Rank</p>
            <p className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>
              #{overall.rank}
            </p>
          </div>
          <div>
            <p className="text-sm text-white/60 mb-1">Out of</p>
            <p className="text-3xl font-bold text-white/60" style={{ fontFamily: 'var(--font-mono)' }}>
              {overall.total}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {subjects.map((subject) => (
          <div key={subject.name} className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{subject.name}</h3>
                <p className="text-sm text-white/60">Rank {subject.rank} of {subject.total}</p>
              </div>
              <Badge className={`${
                subject.grade.includes('A+') ? 'bg-[#10B981]/20 text-[#10B981]' :
                subject.grade.includes('A') ? 'bg-[#2563EB]/20 text-[#2563EB]' :
                'bg-[#F59E0B]/20 text-[#F59E0B]'
              } border-none text-xl px-3 py-1`}>
                {subject.grade}
              </Badge>
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-white/60">Score</span>
                <span className="text-sm font-semibold text-white">{subject.score}%</span>
              </div>
              <Progress value={subject.score} className="h-3" />
            </div>

            <div>
              <p className="text-sm text-white/60 mb-2">Recent Assignments</p>
              <div className="grid grid-cols-4 gap-2">
                {subject.assignments.map((score, idx) => (
                  <div key={idx} className="glass-card rounded-lg p-2 text-center">
                    <p className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>
                      {score}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
