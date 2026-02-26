import React from 'react';
import { BookOpen, Users, TrendingUp, Clock, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';

const borrowingData = [
  { month: 'Sep', books: 245 },
  { month: 'Oct', books: 312 },
  { month: 'Nov', books: 289 },
  { month: 'Dec', books: 198 },
  { month: 'Jan', books: 356 },
  { month: 'Feb', books: 378 },
];

const popularBooks = [
  { title: 'The Theory of Everything', author: 'Stephen Hawking', borrowed: 45, category: 'Science', available: 2 },
  { title: 'Sapiens', author: 'Yuval Noah Harari', borrowed: 38, category: 'History', available: 1 },
  { title: 'Atomic Habits', author: 'James Clear', borrowed: 42, category: 'Self-Help', available: 3 },
  { title: 'Brief History of Time', author: 'Stephen Hawking', borrowed: 35, category: 'Science', available: 4 },
  { title: '1984', author: 'George Orwell', borrowed: 31, category: 'Fiction', available: 5 },
];

const recentActivity = [
  { student: 'Arjun Sharma', book: 'The Alchemist', action: 'borrowed', time: '2 hours ago' },
  { student: 'Priya Singh', book: 'Harry Potter', action: 'returned', time: '3 hours ago' },
  { student: 'Rohan Mehta', book: 'Physics Textbook', action: 'borrowed', time: '5 hours ago' },
  { student: 'Ananya Desai', book: 'Math Problems', action: 'returned', time: '1 day ago' },
];

const stats = [
  { label: 'Total Books', value: '12,450', icon: BookOpen, color: '#2563EB' },
  { label: 'Borrowed', value: '1,247', icon: Clock, color: '#F59E0B' },
  { label: 'Active Members', value: '892', icon: Users, color: '#10B981' },
  { label: 'Monthly Avg', value: '297', icon: TrendingUp, color: '#7C3AED' },
];

const categoryUtilization = [
  { category: 'Science', utilization: 78 },
  { category: 'Mathematics', utilization: 85 },
  { category: 'Literature', utilization: 92 },
  { category: 'History', utilization: 65 },
  { category: 'Fiction', utilization: 88 },
];

export const LibraryView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Library Management 📖
        </h1>
        <p className="text-slate-500 text-sm lg:text-base">Book inventory and borrowing analytics</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 mb-3" style={{ color: stat.color }} />
            <p className="text-xl lg:text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>
              {stat.value}
            </p>
            <p className="text-xs text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-6">
        {/* Borrowing Trend */}
        <div className="lg:col-span-2 glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-slate-800 mb-4">Monthly Borrowing Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={borrowingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="month" stroke="#9CA3AF" tick={{ fontSize: 12 }} />
              <YAxis stroke="#9CA3AF" tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  color: '#1E293B'
                }} 
              />
              <Bar dataKey="books" fill="#2563EB" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Utilization */}
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-slate-800 mb-4">Category Usage</h2>
          <div className="space-y-4">
            {categoryUtilization.map((cat) => (
              <div key={cat.category}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-slate-800">{cat.category}</span>
                  <span className="text-sm text-slate-500">{cat.utilization}%</span>
                </div>
                <Progress value={cat.utilization} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Popular Books */}
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-slate-800 mb-4">Most Popular Books 🔥</h2>
          <div className="space-y-3">
            {popularBooks.map((book, idx) => (
              <div key={idx} className="glass-card rounded-xl p-3 lg:p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-slate-800 font-semibold text-sm truncate">{book.title}</h4>
                    <p className="text-xs text-slate-500 mb-2">{book.author}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className="bg-[#7C3AED]/20 text-[#7C3AED] border-none text-xs">
                        {book.category}
                      </Badge>
                      <Badge className="bg-[#F59E0B]/20 text-[#F59E0B] border-none text-xs">
                        {book.borrowed} borrowed
                      </Badge>
                      <Badge className={`${
                        book.available > 0 ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#F43F5E]/20 text-[#F43F5E]'
                      } border-none text-xs`}>
                        {book.available} available
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-slate-800 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="glass-card rounded-xl p-3 lg:p-4">
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activity.action === 'borrowed' ? 'bg-[#F59E0B]/20' : 'bg-[#10B981]/20'
                  }`}>
                    {activity.action === 'borrowed' ? (
                      <Clock className="w-4 h-4 text-[#F59E0B]" />
                    ) : (
                      <Award className="w-4 h-4 text-[#10B981]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-800 text-sm">
                      <span className="font-semibold">{activity.student}</span>
                      <span className="text-slate-500"> {activity.action} </span>
                    </p>
                    <p className="text-sm text-slate-800 truncate">{activity.book}</p>
                    <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button className="w-full mt-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm">
            View All Activity
          </Button>
        </div>
      </div>
    </div>
  );
};
