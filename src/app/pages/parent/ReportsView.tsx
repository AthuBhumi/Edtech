import React from 'react';
import { FileText, Download, Award } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';

const reports = [
  { child: 'Arjun', type: 'Mid-Term Report', date: 'Feb 15, 2026', score: 87.5, grade: 'A', term: 'Term 2' },
  { child: 'Priya', type: 'Mid-Term Report', date: 'Feb 15, 2026', score: 91.0, grade: 'A+', term: 'Term 2' },
  { child: 'Arjun', type: 'Term 1 Report', date: 'Dec 20, 2025', score: 85.0, grade: 'A', term: 'Term 1' },
  { child: 'Priya', type: 'Term 1 Report', date: 'Dec 20, 2025', score: 89.5, grade: 'A', term: 'Term 1' },
];

export const ReportsView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Report Cards 📄
        </h1>
        <p className="text-white/60 text-sm lg:text-base">Access academic reports and certificates</p>
      </div>

      <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Available Reports</h2>
        <div className="space-y-3">
          {reports.map((report, idx) => (
            <div key={idx} className="glass-card rounded-xl p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-sm lg:text-base">{report.child} - {report.type}</h3>
                    <p className="text-xs text-white/60">{report.term} • {report.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right hidden lg:block">
                    <p className="text-sm font-semibold text-white">{report.score}%</p>
                    <Badge className={`${
                      report.grade === 'A+' ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#2563EB]/20 text-[#2563EB]'
                    } border-none text-xs`}>
                      Grade {report.grade}
                    </Badge>
                  </div>
                  <Button size="sm" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
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
