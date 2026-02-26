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
      className="h-16 border-b border-slate-200 px-6 flex items-center justify-between bg-white"
    >
      {/* Greeting */}
      <div>
        <h2 className="text-lg font-semibold text-slate-800">
          {greeting}, {name} 👋
        </h2>
        <p className="text-xs text-slate-500">{role}</p>
      </div>

      {/* Search & Actions */}
      <div className="flex items-center gap-4">
        {/* Global Search */}
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            placeholder="Ask ARIA anything..."
            className="pl-10 bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400"
          />
        </div>

        {/* Calendar */}
        <button className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all">
          <Calendar className="w-5 h-5" />
        </button>

        {/* Notifications */}
        <button className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all relative">
          <Bell className="w-5 h-5" />
          <Badge 
            className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-[#F43F5E] text-white text-xs"
          >
            3
          </Badge>
        </button>

        {/* User Avatar */}
        <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
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
          className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-[#F43F5E] hover:bg-[#F43F5E]/10 transition-all group relative"
          title="Logout"
        >
          <LogOut className="w-5 h-5" />
          <div className="absolute top-full mt-2 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-lg">
            Logout
          </div>
        </button>
      </div>
    </div>
  );
};