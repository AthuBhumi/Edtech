import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { TeacherOverview } from './teacher/TeacherOverview';
import { ScheduleView } from './teacher/ScheduleView';
import { ClassesView } from './teacher/ClassesView';
import { AssignmentsView } from './teacher/AssignmentsView';
import { GradesView } from './teacher/GradesView';
import { AnalyticsView } from './teacher/AnalyticsView';
import { ResourcesView } from './teacher/ResourcesView';
import { AIInsightsView } from './teacher/AIInsightsView';

export const TeacherDashboard: React.FC = () => {
  return (
    <DashboardLayout
      role="teacher"
      greeting="Good Morning"
      name="Ms. Priya"
      roleLabel="Mathematics & Science Teacher"
      quickReplies={[
        'Show struggling students',
        'Class performance',
        'Grade assignments',
        'Today\'s schedule'
      ]}
    >
      <Routes>
        <Route index element={<TeacherOverview />} />
        <Route path="schedule" element={<ScheduleView />} />
        <Route path="classes" element={<ClassesView />} />
        <Route path="assignments" element={<AssignmentsView />} />
        <Route path="grades" element={<GradesView />} />
        <Route path="analytics" element={<AnalyticsView />} />
        <Route path="resources" element={<ResourcesView />} />
        <Route path="insights" element={<AIInsightsView />} />
        <Route path="*" element={<Navigate to="/teacher" replace />} />
      </Routes>
    </DashboardLayout>
  );
};