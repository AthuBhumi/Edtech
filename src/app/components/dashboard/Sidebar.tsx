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
    <div className="w-56 h-screen bg-[#1E3A5F] border-r border-white/10 flex flex-col py-5 px-3">
      {/* Logo */}
      <div className="mb-6 flex items-center gap-3 px-2">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shrink-0"
          onClick={() => navigate(basePath)}
        >
          <span className="text-white font-bold text-sm">ES</span>
        </div>
        <span className="text-white font-semibold text-base tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>EduSphere</span>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 w-full flex flex-col gap-1 overflow-y-auto">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`w-full h-10 rounded-xl flex items-center gap-3 px-3 transition-all relative ${active
                  ? 'bg-white/20 text-white font-medium'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
            >
              {active && (
                <div className="absolute left-0 w-1 h-6 bg-white rounded-r-full" />
              )}
              <item.icon className="w-[18px] h-[18px] shrink-0" />
              <span className="text-sm truncate">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* ARIA Button */}
      <div className="mb-3">
        <button
          onClick={onAriaClick}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 transition-all"
        >
          <AriaOrb size="sm" />
          <span className="text-white/80 text-sm font-medium">Chat with ARIA</span>
        </button>
      </div>

      {/* Settings */}
      <button className="w-full h-10 rounded-xl flex items-center gap-3 px-3 text-white/60 hover:text-white hover:bg-white/10 transition-all mb-1">
        <Settings className="w-[18px] h-[18px] shrink-0" />
        <span className="text-sm">Settings</span>
      </button>

      {/* Logout */}
      <button
        onClick={() => navigate('/')}
        className="w-full h-10 rounded-xl flex items-center gap-3 px-3 text-white/60 hover:text-[#F43F5E] hover:bg-[#F43F5E]/10 transition-all"
      >
        <LogOut className="w-[18px] h-[18px] shrink-0" />
        <span className="text-sm">Logout</span>
      </button>
    </div>
  );
};