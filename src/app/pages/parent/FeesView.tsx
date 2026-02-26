import React from 'react';
import { DollarSign, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';

const feeStructure = [
  { child: 'Arjun', class: '8B', tuition: 25000, transport: 5000, activities: 3000, total: 33000, paid: 33000, status: 'paid' },
  { child: 'Priya', class: '6A', tuition: 22000, transport: 5000, activities: 2500, total: 29500, paid: 20000, status: 'partial' },
];

const paymentHistory = [
  { date: 'Feb 15, 2026', child: 'Arjun', amount: 33000, method: 'Online', status: 'completed' },
  { date: 'Feb 10, 2026', child: 'Priya', amount: 20000, method: 'Online', status: 'completed' },
  { date: 'Jan 15, 2026', child: 'Arjun', amount: 33000, method: 'Cheque', status: 'completed' },
];

export const FeesView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Fee Payment 💰
        </h1>
        <p className="text-slate-500 text-sm lg:text-base">Manage school fee payments</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <DollarSign className="w-6 h-6 lg:w-8 lg:h-8 text-[#10B981] mb-3" />
          <p className="text-xl lg:text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>₹53,000</p>
          <p className="text-xs text-slate-500">Paid This Term</p>
        </div>
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-[#F59E0B] mb-3" />
          <p className="text-xl lg:text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>₹9,500</p>
          <p className="text-xs text-slate-500">Pending</p>
        </div>
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <AlertCircle className="w-6 h-6 lg:w-8 lg:h-8 text-[#2563EB] mb-3" />
          <p className="text-xl lg:text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-mono)' }}>Mar 5</p>
          <p className="text-xs text-slate-500">Next Due Date</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
        {feeStructure.map((fee, idx) => (
          <div key={idx} className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-800">{fee.child}</h2>
                <p className="text-sm text-slate-500">Class {fee.class}</p>
              </div>
              <Badge className={`${
                fee.status === 'paid' ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#F59E0B]/20 text-[#F59E0B]'
              } border-none`}>
                {fee.status === 'paid' ? 'Paid' : 'Pending'}
              </Badge>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Tuition Fee</span>
                <span className="text-slate-800">₹{fee.tuition.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Transport</span>
                <span className="text-slate-800">₹{fee.transport.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Activities</span>
                <span className="text-slate-800">₹{fee.activities.toLocaleString()}</span>
              </div>
              <div className="border-t border-slate-200 pt-2 mt-2 flex justify-between font-semibold">
                <span className="text-slate-800">Total</span>
                <span className="text-slate-800">₹{fee.total.toLocaleString()}</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-slate-500">Paid: ₹{fee.paid.toLocaleString()}</span>
                <span className="text-slate-800">{((fee.paid / fee.total) * 100).toFixed(0)}%</span>
              </div>
              <Progress value={(fee.paid / fee.total) * 100} className="h-2" />
            </div>

            {fee.status === 'partial' && (
              <Button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                Pay Remaining ₹{(fee.total - fee.paid).toLocaleString()}
              </Button>
            )}
          </div>
        ))}
      </div>

      <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Payment History</h2>
        <div className="space-y-3">
          {paymentHistory.map((payment, idx) => (
            <div key={idx} className="glass-card rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#10B981]" />
                <div>
                  <p className="text-slate-800 font-semibold text-sm">{payment.child}</p>
                  <p className="text-xs text-slate-500">{payment.date} • {payment.method}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-slate-800 font-semibold">₹{payment.amount.toLocaleString()}</p>
                <Badge className="bg-[#10B981]/20 text-[#10B981] border-none text-xs mt-1">
                  {payment.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
