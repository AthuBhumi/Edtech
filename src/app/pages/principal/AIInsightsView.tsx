import React from 'react';
import { Sparkles, TrendingUp, AlertCircle, Users, BookOpen, Award } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';

const insights = [
  {
    type: 'urgent',
    icon: AlertCircle,
    color: '#F43F5E',
    title: 'Student Performance Alert',
    description: '23 students showing declining performance in Mathematics. Immediate intervention recommended.',
    action: 'View Details',
    priority: 'high'
  },
  {
    type: 'success',
    icon: TrendingUp,
    color: '#10B981',
    title: 'Science Department Excellence',
    description: 'Class 10A achieved 96% average in Science. Consider highlighting their methods.',
    action: 'Share Best Practices',
    priority: 'medium'
  },
  {
    type: 'info',
    icon: Users,
    color: '#2563EB',
    title: 'Attendance Pattern Detected',
    description: 'Friday attendance consistently 4% lower. Consider implementing engagement activities.',
    action: 'Create Plan',
    priority: 'medium'
  },
  {
    type: 'warning',
    icon: BookOpen,
    color: '#F59E0B',
    title: 'Syllabus Progress Behind',
    description: 'Classes 8B and 9A are 12% behind schedule in English. Adjustment needed.',
    action: 'Review Schedule',
    priority: 'high'
  },
];

const predictions = [
  {
    title: 'Board Exam Forecast',
    description: 'Based on current trends, projected pass rate: 97.2%',
    confidence: 94,
    trend: 'up'
  },
  {
    title: 'Enrollment Projection',
    description: 'Expected 8% increase in admissions for next year',
    confidence: 87,
    trend: 'up'
  },
  {
    title: 'Fee Collection',
    description: 'Predicted 95% collection by end of month',
    confidence: 91,
    trend: 'up'
  },
];

const recommendations = [
  {
    category: 'Academic',
    items: [
      'Organize peer tutoring sessions for struggling Math students',
      'Conduct Science workshop to replicate Class 10A success',
      'Schedule remedial classes for English in 8B and 9A'
    ]
  },
  {
    category: 'Operations',
    items: [
      'Plan engaging Friday activities to boost attendance',
      'Review transport routes for delayed buses',
      'Increase library hours during exam season'
    ]
  },
  {
    category: 'Finance',
    items: [
      'Send automated fee reminders to pending accounts',
      'Offer early payment discounts for next term',
      'Review budget allocation for infrastructure'
    ]
  },
];

export const AIInsightsView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#06B6D4] via-[#2563EB] to-[#7C3AED] flex items-center justify-center">
            <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              ARIA Insights
            </h1>
            <p className="text-white/60 text-sm lg:text-base">AI-powered analytics and recommendations</p>
          </div>
        </div>
      </div>

      {/* Priority Insights */}
      <div className="mb-6">
        <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">Priority Insights 🎯</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
          {insights.map((insight, idx) => (
            <div key={idx} className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${insight.color}20` }}>
                  <insight.icon className="w-5 h-5" style={{ color: insight.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-white font-semibold text-sm lg:text-base">{insight.title}</h3>
                    <Badge className={`${
                      insight.priority === 'high' ? 'bg-[#F43F5E]/20 text-[#F43F5E]' : 'bg-[#F59E0B]/20 text-[#F59E0B]'
                    } border-none text-xs flex-shrink-0`}>
                      {insight.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-white/70 mb-3">{insight.description}</p>
                  <Button size="sm" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs h-8">
                    {insight.action}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
        {/* AI Predictions */}
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">AI Predictions 🔮</h2>
          <div className="space-y-4">
            {predictions.map((pred, idx) => (
              <div key={idx} className="glass-card rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-sm mb-1">{pred.title}</h4>
                    <p className="text-xs text-white/70">{pred.description}</p>
                  </div>
                  <Badge className="bg-[#10B981]/20 text-[#10B981] border-none text-xs ml-2">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {pred.trend}
                  </Badge>
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-xs">
                    <span className="text-white/60">Confidence</span>
                    <span className="text-white font-semibold">{pred.confidence}%</span>
                  </div>
                  <Progress value={pred.confidence} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">ARIA Analytics Summary</h2>
          <div className="space-y-4">
            <div className="glass-card rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-[#2563EB]" />
                <span className="text-white font-semibold text-sm">Student Performance</span>
              </div>
              <p className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-mono)' }}>87.4%</p>
              <p className="text-xs text-white/60">Average across all classes</p>
              <Progress value={87} className="h-2 mt-2" />
            </div>

            <div className="glass-card rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-[#10B981]" />
                <span className="text-white font-semibold text-sm">Syllabus Completion</span>
              </div>
              <p className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-mono)' }}>83.2%</p>
              <p className="text-xs text-white/60">On track for year-end</p>
              <Progress value={83} className="h-2 mt-2" />
            </div>

            <div className="glass-card rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-[#F59E0B]" />
                <span className="text-white font-semibold text-sm">Teacher Effectiveness</span>
              </div>
              <p className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-mono)' }}>93.5%</p>
              <p className="text-xs text-white/60">Based on student feedback</p>
              <Progress value={94} className="h-2 mt-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
        <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">ARIA Recommendations 💡</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {recommendations.map((rec, idx) => (
            <div key={idx} className="glass-card rounded-xl p-4">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#06B6D4]" />
                {rec.category}
              </h3>
              <ul className="space-y-2">
                {rec.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-sm text-white/70 flex items-start gap-2">
                    <span className="text-[#06B6D4] flex-shrink-0 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
