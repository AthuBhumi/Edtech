import React, { useState } from 'react';
import { Sparkles, BookOpen, Lightbulb, Target, Send } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';

const studyTips = [
  {
    subject: 'Mathematics',
    tip: 'Break complex problems into smaller steps. Practice 10 problems daily for best results.',
    difficulty: 'Medium'
  },
  {
    subject: 'Science',
    tip: 'Use diagrams and flowcharts to understand concepts. Review your notes before bed.',
    difficulty: 'Easy'
  },
  {
    subject: 'English',
    tip: 'Read 30 minutes daily. Focus on grammar rules you struggle with.',
    difficulty: 'Medium'
  },
];

const studyPlan = [
  { time: '4:00 PM - 5:00 PM', subject: 'Mathematics', topic: 'Quadratic Equations', priority: 'high' },
  { time: '5:15 PM - 6:00 PM', subject: 'Science', topic: 'Chemical Reactions', priority: 'medium' },
  { time: '6:15 PM - 7:00 PM', subject: 'English', topic: 'Essay Writing', priority: 'medium' },
];

const weeklyGoals = [
  { goal: 'Complete 5 Math practice tests', progress: 60, current: 3, total: 5 },
  { goal: 'Read 2 chapters of Science', progress: 50, current: 1, total: 2 },
  { goal: 'Write 3 essays', progress: 33, current: 1, total: 3 },
];

export const StudyWithAriaView: React.FC = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#06B6D4] via-[#2563EB] to-[#7C3AED] flex items-center justify-center animate-pulse">
            <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Study with ARIA ✨
            </h1>
            <p className="text-white/60 text-sm lg:text-base">Your AI study companion</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-6">
        <div className="lg:col-span-2 space-y-4">
          {/* Chat Area */}
          <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Ask ARIA Anything 💬</h2>
            
            <div className="space-y-3 mb-4 max-h-[300px] overflow-y-auto">
              {/* Sample conversation */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#7C3AED] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="glass-card rounded-xl p-3 flex-1">
                  <p className="text-sm text-white">
                    Hi Arjun! I've analyzed your recent performance. You're doing great in Science but need to focus more on Hindi grammar. Shall I create a study plan?
                  </p>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <div className="glass-card rounded-xl p-3 bg-[#2563EB]/20 max-w-[80%]">
                  <p className="text-sm text-white">Yes please! Also, can you help me with quadratic equations?</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">A</span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#7C3AED] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="glass-card rounded-xl p-3 flex-1">
                  <p className="text-sm text-white mb-2">
                    Perfect! For quadratic equations, remember the formula: ax² + bx + c = 0
                  </p>
                  <p className="text-sm text-white mb-3">
                    Let's start with a simple example: x² - 5x + 6 = 0
                  </p>
                  <Badge className="bg-[#10B981]/20 text-[#10B981] border-none text-xs">
                    📚 Practice Problem Available
                  </Badge>
                </div>
              </div>
            </div>

            <div className="relative">
              <Input 
                placeholder="Ask ARIA for help..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="pr-12 bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
              <Button 
                size="sm" 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white h-8 w-8 p-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Today's Study Plan */}
          <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Today's Study Plan 📅</h2>
            <div className="space-y-3">
              {studyPlan.map((item, idx) => (
                <div key={idx} className="glass-card rounded-xl p-3">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm mb-1">{item.subject}</h4>
                      <p className="text-xs text-white/60">{item.topic}</p>
                    </div>
                    <Badge className={`${
                      item.priority === 'high' ? 'bg-[#F43F5E]/20 text-[#F43F5E]' : 'bg-[#F59E0B]/20 text-[#F59E0B]'
                    } border-none text-xs`}>
                      {item.priority}
                    </Badge>
                  </div>
                  <p className="text-xs text-white/60">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Study Tips */}
          <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#F59E0B]" />
              Smart Tips
            </h2>
            <div className="space-y-3">
              {studyTips.map((tip, idx) => (
                <div key={idx} className="glass-card rounded-xl p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-white">{tip.subject}</span>
                    <Badge className={`${
                      tip.difficulty === 'Easy' ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#F59E0B]/20 text-[#F59E0B]'
                    } border-none text-xs`}>
                      {tip.difficulty}
                    </Badge>
                  </div>
                  <p className="text-xs text-white/70">{tip.tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Goals */}
          <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#10B981]" />
              Weekly Goals
            </h2>
            <div className="space-y-4">
              {weeklyGoals.map((goal, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <p className="text-xs text-white">{goal.goal}</p>
                    <span className="text-xs text-white/60">{goal.current}/{goal.total}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-[#10B981] h-2 rounded-full transition-all" 
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Button className="w-full justify-start bg-[#2563EB]/20 hover:bg-[#2563EB]/30 text-white border border-[#2563EB]/30 text-sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Practice Tests
              </Button>
              <Button className="w-full justify-start bg-[#10B981]/20 hover:bg-[#10B981]/30 text-white border border-[#10B981]/30 text-sm">
                <Target className="w-4 h-4 mr-2" />
                Set New Goal
              </Button>
              <Button className="w-full justify-start bg-[#F59E0B]/20 hover:bg-[#F59E0B]/30 text-white border border-[#F59E0B]/30 text-sm">
                <Lightbulb className="w-4 h-4 mr-2" />
                Get Study Tips
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
