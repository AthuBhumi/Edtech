import React from 'react';
import { AriaOrb } from './AriaOrb';
import { X, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

export interface AriaAlert {
  id: string;
  type: 'info' | 'warning' | 'success';
  message: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface AriaProactiveCardProps {
  alerts: AriaAlert[];
  onDismiss: (id: string) => void;
}

export const AriaProactiveCard: React.FC<AriaProactiveCardProps> = ({ alerts, onDismiss }) => {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning': return '⚠️';
      case 'success': return '🏆';
      default: return '💡';
    }
  };

  if (alerts.length === 0) return null;

  return (
    <div 
      className="glass-card rounded-3xl p-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, rgba(124, 58, 237, 0.08), rgba(6, 182, 212, 0.05))',
        border: '1px solid rgba(124, 58, 237, 0.15)'
      }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#7C3AED]/20 to-transparent rounded-full blur-3xl -z-10" />
      
      <div className="flex items-start gap-4">
        <div className="relative">
          <AriaOrb size="lg" />
          {/* Waveform animation */}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#06B6D4] rounded-full animate-ping" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-800 mb-1">
            ARIA has {alerts.length} insight{alerts.length > 1 ? 's' : ''} for you today
          </h3>
          <p className="text-sm text-slate-500 mb-4">Based on school-wide data analysis</p>
          
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="glass-card rounded-xl p-4 flex items-start gap-3 hover:bg-slate-100 transition-all"
              >
                <span className="text-2xl">{getAlertIcon(alert.type)}</span>
                <div className="flex-1">
                  <p className="text-sm text-slate-800">{alert.message}</p>
                </div>
                <div className="flex gap-2">
                  {alert.action && (
                    <Button
                      size="sm"
                      onClick={alert.action.onClick}
                      className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white h-8 text-xs"
                    >
                      {alert.action.label}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onDismiss(alert.id)}
                    className="text-slate-500 hover:text-slate-800 hover:bg-slate-100 h-8 w-8 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
