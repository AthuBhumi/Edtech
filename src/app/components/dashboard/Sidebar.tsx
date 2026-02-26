import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import { LucideIcon, LogOut } from 'lucide-react';
import { AriaOrb } from '../aria/AriaOrb';

// Principal Navigation
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  BookOpen,
  DollarSign,
  Bus,
  Library,
  Utensils,
  UsersRound,
  Sparkles,
  Settings,
  BarChart3,
  Calendar,
  FileText,
  Award
} from 'lucide-react';

interface NavItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

const principalNavItems: NavItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '' },
  { icon: BarChart3, label: 'Analytics', path: 'analytics' },
  { icon: GraduationCap, label: 'Academic', path: 'academic' },
  { icon: Users, label: 'Students', path: 'students' },
  { icon: BookOpen, label: 'Teachers', path: 'teachers' },
  { icon: DollarSign, label: 'Finances', path: 'finances' },
  { icon: Bus, label: 'Transport', path: 'transport' },
  { icon: Library, label: 'Library', path: 'library' },
  { icon: Sparkles, label: 'AI Insights', path: 'insights' },
];

const teacherNavItems: NavItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '' },
  { icon: Calendar, label: 'Schedule', path: 'schedule' },
  { icon: Users, label: 'My Classes', path: 'classes' },
  { icon: FileText, label: 'Assignments', path: 'assignments' },
  { icon: Award, label: 'Grades', path: 'grades' },
  { icon: BarChart3, label: 'Analytics', path: 'analytics' },
  { icon: Library, label: 'Resources', path: 'resources' },
  { icon: Sparkles, label: 'AI Insights', path: 'insights' },
];

const studentNavItems: NavItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '' },
  { icon: Calendar, label: 'Schedule', path: 'schedule' },
  { icon: FileText, label: 'Homework', path: 'homework' },
  { icon: Award, label: 'My Grades', path: 'grades' },
  { icon: BarChart3, label: 'Performance', path: 'performance' },
  { icon: Library, label: 'Library', path: 'library' },
  { icon: Utensils, label: 'Canteen', path: 'canteen' },
  { icon: Bus, label: 'Bus Tracker', path: 'bus' },
  { icon: Sparkles, label: 'Study with ARIA', path: 'aria' },
];

const parentNavItems: NavItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '' },
  { icon: Users, label: 'My Children', path: 'children' },
  { icon: Award, label: 'Academic Progress', path: 'progress' },
  { icon: Calendar, label: 'Attendance', path: 'attendance' },
  { icon: DollarSign, label: 'Fee Payment', path: 'fees' },
  { icon: Bus, label: 'Transport', path: 'transport' },
  { icon: FileText, label: 'Reports', path: 'reports' },
  { icon: BookOpen, label: 'Teachers', path: 'teachers' },
  { icon: Sparkles, label: 'ARIA Insights', path: 'insights' },
];

interface SidebarProps {
  role: 'principal' | 'teacher' | 'student' | 'parent';
  onAriaClick: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ role, onAriaClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getNavItems = () => {
    switch (role) {
      case 'principal': return principalNavItems;
      case 'teacher': return teacherNavItems;
      case 'student': return studentNavItems;
      case 'parent': return parentNavItems;
      default: return principalNavItems;
    }
  };

  const navItems = getNavItems();
  const basePath = `/${role}`;

  const handleNavClick = (path: string) => {
    if (path === '') {
      navigate(basePath);
    } else {
      navigate(`${basePath}/${path}`);
    }
  };

  const isActive = (path: string) => {
    if (path === '') {
      return location.pathname === basePath || location.pathname === `${basePath}/`;
    }
    return location.pathname === `${basePath}/${path}`;
  };

  return (
    <div className="w-16 lg:w-20 h-screen bg-[#0A0F1E] border-r border-white/10 flex flex-col items-center py-4 lg:py-6">
      {/* Logo */}
      <div className="mb-6 lg:mb-8">
        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
          onClick={() => navigate(basePath)}
        >
          <span className="text-white font-bold text-xs lg:text-sm">ES</span>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 w-full flex flex-col items-center gap-1 lg:gap-2">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center transition-all relative group ${active
                  ? 'bg-[#2563EB]/20 text-[#2563EB]'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
            >
              {active && (
                <div className="absolute left-0 w-1 h-6 lg:h-8 bg-[#2563EB] rounded-r-full" />
              )}
              <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />

              {/* Tooltip */}
              <div className="absolute left-full ml-2 px-3 py-2 bg-[#111827] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 hidden lg:block">
                {item.label}
              </div>
            </button>
          );
        })}
      </nav>

      {/* ARIA Button */}
      <div className="mb-3 lg:mb-4">
        <button
          onClick={onAriaClick}
          className="relative group"
        >
          <AriaOrb size="sm" />
          <div className="absolute left-full ml-2 px-3 py-2 bg-[#111827] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 hidden lg:block">
            Chat with ARIA
          </div>
        </button>
      </div>

      {/* Settings */}
      <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all relative group mb-2">
        <Settings className="w-4 h-4 lg:w-5 lg:h-5" />
        <div className="absolute left-full ml-2 px-3 py-2 bg-[#111827] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 hidden lg:block">
          Settings
        </div>
      </button>

      {/* Logout */}
      <button
        onClick={() => navigate('/')}
        className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center text-white/60 hover:text-[#F43F5E] hover:bg-[#F43F5E]/10 transition-all relative group"
      >
        <LogOut className="w-4 h-4 lg:w-5 lg:h-5" />
        <div className="absolute left-full ml-2 px-3 py-2 bg-[#111827] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 hidden lg:block">
          Logout
        </div>
      </button>
    </div>
  );
};