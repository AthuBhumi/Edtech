import React from 'react';
import { Calendar, Clock, MapPin, User, Bell } from 'lucide-react';
import { Badge } from '../../components/ui/badge';

const schedule = {
  Monday: [
    { time: '8:00-8:45', subject: 'Mathematics', teacher: 'Ms. Priya Kumar', room: 'A-201', type: 'theory' },
    { time: '8:45-9:30', subject: 'Science', teacher: 'Mr. Raj Patel', room: 'Lab-2', type: 'lab' },
    { time: '10:00-10:45', subject: 'English', teacher: 'Mrs. Sarah D\'souza', room: 'B-105', type: 'theory' },
    { time: '11:00-11:45', subject: 'History', teacher: 'Mr. Kumar Singh', room: 'C-301', type: 'theory' },
    { time: '12:00-12:45', subject: 'Physical Education', teacher: 'Coach Arjun', room: 'Ground', type: 'activity' },
  ],
  Tuesday: [
    { time: '8:00-8:45', subject: 'Hindi', teacher: 'Mrs. Sharma', room: 'B-102', type: 'theory' },
    { time: '8:45-9:30', subject: 'Mathematics', teacher: 'Ms. Priya Kumar', room: 'A-201', type: 'theory' },
    { time: '10:00-10:45', subject: 'Science', teacher: 'Mr. Raj Patel', room: 'Lab-2', type: 'lab' },
    { time: '11:00-11:45', subject: 'Computer Science', teacher: 'Mr. Anil Tech', room: 'Comp Lab', type: 'lab' },
    { time: '12:00-12:45', subject: 'Art', teacher: 'Ms. Kavita Arts', room: 'Art Room', type: 'activity' },
  ],
  Wednesday: [
    { time: '8:00-8:45', subject: 'Geography', teacher: 'Mr. Desai', room: 'C-305', type: 'theory' },
    { time: '8:45-9:30', subject: 'Mathematics', teacher: 'Ms. Priya Kumar', room: 'A-201', type: 'theory' },
    { time: '10:00-10:45', subject: 'English', teacher: 'Mrs. Sarah D\'souza', room: 'B-105', type: 'theory' },
    { time: '11:00-11:45', subject: 'Science', teacher: 'Mr. Raj Patel', room: 'Lab-2', type: 'lab' },
    { time: '12:00-12:45', subject: 'Music', teacher: 'Mr. Ravi Melody', room: 'Music Room', type: 'activity' },
  ],
  Thursday: [
    { time: '8:00-8:45', subject: 'Mathematics', teacher: 'Ms. Priya Kumar', room: 'A-201', type: 'theory' },
    { time: '8:45-9:30', subject: 'Science', teacher: 'Mr. Raj Patel', room: 'Lab-2', type: 'lab' },
    { time: '10:00-10:45', subject: 'Social Studies', teacher: 'Mrs. Meena', room: 'C-302', type: 'theory' },
    { time: '11:00-11:45', subject: 'Hindi', teacher: 'Mrs. Sharma', room: 'B-102', type: 'theory' },
    { time: '12:00-12:45', subject: 'Library Period', teacher: 'Librarian', room: 'Library', type: 'activity' },
  ],
  Friday: [
    { time: '8:00-8:45', subject: 'English', teacher: 'Mrs. Sarah D\'souza', room: 'B-105', type: 'theory' },
    { time: '8:45-9:30', subject: 'Mathematics', teacher: 'Ms. Priya Kumar', room: 'A-201', type: 'theory' },
    { time: '10:00-10:45', subject: 'Science Project', teacher: 'Mr. Raj Patel', room: 'Lab-2', type: 'lab' },
    { time: '11:00-11:45', subject: 'Computer Science', teacher: 'Mr. Anil Tech', room: 'Comp Lab', type: 'lab' },
    { time: '12:00-12:45', subject: 'Sports', teacher: 'Coach Arjun', room: 'Ground', type: 'activity' },
  ],
};

const upcomingEvents = [
  { date: 'Feb 25', event: 'Science Project Submission', type: 'deadline', color: '#F43F5E' },
  { date: 'Feb 28', event: 'Math Unit Test', type: 'exam', color: '#F59E0B' },
  { date: 'Mar 1', event: 'Annual Sports Day', type: 'event', color: '#10B981' },
  { date: 'Mar 5', event: 'Parent-Teacher Meeting', type: 'meeting', color: '#7C3AED' },
];

export const ScheduleView: React.FC = () => {
  const today = 'Monday'; // In real app, use actual day
  const currentTime = '10:15'; // In real app, use actual time

  const getCurrentPeriod = () => {
    // Logic to determine current period
    return 2; // Example: 3rd period (index 2)
  };

  const currentPeriod = getCurrentPeriod();

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Class Schedule 📅
        </h1>
        <p className="text-white/60">Your weekly timetable and upcoming events</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="col-span-2">
          <div className="glass-card rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Today - {today}</h2>
              <Badge className="bg-[#10B981]/20 text-[#10B981] border-none">
                <Clock className="w-3 h-3 mr-1" />
                {currentTime}
              </Badge>
            </div>

            <div className="space-y-3">
              {schedule[today as keyof typeof schedule].map((period, idx) => {
                const isCurrent = idx === currentPeriod;
                const isPast = idx < currentPeriod;

                return (
                  <div 
                    key={idx}
                    className={`glass-card rounded-xl p-4 ${
                      isCurrent ? 'border-2 border-[#2563EB] bg-[#2563EB]/10' : ''
                    } ${isPast ? 'opacity-50' : ''}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-20 text-center ${isCurrent ? 'text-[#2563EB]' : 'text-white/60'}`}>
                        <Clock className="w-4 h-4 mx-auto mb-1" />
                        <p className="text-xs font-medium">{period.time}</p>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-white font-semibold text-lg">{period.subject}</h3>
                            <div className="flex items-center gap-4 mt-1">
                              <div className="flex items-center gap-1 text-white/60 text-sm">
                                <User className="w-3 h-3" />
                                {period.teacher}
                              </div>
                              <div className="flex items-center gap-1 text-white/60 text-sm">
                                <MapPin className="w-3 h-3" />
                                {period.room}
                              </div>
                            </div>
                          </div>
                          <Badge 
                            className={`${
                              period.type === 'lab' ? 'bg-[#7C3AED]/20 text-[#7C3AED]' :
                              period.type === 'activity' ? 'bg-[#10B981]/20 text-[#10B981]' :
                              'bg-[#2563EB]/20 text-[#2563EB]'
                            } border-none`}
                          >
                            {period.type}
                          </Badge>
                        </div>
                        
                        {isCurrent && (
                          <div className="mt-3 flex items-center gap-2 text-[#2563EB] text-sm">
                            <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse" />
                            Currently in progress
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Weekly View */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">This Week</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-white/60 text-sm font-medium py-3 px-2">Time</th>
                    {Object.keys(schedule).map(day => (
                      <th key={day} className={`text-center text-sm font-medium py-3 px-2 ${day === today ? 'text-[#2563EB]' : 'text-white/60'}`}>
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[0, 1, 2, 3, 4].map(periodIdx => (
                    <tr key={periodIdx} className="border-b border-white/5">
                      <td className="text-white/60 text-xs py-3 px-2 whitespace-nowrap">
                        {schedule.Monday[periodIdx].time}
                      </td>
                      {Object.keys(schedule).map(day => {
                        const period = schedule[day as keyof typeof schedule][periodIdx];
                        return (
                          <td key={day} className="py-2 px-2">
                            <div className={`text-center p-2 rounded-lg ${
                              day === today && periodIdx === currentPeriod 
                                ? 'bg-[#2563EB]/20 border border-[#2563EB]' 
                                : 'bg-white/5'
                            }`}>
                              <p className="text-white text-xs font-medium truncate">{period.subject}</p>
                              <p className="text-white/40 text-[10px] truncate">{period.room}</p>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <div className="glass-card rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Upcoming Events</h2>
            <div className="space-y-3">
              {upcomingEvents.map((event, idx) => (
                <div key={idx} className="glass-card rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${event.color}20` }}
                    >
                      <Calendar className="w-5 h-5" style={{ color: event.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm mb-1">{event.event}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-white/40 text-xs">{event.date}</p>
                        <Badge 
                          className="border-none text-xs"
                          style={{ 
                            backgroundColor: `${event.color}20`,
                            color: event.color
                          }}
                        >
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ARIA Schedule Insights */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">ARIA Insights</h2>
            <div className="space-y-3">
              <div className="bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-xl p-4">
                <div className="flex items-start gap-2 mb-2">
                  <Bell className="w-4 h-4 text-[#2563EB] mt-0.5" />
                  <p className="text-sm text-white/90">
                    Next class: English in B-105 at 10:00 AM
                  </p>
                </div>
              </div>

              <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-xl p-4">
                <p className="text-sm text-white/90">
                  ⚠️ Math Unit Test coming up on Feb 28. Start preparing!
                </p>
              </div>

              <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-xl p-4">
                <p className="text-sm text-white/90">
                  ✅ Your attendance this week: 100%
                </p>
              </div>

              <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-xl p-4">
                <p className="text-sm text-white/90">
                  💡 You have 3 lab sessions this week. Don't forget your lab coat!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
