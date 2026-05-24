import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, UserPlus, Users, Briefcase, TrendingUp, BookOpen, MessageCircle, History, Users2, FileText, Settings, LogOut, Shield
} from 'lucide-react';
import Card from './Card';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Card className="w-[220px] h-full flex flex-col overflow-hidden shrink-0">
      <div className="flex items-center gap-3 p-6 border-b border-border-color">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-700 bg-[#1A1D2D]">
          <Shield size={16} fill="#22c55e" stroke="transparent" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-white text-[15px] font-semibold leading-tight">Jamhuriya</h2>
          <p className="text-gray-400 text-[10px] font-semibold tracking-wider">ADMIN PORTAL</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-gray-500 text-[10px] font-semibold tracking-wider mb-2 px-2">OVERVIEW</p>
          <NavItem to="/dashboard" icon={LayoutDashboard}>Dashboard</NavItem>
          <NavItem to="/applications" icon={UserPlus}>Applications</NavItem>
          <NavItem to="/students" icon={Users}>Students</NavItem>
          <NavItem to="/payments" icon={Briefcase}>Payments</NavItem>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-gray-500 text-[10px] font-semibold tracking-wider mb-2 px-2">ANALYTICS</p>
          <NavItem to="/reports" icon={TrendingUp}>Reports</NavItem>
          <NavItem to="/programs" icon={BookOpen}>Programs</NavItem>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-gray-500 text-[10px] font-semibold tracking-wider mb-2 px-2">OPERATIONS</p>
          <NavItem to="/contact-messages" icon={MessageCircle}>Contact Messages</NavItem>
          <NavItem to="/activity-log" icon={History}>Activity Log</NavItem>
          <NavItem to="/admin-users" icon={Users2}>Admin Users</NavItem>
          <NavItem to="/admin-report" icon={FileText}>Admin Report</NavItem>
          <NavItem to="/settings" icon={Settings}>Settings</NavItem>
        </div>
      </div>

      <div className="p-4 border-t border-border-color mt-auto">
        <div className="flex items-center gap-3 p-2">
          <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <p className="text-white text-[13px] font-medium truncate">saidomar@gmail.com</p>
            <p className="text-gray-500 text-[11px] truncate">Administrator</p>
          </div>
          <button onClick={() => navigate('/login')} className="text-gray-500 hover:text-white transition-colors cursor-pointer">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </Card>
  );
};

const NavItem = ({ to, icon: Icon, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-colors duration-200 ${isActive
        ? 'bg-primary text-white'
        : 'text-gray-400 hover:text-white hover:bg-white/5'
      }`
    }
  >
    <Icon size={18} />
    <span>{children}</span>
  </NavLink>
);

export default Sidebar;
