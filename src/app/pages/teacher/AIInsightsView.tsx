import React from 'react';
import { Sparkles, AlertCircle, TrendingUp, Users } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';

const insights = [
  {
    type: 'urgent',
    icon: AlertCircle,
    color: '#F43F5E',
    title: 'Students Need Attention',
    description: '5 students in Class 8B showing declining performance in recent tests.',
    students: ['Neha Patel', 'Karan Singh', 'Amit Kumar'],
    action: 'Schedule Tutoring',
    priority: 'high'
  },
  {
    type: 'success',
    icon: TrendingUp,
    color: '#10B981',
    title: 'Class 8A Excelling',
    description: 'Average score improved by 12% this month. Great teaching approach!',
    action: 'Share Methods',
    priority: 'medium'
  },
  {
    type: 'info',
    icon: Users,
    color: '#2563EB',
    title: 'Engagement Opportunity',
    description: 'Students show more interest in practical examples. Consider adding more demos.',
    action: 'Plan Activities',
    priority: 'medium'
  },
];

const studentRecommendations = [
  { name: 'Neha Patel', class: '8A', issue: 'Struggling with Algebra', action: 'Extra practice sheets', confidence: 87 },
  { name: 'Karan Singh', class: '8B', issue: 'Low test scores', action: 'One-on-one session', confidence: 92 },
  { name: 'Amit Kumar', class: '9A', issue: 'Missing assignments', action: 'Parent meeting', confidence: 85 },
];

const teachingTips = [
  'Use more visual aids for Geometry topics - improves retention by 23%',
  'Break down complex problems into steps - helps struggling students',
  'Incorporate real-world examples - increases engagement by 34%',
  'Schedule doubt sessions after difficult topics',
];

export const AIInsightsView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#06B6D4] via-[#2563EB] to-[#7C3AED] flex items-center justify-center">
            <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              ARIA Insights
            </h1>
            <p className="text-white/60 text-sm lg:text-base">Personalized teaching recommendations</p>
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
                {insight.students && (
                  <div className="mb-3">
                    {insight.students.map((student, sIdx) => (
                      <Badge key={sIdx} className="bg-white/10 text-white border-none text-xs mr-2 mb-2">
                        {student}
                      </Badge>
                    ))}
                  </div>
                )}
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
          <h2 className="text-lg font-semibold text-white mb-4">Student Recommendations 🎯</h2>
          <div className="space-y-3">
            {studentRecommendations.map((rec, idx) => (
              <div key={idx} className="glass-card rounded-xl p-4">
                <div className="mb-3">
                  <h4 className="text-white font-semibold text-sm mb-1">{rec.name}</h4>
                  <p className="text-xs text-white/60">Class {rec.class}</p>
                </div>
                <p className="text-sm text-white/80 mb-2">
                  <span className="text-[#F59E0B]">Issue:</span> {rec.issue}
                </p>
                <p className="text-sm text-white/80 mb-3">
                  <span className="text-[#10B981]">Recommendation:</span> {rec.action}
                </p>
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
          <h2 className="text-lg font-semibold text-white mb-4">Teaching Tips 💡</h2>
          <div className="space-y-3">
            {teachingTips.map((tip, idx) => (
              <div key={idx} className="glass-card rounded-xl p-4 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
