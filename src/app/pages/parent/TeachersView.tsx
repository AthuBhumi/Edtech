import React from 'react';
import { Users, Award, BookOpen, Star, Mail } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';

const teachers = [
  { name: 'Ms. Priya Kumar', subject: 'Mathematics', class: '8B', rating: 4.8, email: 'priya.kumar@edusphere.com', students: 68 },
  { name: 'Mr. Rahul Singh', subject: 'Science', class: '8B', rating: 4.9, email: 'rahul.singh@edusphere.com', students: 70 },
  { name: 'Mrs. Sunita Desai', subject: 'English', class: '8B', rating: 4.7, email: 'sunita.desai@edusphere.com', students: 58 },
  { name: 'Ms. Kavita Reddy', subject: 'Chemistry', class: '6A', rating: 4.8, email: 'kavita.reddy@edusphere.com', students: 60 },
  { name: 'Mr. Arjun Patel', subject: 'Hindi', class: '6A', rating: 4.6, email: 'arjun.patel@edusphere.com', students: 95 },
];

export const TeachersView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Teachers 👨‍🏫
        </h1>
        <p className="text-white/60 text-sm lg:text-base">Connect with your children's teachers</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {teachers.map((teacher, idx) => (
          <div key={idx} className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#F59E0B] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {teacher.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-base lg:text-lg">{teacher.name}</h3>
                <p className="text-sm text-white/60">{teacher.subject} Teacher</p>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <Badge className="bg-[#2563EB]/20 text-[#2563EB] border-none text-xs">
                    Class {teacher.class}
                  </Badge>
                  <Badge className="bg-[#F59E0B]/20 text-[#F59E0B] border-none text-xs flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    {teacher.rating}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-lg p-3 mb-3">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Mail className="w-4 h-4 text-[#2563EB]" />
                <span className="truncate">{teacher.email}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
              <Button variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/5 text-sm">
                Schedule Meet
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
