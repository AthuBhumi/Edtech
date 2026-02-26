import React from 'react';
import { BookOpen, Download, FileText, Video, Link as LinkIcon } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';

const resources = [
  { id: 1, title: 'Quadratic Equations - Lecture Notes', type: 'pdf', subject: 'Mathematics', size: '2.4 MB', downloads: 34, date: 'Feb 20, 2026' },
  { id: 2, title: 'Trigonometry Tutorial Video', type: 'video', subject: 'Mathematics', size: '45 MB', downloads: 28, date: 'Feb 18, 2026' },
  { id: 3, title: 'Algebra Practice Worksheet', type: 'pdf', subject: 'Mathematics', size: '1.8 MB', downloads: 42, date: 'Feb 15, 2026' },
  { id: 4, title: 'Geometry Reference Links', type: 'link', subject: 'Mathematics', size: '-', downloads: 18, date: 'Feb 12, 2026' },
  { id: 5, title: 'Math Competition Problems', type: 'pdf', subject: 'Mathematics', size: '3.1 MB', downloads: 15, date: 'Feb 10, 2026' },
];

const categories = [
  { name: 'Lecture Notes', count: 24, icon: FileText, color: '#2563EB' },
  { name: 'Videos', count: 12, icon: Video, color: '#10B981' },
  { name: 'Worksheets', count: 18, icon: BookOpen, color: '#F59E0B' },
  { name: 'Links', count: 8, icon: LinkIcon, color: '#7C3AED' },
];

export const ResourcesView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Teaching Resources 📚
        </h1>
        <p className="text-white/60 text-sm lg:text-base">Manage your teaching materials and resources</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
        {categories.map((category, idx) => (
          <div key={idx} className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <category.icon className="w-6 h-6 lg:w-8 lg:h-8 mb-3" style={{ color: category.color }} />
            <p className="text-xl lg:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>
              {category.count}
            </p>
            <p className="text-xs text-white/60">{category.name}</p>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg lg:text-xl font-semibold text-white">Recent Resources</h2>
          <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm">
            Upload New
          </Button>
        </div>

        <div className="space-y-3">
          {resources.map((resource) => (
            <div key={resource.id} className="glass-card rounded-xl p-3 lg:p-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                <div className="flex items-start gap-3 flex-1">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    resource.type === 'pdf' ? 'bg-[#F43F5E]/20' :
                    resource.type === 'video' ? 'bg-[#10B981]/20' :
                    'bg-[#7C3AED]/20'
                  }`}>
                    {resource.type === 'pdf' && <FileText className="w-5 h-5 text-[#F43F5E]" />}
                    {resource.type === 'video' && <Video className="w-5 h-5 text-[#10B981]" />}
                    {resource.type === 'link' && <LinkIcon className="w-5 h-5 text-[#7C3AED]" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm lg:text-base mb-1 truncate">{resource.title}</h3>
                    <p className="text-xs text-white/60">
                      {resource.subject} • {resource.size} • {resource.downloads} downloads
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge className="bg-[#2563EB]/20 text-[#2563EB] border-none text-xs">
                    {resource.date}
                  </Badge>
                  <Button size="sm" variant="ghost" className="text-[#10B981] hover:bg-[#10B981]/10 h-8 text-xs">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
