import React from 'react';
import { FileText, Calendar, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { Badge } from '../../components/ui/badge';

const homework = {
  pending: [
    {
      id: 1,
      subject: 'Mathematics',
      title: 'Chapter 7: Quadratic Equations - Exercise 7.3 (Q 1-10)',
      dueDate: 'Feb 24, 2026',
      dueTime: '11:59 PM',
      priority: 'high',
      estimatedTime: '45 mins',
      attachments: 2
    },
    {
      id: 2,
      subject: 'Science',
      title: 'Lab Report: Chemical Reactions Experiment',
      dueDate: 'Feb 25, 2026',
      dueTime: '5:00 PM',
      priority: 'high',
      estimatedTime: '1 hour',
      attachments: 1
    },
    {
      id: 3,
      subject: 'English',
      title: 'Essay: "The Impact of Technology on Education" (500 words)',
      dueDate: 'Feb 27, 2026',
      dueTime: '11:59 PM',
      priority: 'medium',
      estimatedTime: '1.5 hours',
      attachments: 0
    },
    {
      id: 4,
      subject: 'History',
      title: 'Read Chapter 12 and answer review questions',
      dueDate: 'Feb 28, 2026',
      dueTime: '11:59 PM',
      priority: 'low',
      estimatedTime: '30 mins',
      attachments: 1
    },
  ],
  completed: [
    {
      id: 5,
      subject: 'Mathematics',
      title: 'Linear Equations Practice Set',
      submittedDate: 'Feb 20, 2026',
      grade: 'A',
      feedback: 'Excellent work! All solutions are correct.'
    },
    {
      id: 6,
      subject: 'Science',
      title: 'Photosynthesis Diagram and Explanation',
      submittedDate: 'Feb 19, 2026',
      grade: 'A+',
      feedback: 'Outstanding! Very detailed diagram.'
    },
    {
      id: 7,
      subject: 'English',
      title: 'Grammar Exercise - Tenses',
      submittedDate: 'Feb 18, 2026',
      grade: 'B+',
      feedback: 'Good work, minor errors in present perfect tense.'
    },
  ]
};

const weeklyProgress = [
  { day: 'Mon', completed: 3, total: 4 },
  { day: 'Tue', completed: 4, total: 4 },
  { day: 'Wed', completed: 2, total: 5 },
  { day: 'Thu', completed: 3, total: 3 },
  { day: 'Fri', completed: 0, total: 4 },
];

export const HomeworkView: React.FC = () => {
  const totalPending = homework.pending.length;
  const completionRate = Math.round((homework.completed.length / (homework.completed.length + totalPending)) * 100);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Homework & Assignments 📝
        </h1>
        <p className="text-white/60">Track your assignments and stay organized</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="glass-card rounded-2xl p-6">
          <AlertCircle className="w-8 h-8 text-[#F43F5E] mb-3" />
          <p className="text-sm text-white/60 mb-1">Pending</p>
          <p className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>{totalPending}</p>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <Clock className="w-8 h-8 text-[#F59E0B] mb-3" />
          <p className="text-sm text-white/60 mb-1">Due Soon</p>
          <p className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>2</p>
          <p className="text-xs text-white/40 mt-1">Next 24 hours</p>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <CheckCircle className="w-8 h-8 text-[#10B981] mb-3" />
          <p className="text-sm text-white/60 mb-1">Completed</p>
          <p className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>{homework.completed.length}</p>
          <p className="text-xs text-white/40 mt-1">This week</p>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <FileText className="w-8 h-8 text-[#2563EB] mb-3" />
          <p className="text-sm text-white/60 mb-1">Completion Rate</p>
          <p className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>{completionRate}%</p>
          <Progress value={completionRate} className="mt-2 h-1" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Pending Homework */}
        <div className="col-span-2">
          <div className="glass-card rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Pending Homework</h2>
            <div className="space-y-3">
              {homework.pending.map((item) => {
                const isUrgent = item.priority === 'high';
                return (
                  <div 
                    key={item.id}
                    className={`glass-card rounded-xl p-4 ${
                      isUrgent ? 'border border-[#F43F5E]/30' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3 flex-1">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          item.subject === 'Mathematics' ? 'bg-[#2563EB]/20' :
                          item.subject === 'Science' ? 'bg-[#10B981]/20' :
                          item.subject === 'English' ? 'bg-[#F59E0B]/20' :
                          'bg-[#7C3AED]/20'
                        }`}>
                          <FileText className={`w-5 h-5 ${
                            item.subject === 'Mathematics' ? 'text-[#2563EB]' :
                            item.subject === 'Science' ? 'text-[#10B981]' :
                            item.subject === 'English' ? 'text-[#F59E0B]' :
                            'text-[#7C3AED]'
                          }`} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-white font-semibold">{item.subject}</h3>
                            {isUrgent && (
                              <Badge className="bg-[#F43F5E]/20 text-[#F43F5E] border-none text-xs">
                                High Priority
                              </Badge>
                            )}
                          </div>
                          <p className="text-white/80 text-sm mb-2">{item.title}</p>
                          <div className="flex items-center gap-4 text-xs text-white/60">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              Due: {item.dueDate} at {item.dueTime}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              ~{item.estimatedTime}
                            </div>
                            {item.attachments > 0 && (
                              <span>📎 {item.attachments} file{item.attachments > 1 ? 's' : ''}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <Button 
                        size="sm" 
                        className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white"
                      >
                        Start
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Completed Homework */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Recently Completed</h2>
            <div className="space-y-3">
              {homework.completed.map((item) => (
                <div key={item.id} className="glass-card rounded-xl p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-[#10B981]/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-[#10B981]" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{item.subject}</h3>
                        <p className="text-white/70 text-sm mb-2">{item.title}</p>
                        <p className="text-xs text-white/60">Submitted: {item.submittedDate}</p>
                        {item.feedback && (
                          <div className="mt-2 bg-white/5 rounded-lg p-2">
                            <p className="text-xs text-white/80">💬 {item.feedback}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className={`px-3 py-1 rounded-lg font-bold ${
                      item.grade.startsWith('A') ? 'bg-[#10B981]/20 text-[#10B981]' :
                      item.grade.startsWith('B') ? 'bg-[#2563EB]/20 text-[#2563EB]' :
                      'bg-[#F59E0B]/20 text-[#F59E0B]'
                    }`}>
                      {item.grade}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* Weekly Progress */}
          <div className="glass-card rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">This Week</h2>
            <div className="space-y-4">
              {weeklyProgress.map((day, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white">{day.day}</span>
                    <span className="text-sm text-white/60">{day.completed}/{day.total}</span>
                  </div>
                  <Progress 
                    value={(day.completed / day.total) * 100} 
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ARIA Study Tips */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">ARIA Study Tips</h2>
            <div className="space-y-3">
              <div className="bg-[#F43F5E]/10 border border-[#F43F5E]/20 rounded-xl p-4">
                <p className="text-sm text-white/90">
                  🚨 2 assignments due in next 24 hours! Prioritize Math and Science.
                </p>
              </div>

              <div className="bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-xl p-4">
                <p className="text-sm text-white/90">
                  💡 Best study time for you: 4-6 PM. You're 30% more productive then!
                </p>
              </div>

              <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-xl p-4">
                <p className="text-sm text-white/90">
                  ⭐ Great job! Your submission rate is 85% this month.
                </p>
              </div>

              <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-xl p-4">
                <p className="text-sm text-white/90">
                  📚 English essay due soon. I can help you brainstorm ideas!
                </p>
                <Button size="sm" className="w-full mt-3 bg-[#F59E0B] hover:bg-[#D97706] text-white">
                  Chat with ARIA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
