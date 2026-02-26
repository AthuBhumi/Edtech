import React from 'react';
import { Search, Bell, Calendar, LogOut } from 'lucide-react';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useNavigate } from 'react-router';

interface TopBarProps {
  greeting: string;
  name: string;
  role: string;
  avatarUrl?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ greeting, name, role, avatarUrl }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="h-16 border-b border-white/10 px-6 flex items-center justify-between"
      style={{
        background: 'rgba(10, 15, 30, 0.8)',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Greeting */}
      <div>
        <h2 className="text-lg font-semibold text-white">
          {greeting}, {name} 👋
        </h2>
        <p className="text-xs text-white/60">{role}</p>
      </div>

      {/* Search & Actions */}
      <div className="flex items-center gap-4">
        {/* Global Search */}
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <Input
            placeholder="Ask ARIA anything..."
            className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40"
          />
        </div>

        {/* Calendar */}
        <button className="w-10 h-10 rounded-xl flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all">
          <Calendar className="w-5 h-5" />
        </button>

        {/* Notifications */}
        <button className="w-10 h-10 rounded-xl flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all relative">
          <Bell className="w-5 h-5" />
          <Badge 
            className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-[#F43F5E] text-white text-xs"
          >
            3
          </Badge>
        </button>

        {/* User Avatar */}
        <div className="flex items-center gap-3 pl-3 border-l border-white/10">
          <Avatar>
            <AvatarImage src={avatarUrl} />
            <AvatarFallback className="bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Logout */}
        <button 
          onClick={() => navigate('/')}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white/60 hover:text-[#F43F5E] hover:bg-[#F43F5E]/10 transition-all group relative"
          title="Logout"
        >
          <LogOut className="w-5 h-5" />
          <div className="absolute top-full mt-2 px-3 py-2 bg-[#111827] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
            Logout
          </div>
        </button>
      </div>
    </div>
  );
};