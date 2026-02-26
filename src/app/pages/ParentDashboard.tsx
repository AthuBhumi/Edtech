import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { ParentOverview } from './parent/ParentOverview';
import { ChildrenView } from './parent/ChildrenView';
import { ProgressView } from './parent/ProgressView';
import { AttendanceView } from './parent/AttendanceView';
import { FeesView } from './parent/FeesView';
import { TransportView } from './parent/TransportView';
import { ReportsView } from './parent/ReportsView';
import { TeachersView } from './parent/TeachersView';
import { AIInsightsView } from './parent/AIInsightsView';

export const ParentDashboard: React.FC = () => {
  return (
    <DashboardLayout
      role="parent"
      greeting="Good Evening"
      name="Mr. Sharma"
      roleLabel="Parent"
      quickReplies={[
        'Show Arjun\'s progress',
        'Fee payment status',
        'Upcoming parent-teacher meeting',
        'Children\'s attendance'
      ]}
    >
      <Routes>
        <Route index element={<ParentOverview />} />
        <Route path="children" element={<ChildrenView />} />
        <Route path="progress" element={<ProgressView />} />
        <Route path="attendance" element={<AttendanceView />} />
        <Route path="fees" element={<FeesView />} />
        <Route path="transport" element={<TransportView />} />
        <Route path="reports" element={<ReportsView />} />
        <Route path="teachers" element={<TeachersView />} />
        <Route path="insights" element={<AIInsightsView />} />
        <Route path="*" element={<Navigate to="/parent" replace />} />
      </Routes>
    </DashboardLayout>
  );
};