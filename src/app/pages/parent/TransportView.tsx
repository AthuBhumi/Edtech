import React from 'react';
import { Bus, MapPin, Clock, Users } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';

const busDetails = [
  { child: 'Arjun', class: '8B', route: 'Route C - South', bus: 'DL-01-EF-9012', driver: 'Suresh Yadav', eta: '8:35 AM', location: 'Approaching Saket', status: 'on-time' },
  { child: 'Priya', class: '6A', route: 'Route A - North', bus: 'DL-01-AB-1234', driver: 'Rajesh Kumar', eta: '8:15 AM', location: 'At School', status: 'arrived' },
];

export const TransportView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Transport Tracking 🚌
        </h1>
        <p className="text-slate-500 text-sm lg:text-base">Track your children's school buses</p>
      </div>

      <div className="space-y-4">
        {busDetails.map((bus, idx) => (
          <div key={idx} className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-800">{bus.child}</h2>
                <p className="text-sm text-slate-500">Class {bus.class} • {bus.route}</p>
              </div>
              <Badge className={`${
                bus.status === 'arrived' ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#2563EB]/20 text-[#2563EB]'
              } border-none`}>
                {bus.status}
              </Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
              <div className="glass-card rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Bus className="w-4 h-4 text-[#2563EB]" />
                  <span className="text-xs text-slate-500">Bus Number</span>
                </div>
                <p className="text-sm text-slate-800 font-semibold">{bus.bus}</p>
              </div>
              <div className="glass-card rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-[#10B981]" />
                  <span className="text-xs text-slate-500">Driver</span>
                </div>
                <p className="text-sm text-slate-800 font-semibold">{bus.driver}</p>
              </div>
              <div className="glass-card rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-[#F59E0B]" />
                  <span className="text-xs text-slate-500">ETA</span>
                </div>
                <p className="text-sm text-slate-800 font-semibold">{bus.eta}</p>
              </div>
              <div className="glass-card rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#F43F5E]" />
                  <span className="text-xs text-slate-500">Location</span>
                </div>
                <p className="text-sm text-slate-800 font-semibold">{bus.location}</p>
              </div>
            </div>

            <Button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
              <MapPin className="w-4 h-4 mr-2" />
              Track on Map
            </Button>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6 mt-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Route Map</h2>
        <div className="aspect-video rounded-lg bg-gradient-to-br from-[#DBEAFE] to-[#E0F2FE] flex items-center justify-center">
          <MapPin className="w-16 h-16 text-[#06B6D4] opacity-50" />
        </div>
      </div>
    </div>
  );
};
