import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, CreditCard, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';

const revenueData = [
  { month: 'Sep', revenue: 9.2, expenses: 7.1 },
  { month: 'Oct', revenue: 9.8, expenses: 7.4 },
  { month: 'Nov', revenue: 10.2, expenses: 7.8 },
  { month: 'Dec', revenue: 9.5, expenses: 8.2 },
  { month: 'Jan', revenue: 10.8, expenses: 7.9 },
  { month: 'Feb', revenue: 11.2, expenses: 8.1 },
];

const feeCollection = [
  { class: '8A', collected: 28, pending: 6, total: 34 },
  { class: '8B', collected: 30, pending: 2, total: 32 },
  { class: '9A', collected: 27, pending: 3, total: 30 },
  { class: '9B', collected: 25, pending: 3, total: 28 },
  { class: '10A', collected: 32, pending: 3, total: 35 },
  { class: '10B', collected: 31, pending: 2, total: 33 },
];

const recentTransactions = [
  { date: 'Feb 23', student: 'Arjun Sharma', amount: 24500, status: 'paid', method: 'UPI' },
  { date: 'Feb 23', student: 'Priya Singh', amount: 24500, status: 'paid', method: 'Card' },
  { date: 'Feb 22', student: 'Rohan Mehta', amount: 24500, status: 'pending', method: '-' },
  { date: 'Feb 22', student: 'Ananya Desai', amount: 24500, status: 'paid', method: 'Bank' },
  { date: 'Feb 21', student: 'Vikram Kumar', amount: 24500, status: 'paid', method: 'UPI' },
];

const stats = [
  { label: 'Total Revenue', value: '₹1.12Cr', change: '+12.4%', trend: 'up', icon: DollarSign, color: '#10B981' },
  { label: 'Fee Collection', value: '₹88.5L', change: '+8.2%', trend: 'up', icon: CreditCard, color: '#2563EB' },
  { label: 'Pending Fees', value: '₹4.2L', change: '-15%', trend: 'down', icon: Clock, color: '#F59E0B' },
  { label: 'Expenses', value: '₹8.1L', change: '+2.1%', trend: 'up', icon: TrendingDown, color: '#F43F5E' },
];

export const FinancesView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Financial Management 💰
        </h1>
        <p className="text-white/60 text-sm lg:text-base">Revenue, expenses, and fee collection tracking</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <stat.icon className="w-6 h-6 lg:w-8 lg:h-8" style={{ color: stat.color }} />
              <Badge className={`${
                stat.trend === 'up' && stat.label !== 'Expenses' ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#F43F5E]/20 text-[#F43F5E]'
              } border-none text-xs`}>
                {stat.change}
              </Badge>
            </div>
            <p className="text-xl lg:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>
              {stat.value}
            </p>
            <p className="text-xs text-white/60">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">Revenue vs Expenses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#F43F5E" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="#9CA3AF" tick={{ fontSize: 12 }} />
              <YAxis stroke="#9CA3AF" tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#111827', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Area type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
              <Area type="monotone" dataKey="expenses" stroke="#F43F5E" strokeWidth={2} fillOpacity={1} fill="url(#colorExpenses)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Fee Collection by Class */}
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">Fee Collection</h2>
          <div className="space-y-3">
            {feeCollection.map((cls) => {
              const percentage = (cls.collected / cls.total) * 100;
              return (
                <div key={cls.class}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-white font-medium">{cls.class}</span>
                    <span className="text-sm text-white/60">{cls.collected}/{cls.total}</span>
                  </div>
                  <Progress value={percentage} className="h-2 mb-1" />
                  {cls.pending > 0 && (
                    <p className="text-xs text-[#F59E0B]">{cls.pending} pending</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4">
          <h2 className="text-lg lg:text-xl font-semibold text-white">Recent Transactions</h2>
          <Button size="sm" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
            <AlertCircle className="w-4 h-4 mr-2" />
            Send 47 Reminders
          </Button>
        </div>
        
        <div className="space-y-2 lg:space-y-3">
          {recentTransactions.map((txn, idx) => (
            <div key={idx} className="glass-card rounded-xl p-3 lg:p-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    txn.status === 'paid' ? 'bg-[#10B981]/20' : 'bg-[#F59E0B]/20'
                  }`}>
                    {txn.status === 'paid' ? (
                      <CheckCircle className="w-5 h-5 text-[#10B981]" />
                    ) : (
                      <Clock className="w-5 h-5 text-[#F59E0B]" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm lg:text-base truncate">{txn.student}</p>
                    <p className="text-xs text-white/60">{txn.date} {txn.method && `• ${txn.method}`}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <p className="text-lg lg:text-xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>
                    ₹{txn.amount.toLocaleString()}
                  </p>
                  <Badge className={`${
                    txn.status === 'paid' ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#F59E0B]/20 text-[#F59E0B]'
                  } border-none text-xs`}>
                    {txn.status}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
