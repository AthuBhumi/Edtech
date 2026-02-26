import React, { useState } from 'react';
import { Bus, MapPin, Clock, User, Phone, AlertCircle, CheckCircle, Navigation } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

const busInfo = {
  routeNumber: '7A',
  driver: 'Mr. Kumar Singh',
  driverPhone: '+91 98765 43210',
  vehicle: 'TN 01 AB 1234',
  capacity: 45,
  currentOccupancy: 32,
  status: 'on-time',
  eta: '15 mins',
  nextStop: 'Rajiv Gandhi Nagar',
  distanceToYou: '2.5 km'
};

const route = [
  { stop: 'School', time: '7:00 AM', status: 'completed', distance: '12 km' },
  { stop: 'Anna Nagar Junction', time: '7:15 AM', status: 'completed', distance: '10 km' },
  { stop: 'T. Nagar Market', time: '7:28 AM', status: 'completed', distance: '7.5 km' },
  { stop: 'Rajiv Gandhi Nagar', time: '7:42 AM', status: 'current', distance: '2.5 km' },
  { stop: 'Lakshmi Colony (Your Stop)', time: '7:50 AM', status: 'upcoming', distance: '0 km' },
  { stop: 'Velachery Main Road', time: '8:05 AM', status: 'upcoming', distance: '-3 km' },
  { stop: 'Final Stop - School', time: '8:20 AM', status: 'upcoming', distance: '-8 km' },
];

const morningPickup = '7:50 AM';
const eveningPickup = '3:30 PM';

export const BusTrackerView: React.FC = () => {
  const [viewMode, setViewMode] = useState<'morning' | 'evening'>('morning');

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          School Bus Tracker 🚌
        </h1>
        <p className="text-slate-500">Live tracking and schedule for Route {busInfo.routeNumber}</p>
      </div>

      {/* Toggle Morning/Evening */}
      <div className="flex gap-2 mb-6">
        <Button
          onClick={() => setViewMode('morning')}
          className={viewMode === 'morning' 
            ? 'bg-[#2563EB] text-white' 
            : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
          }
        >
          Morning Pickup
        </Button>
        <Button
          onClick={() => setViewMode('evening')}
          className={viewMode === 'evening' 
            ? 'bg-[#2563EB] text-white' 
            : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
          }
        >
          Evening Pickup
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Live Map & Status */}
        <div className="col-span-2">
          {/* Live Status Card */}
          <div className="glass-card rounded-2xl p-6 mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#10B981]/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-slate-800">Route {busInfo.routeNumber}</h2>
                    <Badge className="bg-[#10B981]/20 text-[#10B981] border-none">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {busInfo.status === 'on-time' ? 'On Time' : 'Delayed'}
                    </Badge>
                  </div>
                  <p className="text-slate-500">Live tracking active</p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-slate-500 mb-1">ETA to your stop</p>
                  <p className="text-4xl font-bold text-[#10B981]" style={{ fontFamily: 'var(--font-mono)' }}>
                    {busInfo.eta}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="glass-card rounded-xl p-4">
                  <MapPin className="w-5 h-5 text-[#2563EB] mb-2" />
                  <p className="text-xs text-slate-500 mb-1">Current Location</p>
                  <p className="text-slate-800 font-semibold">{busInfo.nextStop}</p>
                  <p className="text-xs text-slate-400 mt-1">{busInfo.distanceToYou} from you</p>
                </div>

                <div className="glass-card rounded-xl p-4">
                  <Clock className="w-5 h-5 text-[#F59E0B] mb-2" />
                  <p className="text-xs text-slate-500 mb-1">Your Pickup Time</p>
                  <p className="text-slate-800 font-semibold">{viewMode === 'morning' ? morningPickup : eveningPickup}</p>
                  <p className="text-xs text-slate-400 mt-1">Be ready 5 mins early</p>
                </div>

                <div className="glass-card rounded-xl p-4">
                  <Bus className="w-5 h-5 text-[#7C3AED] mb-2" />
                  <p className="text-xs text-slate-500 mb-1">Occupancy</p>
                  <p className="text-slate-800 font-semibold">{busInfo.currentOccupancy}/{busInfo.capacity}</p>
                  <p className="text-xs text-slate-400 mt-1">{busInfo.capacity - busInfo.currentOccupancy} seats free</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Live Map</h3>
            <div className="bg-slate-50 rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
              {/* Gradient background to simulate map */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 via-[#06B6D4]/10 to-[#10B981]/10" />
              
              {/* Bus icon in center */}
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full bg-[#2563EB]/30 flex items-center justify-center mb-3 mx-auto animate-pulse">
                  <Bus className="w-10 h-10 text-[#2563EB]" />
                </div>
                <p className="text-slate-500 text-sm">Bus is currently at</p>
                <p className="text-slate-800 font-semibold">{busInfo.nextStop}</p>
                <p className="text-slate-400 text-xs mt-2">Moving towards your stop</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 glass-card rounded-lg px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
                  <span className="text-xs text-slate-800">Live</span>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 glass-card rounded-lg px-3 py-2">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#06B6D4]" />
                  <span className="text-xs text-slate-800">{busInfo.distanceToYou} away</span>
                </div>
              </div>
            </div>

            <Button className="w-full mt-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
              <Navigation className="w-4 h-4 mr-2" />
              Open in Google Maps
            </Button>
          </div>
        </div>

        {/* Route Details & Driver Info */}
        <div>
          {/* Driver Info */}
          <div className="glass-card rounded-2xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Driver Details</h3>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-slate-800 font-bold">
                KS
              </div>
              <div>
                <p className="text-slate-800 font-semibold">{busInfo.driver}</p>
                <p className="text-xs text-slate-500">Route {busInfo.routeNumber} • {busInfo.vehicle}</p>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full glass-card border-slate-200 text-slate-800 hover:bg-slate-100"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Driver
            </Button>
          </div>

          {/* Route Stops */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Route Stops</h3>
            <div className="space-y-3">
              {route.map((stop, idx) => {
                const isCurrent = stop.status === 'current';
                const isCompleted = stop.status === 'completed';
                const isYourStop = stop.stop.includes('Your Stop');

                return (
                  <div key={idx} className="relative">
                    {idx < route.length - 1 && (
                      <div 
                        className={`absolute left-4 top-8 w-0.5 h-12 ${
                          isCompleted ? 'bg-[#10B981]' : 'bg-slate-100'
                        }`}
                      />
                    )}
                    
                    <div className={`flex items-start gap-3 ${
                      isYourStop ? 'bg-[#2563EB]/10 border border-[#2563EB]/30 rounded-xl p-3' : ''
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isCompleted ? 'bg-[#10B981] text-white' :
                        isCurrent ? 'bg-[#F59E0B] text-white animate-pulse' :
                        'bg-slate-100 text-slate-400'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : isCurrent ? (
                          <Bus className="w-4 h-4" />
                        ) : (
                          <MapPin className="w-4 h-4" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <p className={`font-medium ${
                            isYourStop ? 'text-[#2563EB]' :
                            isCurrent ? 'text-slate-800' :
                            isCompleted ? 'text-slate-500' :
                            'text-slate-400'
                          }`}>
                            {stop.stop}
                          </p>
                          {isYourStop && (
                            <Badge className="bg-[#2563EB]/20 text-[#2563EB] border-none text-xs">
                              Your Stop
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-slate-500">{stop.time}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ARIA Alerts */}
          <div className="glass-card rounded-2xl p-6 mt-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">ARIA Alerts</h3>
            <div className="space-y-3">
              <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-xl p-3">
                <p className="text-sm text-slate-800">
                  ✅ Bus is on time! Arrive at your stop by {viewMode === 'morning' ? '7:45 AM' : '3:25 PM'}
                </p>
              </div>

              <div className="bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-xl p-3">
                <p className="text-sm text-slate-800">
                  🔔 I'll notify you when the bus is 5 mins away
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
