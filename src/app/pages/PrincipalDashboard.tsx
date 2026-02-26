import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { PrincipalOverview } from './principal/PrincipalOverview';
import { AnalyticsView } from './principal/AnalyticsView';
import { AcademicView } from './principal/AcademicView';
import { StudentsView } from './principal/StudentsView';
import { TeachersView } from './principal/TeachersView';
import { FinancesView } from './principal/FinancesView';
import { TransportView } from './principal/TransportView';
import { LibraryView } from './principal/LibraryView';
import { AIInsightsView } from './principal/AIInsightsView';

export const PrincipalDashboard: React.FC = () => {
  return (
    <DashboardLayout
      role="principal"
      greeting="Good Morning"
      name="Dr. Sharma"
      roleLabel="Principal"
      quickReplies={[
        'Show school overview',
        'Fee collection status',
        'Teacher performance',
        'Student analytics'
      ]}
    >
      <Routes>
        <Route index element={<PrincipalOverview />} />
        <Route path="analytics" element={<AnalyticsView />} />
        <Route path="academic" element={<AcademicView />} />
        <Route path="students" element={<StudentsView />} />
        <Route path="teachers" element={<TeachersView />} />
        <Route path="finances" element={<FinancesView />} />
        <Route path="transport" element={<TransportView />} />
        <Route path="library" element={<LibraryView />} />
        <Route path="insights" element={<AIInsightsView />} />
        <Route path="*" element={<Navigate to="/principal" replace />} />
      </Routes>
    </DashboardLayout>
  );
};