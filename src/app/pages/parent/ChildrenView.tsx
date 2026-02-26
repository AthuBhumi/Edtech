import React from 'react';
import { Users, Award, BookOpen, TrendingUp, Calendar } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';

const children = [
  {
    name: 'Arjun Sharma',
    class: '8B',
    roll: 24,
    attendance: 96,
    avgScore: 87,
    rank: 8,
    subjects: [
      { name: 'Math', score: 87 },
      { name: 'Science', score: 92 },
      { name: 'English', score: 88 },
    ],
    recentActivity: [
      { type: 'assignment', title: 'Math Homework', status: 'submitted', date: 'Today' },
      { type: 'test', title: 'Science Test', score: 92, date: 'Yesterday' },
    ]
  },
  {
    name: 'Priya Sharma',
    class: '6A',
    roll: 12,
    attendance: 94,
    avgScore: 91,
    rank: 4,
    subjects: [
      { name: 'Math', score: 93 },
      { name: 'Science', score: 95 },
      { name: 'English', score: 89 },
    ],
    recentActivity: [
      { type: 'assignment', title: 'English Essay', status: 'submitted', date: 'Today' },
      { type: 'test', title: 'Math Quiz', score: 95, date: '2 days ago' },
    ]
  }
];

export const ChildrenView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          My Children 👨‍👩‍👧‍👦
        </h1>
        <p className="text-white/60 text-sm lg:text-base">Track your children's academic progress</p>
      </div>

      <div className="space-y-6">
        {children.map((child, idx) => (
          <div key={idx} className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white font-bold text-lg lg:text-xl">
                  {child.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-white mb-1">{child.name}</h2>
                  <p className="text-sm text-white/60">Class {child.class} • Roll No. {child.roll}</p>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap">
                <Badge className="bg-[#10B981]/20 text-[#10B981] border-none">
                  Rank #{child.rank}
                </Badge>
                <Badge className="bg-[#2563EB]/20 text-[#2563EB] border-none">
                  {child.avgScore}% Avg
                </Badge>
                <Badge className="bg-[#F59E0B]/20 text-[#F59E0B] border-none">
                  {child.attendance}% Att
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Performance */}
              <div className="glass-card rounded-xl p-4">
                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#10B981]" />
                  Subject Performance
                </h3>
                <div className="space-y-3">
                  {child.subjects.map((subject) => (
                    <div key={subject.name}>
                      <div className="flex justify-between mb-1 text-xs">
                        <span className="text-white">{subject.name}</span>
                        <span className="text-white/60">{subject.score}%</span>
                      </div>
                      <Progress value={subject.score} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="glass-card rounded-xl p-4">
                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#2563EB]" />
                  Quick Stats
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-white/60 mb-1">Overall Average</p>
                    <p className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>
                      {child.avgScore}%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 mb-1">Attendance</p>
                    <p className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>
                      {child.attendance}%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 mb-1">Class Rank</p>
                    <p className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>
                      #{child.rank}
                    </p>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="glass-card rounded-xl p-4">
                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#F59E0B]" />
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {child.recentActivity.map((activity, actIdx) => (
                    <div key={actIdx} className="glass-card rounded-lg p-2">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="text-xs text-white font-medium">{activity.title}</p>
                        {activity.score && (
                          <Badge className="bg-[#10B981]/20 text-[#10B981] border-none text-xs">
                            {activity.score}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-white/60">{activity.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button size="sm" className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                View Full Report
              </Button>
              <Button size="sm" variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/5">
                Contact Teacher
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
