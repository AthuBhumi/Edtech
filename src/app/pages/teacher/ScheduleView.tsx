import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Badge } from '../../components/ui/badge';

const schedule = [
  { day: 'Monday', slots: [
    { time: '8:00-9:00', subject: 'Mathematics', class: '8A', room: 'Room 201', students: 34 },
    { time: '9:00-10:00', subject: 'Mathematics', class: '9A', room: 'Room 201', students: 30 },
    { time: '11:00-12:00', subject: 'Free Period', class: '-', room: 'Staff Room', students: 0 },
    { time: '1:00-2:00', subject: 'Mathematics', class: '8B', room: 'Room 201', students: 32 },
  ]},
  { day: 'Tuesday', slots: [
    { time: '8:00-9:00', subject: 'Mathematics', class: '9A', room: 'Room 201', students: 30 },
    { time: '10:00-11:00', subject: 'Mathematics', class: '8A', room: 'Room 201', students: 34 },
    { time: '12:00-1:00', subject: 'Doubt Session', class: 'All', room: 'Room 201', students: 15 },
    { time: '2:00-3:00', subject: 'Mathematics', class: '8B', room: 'Room 201', students: 32 },
  ]},
  { day: 'Wednesday', slots: [
    { time: '8:00-9:00', subject: 'Mathematics', class: '8B', room: 'Room 201', students: 32 },
    { time: '9:00-10:00', subject: 'Free Period', class: '-', room: 'Staff Room', students: 0 },
    { time: '11:00-12:00', subject: 'Mathematics', class: '8A', room: 'Room 201', students: 34 },
    { time: '1:00-2:00', subject: 'Mathematics', class: '9A', room: 'Room 201', students: 30 },
  ]},
  { day: 'Thursday', slots: [
    { time: '8:00-9:00', subject: 'Mathematics', class: '8A', room: 'Room 201', students: 34 },
    { time: '10:00-11:00', subject: 'Mathematics', class: '9A', room: 'Room 201', students: 30 },
    { time: '11:00-12:00', subject: 'Mathematics', class: '8B', room: 'Room 201', students: 32 },
    { time: '2:00-3:00', subject: 'Staff Meeting', class: '-', room: 'Conference Hall', students: 0 },
  ]},
  { day: 'Friday', slots: [
    { time: '8:00-9:00', subject: 'Mathematics', class: '9A', room: 'Room 201', students: 30 },
    { time: '9:00-10:00', subject: 'Mathematics', class: '8B', room: 'Room 201', students: 32 },
    { time: '11:00-12:00', subject: 'Mathematics', class: '8A', room: 'Room 201', students: 34 },
    { time: '1:00-2:00', subject: 'Activity Period', class: 'All', room: 'Auditorium', students: 50 },
  ]},
];

const today = 'Monday';

export const ScheduleView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          My Schedule 📅
        </h1>
        <p className="text-white/60 text-sm lg:text-base">Weekly timetable and class schedule</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-4">
        {schedule.map((day) => (
          <div key={day.day} className={`glass-card rounded-xl lg:rounded-2xl p-4 ${
            day.day === today ? 'ring-2 ring-[#2563EB]' : ''
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base lg:text-lg font-semibold text-white">{day.day}</h2>
              {day.day === today && (
                <Badge className="bg-[#2563EB]/20 text-[#2563EB] border-none text-xs">Today</Badge>
              )}
            </div>

            <div className="space-y-2">
              {day.slots.map((slot, idx) => (
                <div 
                  key={idx} 
                  className={`glass-card rounded-lg p-3 ${
                    slot.subject === 'Free Period' || slot.subject === 'Staff Meeting' || slot.subject === 'Activity Period'
                      ? 'opacity-60'
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-3 h-3 text-[#F59E0B]" />
                    <span className="text-xs text-white/80 font-medium">{slot.time}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{slot.subject}</h3>
                  {slot.class !== '-' && (
                    <>
                      <div className="flex items-center gap-2 text-xs text-white/60 mb-1">
                        <Users className="w-3 h-3" />
                        <span>Class {slot.class} • {slot.students} students</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <MapPin className="w-3 h-3" />
                        <span>{slot.room}</span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
