import React from 'react';
import { Utensils, Coffee, Pizza, Salad, Sandwich, Clock, Wallet, TrendingUp, Star } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';

const menuItems = [
  { id: 1, name: 'Veg Sandwich', price: 40, category: 'Snacks', icon: Sandwich, rating: 4.5, available: true },
  { id: 2, name: 'Masala Dosa', price: 50, category: 'South Indian', icon: Utensils, rating: 4.8, available: true },
  { id: 3, name: 'Paneer Pizza', price: 80, category: 'Fast Food', icon: Pizza, rating: 4.6, available: true },
  { id: 4, name: 'Fresh Juice', price: 30, category: 'Beverages', icon: Coffee, rating: 4.7, available: true },
  { id: 5, name: 'Fruit Salad', price: 45, category: 'Healthy', icon: Salad, rating: 4.3, available: true },
  { id: 6, name: 'Pav Bhaji', price: 60, category: 'Main Course', icon: Utensils, rating: 4.9, available: false },
];

const recentOrders = [
  { date: 'Feb 20', items: 'Sandwich + Juice', amount: 70, time: '12:45 PM' },
  { date: 'Feb 19', items: 'Dosa + Coffee', amount: 65, time: '1:00 PM' },
  { date: 'Feb 18', items: 'Pizza + Juice', amount: 110, time: '12:30 PM' },
];

const nutritionGoals = [
  { label: 'Calories', current: 650, target: 800, unit: 'kcal', color: '#2563EB' },
  { label: 'Protein', current: 28, target: 35, unit: 'g', color: '#10B981' },
  { label: 'Budget Used', current: 245, target: 500, unit: '₹', color: '#F59E0B' },
];

export const CanteenView: React.FC = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          School Canteen 🍽️
        </h1>
        <p className="text-white/60">Order your lunch, track nutrition, and manage your wallet</p>
      </div>

      {/* Wallet & Quick Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#10B981]/20 rounded-full blur-2xl" />
          <Wallet className="w-8 h-8 text-[#10B981] mb-3" />
          <p className="text-sm text-white/60 mb-1">Wallet Balance</p>
          <p className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>₹845</p>
          <Button size="sm" className="mt-3 bg-[#10B981] hover:bg-[#059669] text-white">
            Add Money
          </Button>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <Clock className="w-8 h-8 text-[#2563EB] mb-3" />
          <p className="text-sm text-white/60 mb-1">Lunch Break</p>
          <p className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>12:30 PM</p>
          <p className="text-xs text-white/40 mt-2">Starts in 1h 15m</p>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <TrendingUp className="w-8 h-8 text-[#F59E0B] mb-3" />
          <p className="text-sm text-white/60 mb-1">This Week</p>
          <p className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>₹245</p>
          <p className="text-xs text-white/40 mt-2">5 orders placed</p>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <Star className="w-8 h-8 text-[#7C3AED] mb-3" />
          <p className="text-sm text-white/60 mb-1">Favorite</p>
          <p className="text-lg font-bold text-white">Masala Dosa</p>
          <p className="text-xs text-white/40 mt-2">Ordered 12 times</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Today's Menu */}
        <div className="col-span-2">
          <div className="glass-card rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Today's Menu</h2>
            <div className="grid grid-cols-2 gap-4">
              {menuItems.map((item) => (
                <div 
                  key={item.id}
                  className={`glass-card rounded-xl p-4 ${!item.available ? 'opacity-50' : ''}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#06B6D4]" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                      <span className="text-sm text-white font-medium">{item.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                  <p className="text-xs text-white/40 mb-3">{item.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#10B981]" style={{ fontFamily: 'var(--font-mono)' }}>
                      ₹{item.price}
                    </span>
                    <Button 
                      size="sm" 
                      className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white"
                      disabled={!item.available}
                    >
                      {item.available ? 'Add' : 'Sold Out'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Recent Orders</h2>
            <div className="space-y-3">
              {recentOrders.map((order, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 flex items-center justify-center">
                      <Utensils className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{order.items}</p>
                      <p className="text-xs text-white/40">{order.date} • {order.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold" style={{ fontFamily: 'var(--font-mono)' }}>
                      ₹{order.amount}
                    </p>
                    <Button size="sm" variant="ghost" className="text-[#2563EB] hover:bg-[#2563EB]/10 h-7 px-2">
                      Reorder
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nutrition & Goals */}
        <div>
          <div className="glass-card rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Today's Nutrition</h2>
            <div className="space-y-4">
              {nutritionGoals.map((goal, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white">{goal.label}</span>
                    <span className="text-sm text-white/60">
                      {goal.current}/{goal.target} {goal.unit}
                    </span>
                  </div>
                  <Progress 
                    value={(goal.current / goal.target) * 100} 
                    className="h-2"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ARIA Recommendations */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">ARIA Recommends</h2>
            <div className="space-y-3">
              <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-xl p-4">
                <p className="text-sm text-white/90 mb-3">
                  🥗 Try the Fruit Salad today! You're low on vitamins this week.
                </p>
                <Button size="sm" className="w-full bg-[#10B981] hover:bg-[#059669] text-white">
                  Add to Order
                </Button>
              </div>
              
              <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-xl p-4">
                <p className="text-sm text-white/90">
                  💰 You've spent ₹245 this week. Budget remaining: ₹255
                </p>
              </div>

              <div className="bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-xl p-4">
                <p className="text-sm text-white/90">
                  ⭐ Masala Dosa has 4.8★ rating and matches your preferences!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
