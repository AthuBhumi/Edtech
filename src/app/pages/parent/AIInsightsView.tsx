import React from 'react';
import { Sparkles, AlertCircle, TrendingUp, Target } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';

const insights = [
  {
    type: 'success',
    icon: TrendingUp,
    color: '#10B981',
    title: 'Arjun Showing Improvement',
    description: 'Arjun\'s Science scores have improved by 8% this month. Keep encouraging this progress!',
    action: 'View Details',
    priority: 'medium'
  },
  {
    type: 'warning',
    icon: AlertCircle,
    color: '#F59E0B',
    title: 'Priya Needs Support in Math',
    description: 'Priya is finding algebra challenging. Consider arranging extra tutoring sessions.',
    action: 'Contact Teacher',
    priority: 'high'
  },
  {
    type: 'info',
    icon: Target,
    color: '#2563EB',
    title: 'Parent-Teacher Meeting Due',
    description: 'Scheduled meetings with both children\'s class teachers for next week.',
    action: 'Schedule',
    priority: 'medium'
  },
];

const recommendations = [
  {
    child: 'Arjun',
    area: 'Hindi Grammar',
    suggestion: 'Daily 30-minute practice with grammar exercises',
    confidence: 88
  },
  {
    child: 'Priya',
    area: 'Algebra Concepts',
    suggestion: 'One-on-one tutoring twice a week recommended',
    confidence: 92
  },
  {
    child: 'Arjun',
    area: 'Study Habits',
    suggestion: 'Create a structured study schedule with breaks',
    confidence: 85
  },
];

const strengths = [
  { child: 'Arjun', strength: 'Scientific Thinking & Problem Solving', level: 92 },
  { child: 'Priya', strength: 'Communication & Presentation Skills', level: 95 },
];

export const AIInsightsView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#06B6D4] via-[#2563EB] to-[#7C3AED] flex items-center justify-center animate-pulse">
            <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              ARIA Insights
            </h1>
            <p className="text-white/60 text-sm lg:text-base">AI-powered parenting recommendations</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
        {insights.map((insight, idx) => (
          <div key={idx} className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${insight.color}20` }}>
                <insight.icon className="w-5 h-5" style={{ color: insight.color }} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white font-semibold text-base">{insight.title}</h3>
                  <Badge className={`${
                    insight.priority === 'high' ? 'bg-[#F43F5E]/20 text-[#F43F5E]' : 'bg-[#F59E0B]/20 text-[#F59E0B]'
                  } border-none text-xs`}>
                    {insight.priority}
                  </Badge>
                </div>
                <p className="text-sm text-white/70 mb-3">{insight.description}</p>
                <Button size="sm" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs">
                  {insight.action}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg font-semibold text-white mb-4">ARIA Recommendations 💡</h2>
          <div className="space-y-4">
            {recommendations.map((rec, idx) => (
              <div key={idx} className="glass-card rounded-xl p-4">
                <div className="mb-3">
                  <h4 className="text-white font-semibold text-sm mb-1">{rec.child}</h4>
                  <p className="text-xs text-white/60">Focus Area: {rec.area}</p>
                </div>
                <p className="text-sm text-white/80 mb-3">{rec.suggestion}</p>
                <div>
                  <div className="flex justify-between mb-1 text-xs">
                    <span className="text-white/60">AI Confidence</span>
                    <span className="text-white">{rec.confidence}%</span>
                  </div>
                  <Progress value={rec.confidence} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Children's Strengths 💪</h2>
          <div className="space-y-4 mb-6">
            {strengths.map((item, idx) => (
              <div key={idx} className="glass-card rounded-xl p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-white font-semibold">{item.child}</span>
                  <Badge className="bg-[#10B981]/20 text-[#10B981] border-none text-xs">
                    {item.level}%
                  </Badge>
                </div>
                <p className="text-xs text-white/70 mb-2">{item.strength}</p>
                <Progress value={item.level} className="h-2" />
              </div>
            ))}
          </div>

          <div className="glass-card rounded-xl p-4 bg-gradient-to-br from-[#2563EB]/10 to-[#06B6D4]/10">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#06B6D4] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-white font-semibold mb-1">Parenting Tip</p>
                <p className="text-xs text-white/80">
                  Regular positive reinforcement helps build confidence. Celebrate small wins and maintain open communication with teachers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
