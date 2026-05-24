import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import ContactMessages from './pages/ContactMessages';
import Applications from './pages/Applications';
import Reports from './pages/Reports';
import AdminUsers from './pages/AdminUsers';
import Programs from './pages/Programs';
import Login from './pages/Login';
import Payments from './pages/Payments';
import ActivityLog from './pages/ActivityLog';
import AdminReport from './pages/AdminReport';
import Settings from './pages/Settings';

const AdminLayout = () => {
  return (
    <div className="flex h-screen w-full p-[15px] gap-[15px] bg-main-bg text-white overflow-hidden box-border font-sans">
      <Sidebar />
      <main className="flex-1 overflow-y-auto h-full pr-1 custom-scrollbar">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/students" element={<Students />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact-messages" element={<ContactMessages />} />
          <Route path="/activity-log" element={<ActivityLog />} />
          <Route path="/admin-users" element={<AdminUsers />} />
          <Route path="/admin-report" element={<AdminReport />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<AdminLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
