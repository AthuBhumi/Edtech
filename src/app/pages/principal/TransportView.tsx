import React from 'react';
import { Bus, MapPin, Clock, Users, AlertTriangle, CheckCircle } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';

const busRoutes = [
  { id: 1, name: 'Route A - North', bus: 'DL-01-AB-1234', driver: 'Rajesh Kumar', students: 42, capacity: 50, status: 'active', eta: '8:15 AM', location: 'Sector 21' },
  { id: 2, name: 'Route B - East', bus: 'DL-01-CD-5678', driver: 'Amit Singh', students: 38, capacity: 50, status: 'active', eta: '8:20 AM', location: 'Lajpat Nagar' },
  { id: 3, name: 'Route C - South', bus: 'DL-01-EF-9012', driver: 'Suresh Yadav', students: 45, capacity: 50, status: 'delayed', eta: '8:35 AM', location: 'Saket' },
  { id: 4, name: 'Route D - West', bus: 'DL-01-GH-3456', driver: 'Vikram Sharma', students: 40, capacity: 50, status: 'active', eta: '8:10 AM', location: 'Janakpuri' },
  { id: 5, name: 'Route E - Central', bus: 'DL-01-IJ-7890', driver: 'Ramesh Gupta', students: 35, capacity: 50, status: 'maintenance', eta: 'N/A', location: 'School Garage' },
];

const recentAlerts = [
  { type: 'delay', route: 'Route C - South', message: 'Heavy traffic on Ring Road', time: '10 mins ago' },
  { type: 'maintenance', route: 'Route E - Central', message: 'Scheduled maintenance today', time: '1 hour ago' },
];

const stats = [
  { label: 'Total Buses', value: '12', icon: Bus, color: '#2563EB' },
  { label: 'Active Routes', value: '10', icon: MapPin, color: '#10B981' },
  { label: 'Total Students', value: '485', icon: Users, color: '#F59E0B' },
  { label: 'Avg Occupancy', value: '81%', icon: CheckCircle, color: '#7C3AED' },
];

export const TransportView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Transport Management 🚌
        </h1>
        <p className="text-slate-500 text-sm lg:text-base">Live bus tracking and route management</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Bus Routes */}
        <div className="lg:col-span-2 glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <h2 className="text-lg lg:text-xl font-semibold text-slate-800 mb-4">Live Bus Status</h2>
          <div className="space-y-3">
            {busRoutes.map((route) => (
              <div key={route.id} className="glass-card rounded-xl p-3 lg:p-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center ${
                      route.status === 'active' ? 'bg-[#10B981]/20' :
                      route.status === 'delayed' ? 'bg-[#F59E0B]/20' :
                      'bg-[#F43F5E]/20'
                    }`}>
                      <Bus className={`w-5 h-5 lg:w-6 lg:h-6 ${
                        route.status === 'active' ? 'text-[#10B981]' :
                        route.status === 'delayed' ? 'text-[#F59E0B]' :
                        'text-[#F43F5E]'
                      }`} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-slate-800 font-semibold text-sm lg:text-base truncate">{route.name}</h3>
                      <p className="text-xs text-slate-500">{route.bus} • {route.driver}</p>
                    </div>
                  </div>

                  <Badge className={`${
                    route.status === 'active' ? 'bg-[#10B981]/20 text-[#10B981]' :
                    route.status === 'delayed' ? 'bg-[#F59E0B]/20 text-[#F59E0B]' :
                    'bg-[#F43F5E]/20 text-[#F43F5E]'
                  } border-none text-xs`}>
                    {route.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Location</p>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#2563EB]" />
                      <p className="text-xs text-slate-800 truncate">{route.location}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">ETA</p>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#F59E0B]" />
                      <p className="text-xs text-slate-800">{route.eta}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Occupancy</p>
                    <p className="text-xs text-slate-800 font-semibold">{route.students}/{route.capacity}</p>
                  </div>
                  <div className="flex items-end">
                    <Button size="sm" variant="ghost" className="text-[#2563EB] hover:bg-[#2563EB]/10 h-8 text-xs w-full lg:w-auto">
                      Track
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4 lg:space-y-6">
          {/* Recent Alerts */}
          <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <h2 className="text-lg lg:text-xl font-semibold text-slate-800 mb-4">Recent Alerts 🚨</h2>
            <div className="space-y-3">
              {recentAlerts.map((alert, idx) => (
                <div key={idx} className="glass-card rounded-xl p-3">
                  <div className="flex items-start gap-3 mb-2">
                    <AlertTriangle className={`w-5 h-5 flex-shrink-0 ${
                      alert.type === 'delay' ? 'text-[#F59E0B]' : 'text-[#F43F5E]'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-800 font-semibold text-sm">{alert.route}</p>
                      <p className="text-xs text-slate-500 mb-1">{alert.message}</p>
                      <p className="text-xs text-slate-400">{alert.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <h2 className="text-lg lg:text-xl font-semibold text-slate-800 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Button className="w-full justify-start bg-[#2563EB]/10 hover:bg-[#2563EB]/20 text-[#2563EB] border border-[#2563EB]/30 text-sm">
                <Bus className="w-4 h-4 mr-2" />
                Add New Route
              </Button>
              <Button className="w-full justify-start bg-[#10B981]/10 hover:bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                View All Routes
              </Button>
              <Button className="w-full justify-start bg-[#F59E0B]/10 hover:bg-[#F59E0B]/20 text-[#D97706] border border-[#F59E0B]/30 text-sm">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Send Alert (2)
              </Button>
            </div>
          </div>

          {/* Map Preview */}
          <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <h2 className="text-lg lg:text-xl font-semibold text-slate-800 mb-4">Live Map</h2>
            <div className="aspect-square rounded-lg bg-gradient-to-br from-[#DBEAFE] to-[#E0F2FE] flex items-center justify-center">
              <MapPin className="w-12 h-12 text-[#06B6D4] opacity-50" />
            </div>
            <Button className="w-full mt-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm">
              View Full Map
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
