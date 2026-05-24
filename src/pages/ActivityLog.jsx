import React from 'react';
import { History, Search } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';

const activityData = [
  { action: 'Approved Application', admin: 'Said Omar Ahmed', email: 'sayad465608@gmail.com', module: 'Applications', time: '10 mins ago', ip: '197.124.22.8' },
  { action: 'Rejected Application', admin: 'Said Omar Ahmed', email: 'sayad465608@gmail.com', module: 'Applications', time: '1 hour ago', ip: '197.124.22.8' },
  { action: 'Updated Program Fee', admin: 'saidomar@gmail.com', email: 'saidomar@gmail.com', module: 'Programs', time: '3 hours ago', ip: '197.124.23.41' },
  { action: 'Added Admin User', admin: 'saidomar@gmail.com', email: 'saidomar@gmail.com', module: 'Admin Users', time: '1 day ago', ip: '197.124.23.41' },
  { action: 'Resolved Contact Message', admin: 'Officer Ali', email: 'ali@gmail.com', module: 'Contacts', time: '2 days ago', ip: '197.124.25.12' },
  { action: 'Updated Settings', admin: 'saidomar@gmail.com', email: 'saidomar@gmail.com', module: 'Settings', time: '3 days ago', ip: '197.124.23.41' },
];

const ActivityLog = () => {
  const getActionBadge = (action) => {
    if (action.includes('Approved') || action.includes('Added') || action.includes('Resolved')) {
      return (
        <span className="px-4 py-1.5 rounded-full text-[11px] font-semibold border text-[#22c55e] bg-[#22c55e]/10 border-[#22c55e]/20 inline-flex items-center justify-center">
          {action}
        </span>
      );
    } else if (action.includes('Rejected')) {
      return (
        <span className="px-4 py-1.5 rounded-full text-[11px] font-semibold border text-red-500 bg-red-500/10 border-red-500/20 inline-flex items-center justify-center">
          {action}
        </span>
      );
    } else {
      return (
        <span className="px-4 py-1.5 rounded-full text-[11px] font-semibold border text-[#fb923c] bg-[#fb923c]/10 border-[#fb923c]/20 inline-flex items-center justify-center">
          {action}
        </span>
      );
    }
  };

  return (
    <PageLayout>
      {/* Header */}
      <div className="flex items-center gap-3 bg-transparent">
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary">
          <History size={20} />
        </div>
        <h1 className="text-white text-[22px] font-semibold tracking-tight">System Activity Log</h1>
      </div>

      {/* Filters */}
      <Card className="flex items-center gap-[15px] p-4 flex-wrap">
        <div className="flex-1 relative min-w-[200px]">
          <input
            type="text"
            placeholder="Search by admin or action"
            className="w-full bg-[#070211] border border-white/5 text-white rounded-xl px-4 py-3.5 text-[13px] outline-none focus:border-primary transition-colors placeholder-gray-600"
          />
        </div>
        <div className="relative min-w-[160px]">
          <select
            className="w-full bg-[#070211] border border-white/5 text-white rounded-xl px-4 py-3.5 text-[13px] outline-none appearance-none pr-10 cursor-pointer"
            style={{
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%238c8a9e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 16px center'
            }}
          >
            <option>All Modules</option>
            <option>Applications</option>
            <option>Programs</option>
            <option>Admin Users</option>
            <option>Settings</option>
          </select>
        </div>
        <button className="bg-primary hover:bg-opacity-90 text-white rounded-xl px-6 py-3.5 text-[13px] font-medium transition-colors ml-auto whitespace-nowrap cursor-pointer">
          Export Log
        </button>
      </Card>

      {/* Table */}
      <Card className="flex flex-col flex-1 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">ACTION</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">ADMIN</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">MODULE</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">TIME</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">IP ADDRESS</th>
              </tr>
            </thead>
            <tbody>
              {activityData.map((item, index) => (
                <tr key={index} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
                  <td className="px-6 py-4">
                    {getActionBadge(item.action)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <p className="text-white text-[14px] font-medium mb-0.5">{item.admin}</p>
                      <p className="text-gray-500 text-[11px] tracking-wide">{item.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[13px] text-gray-400">
                    {item.module}
                  </td>
                  <td className="px-6 py-4 text-[13px] text-gray-500 font-medium">
                    {item.time}
                  </td>
                  <td className="px-6 py-4 text-[13px] text-gray-500 font-medium">
                    {item.ip}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-6 mt-auto border-t border-white/5">
          <div className="text-[13px] font-medium text-gray-500">Page 1 of 4</div>
          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-full border border-white/10 text-gray-500 text-[13px] font-medium hover:text-white hover:border-white/20 transition-all bg-transparent cursor-pointer">
              Previous
            </button>
            <button className="px-5 py-2 rounded-full border border-primary bg-primary text-white text-[13px] font-semibold cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </Card>
    </PageLayout>
  );
};

export default ActivityLog;
