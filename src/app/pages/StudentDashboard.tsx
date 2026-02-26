import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';

// Import all student views
import { StudentOverview } from './student/StudentOverview';
import { ScheduleView } from './student/ScheduleView';
import { HomeworkView } from './student/HomeworkView';
import { GradesView } from './student/GradesView';
import { PerformanceView } from './student/PerformanceView';
import { LibraryView } from './student/LibraryView';
import { CanteenView } from './student/CanteenView';
import { BusTrackerView } from './student/BusTrackerView';
import { StudyWithAriaView } from './student/StudyWithAriaView';

export const StudentDashboard: React.FC = () => {
  return (
    <DashboardLayout
      role="student"
      greeting="Hey"
      name="Arjun"
      roleLabel="Class 8B"
      quickReplies={[
        'What\'s my homework?',
        'Show my grades',
        'Where\'s my bus?',
        'Today\'s schedule'
      ]}
    >
      <Routes>
        <Route index element={<StudentOverview />} />
        <Route path="schedule" element={<ScheduleView />} />
        <Route path="homework" element={<HomeworkView />} />
        <Route path="grades" element={<GradesView />} />
        <Route path="performance" element={<PerformanceView />} />
        <Route path="library" element={<LibraryView />} />
        <Route path="canteen" element={<CanteenView />} />
        <Route path="bus" element={<BusTrackerView />} />
        <Route path="aria" element={<StudyWithAriaView />} />
        <Route path="*" element={<Navigate to="/student" replace />} />
      </Routes>
    </DashboardLayout>
  );
};