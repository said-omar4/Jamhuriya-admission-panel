import React from 'react';
import { FileText, Users, CheckCircle, XCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import StatCard from '../components/StatCard';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';

const performanceData = [
  { name: 'said omar', approved: 45, rejected: 12 },
  { name: 'Officer Ali', approved: 30, rejected: 5 },
  { name: 'Admin Fatima', approved: 55, rejected: 18 },
  { name: 'Officer Ahmed', approved: 25, rejected: 8 },
];

const adminReportData = [
  { name: 'said omar ahmed mohamud', email: 'sayad465608@gmail.com', role: 'Admin', total: 57, approved: 45, rejected: 12, avgTime: '4.5 hrs' },
  { name: 'Officer Ali Mohamed', email: 'ali@gmail.com', role: 'Officer', total: 35, approved: 30, rejected: 5, avgTime: '6.2 hrs' },
  { name: 'Admin Fatima Hassan', email: 'fatima@gmail.com', role: 'Admin', total: 73, approved: 55, rejected: 18, avgTime: '3.8 hrs' },
  { name: 'Officer Ahmed Gurey', email: 'ahmed@gmail.com', role: 'Officer', total: 33, approved: 25, rejected: 8, avgTime: '5.1 hrs' },
];

const AdminReport = () => {
  return (
    <PageLayout>
      {/* Header */}
      {/* <div className="flex items-center gap-3 bg-transparent">
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary">
          <FileText size={20} />
        </div>
        <h1 className="text-white text-[22px] font-semibold tracking-tight">Admin Performance Report</h1>
      </div> */}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[15px]">
        <StatCard icon={Users} title="Total Admins/Officers" value="4" color="#894EEF" iconColor="#894EEF" />
        <StatCard icon={CheckCircle} title="Total Approved" value="155" color="#22c55e" iconColor="#22c55e" />
        <StatCard icon={XCircle} title="Total Rejected" value="43" color="#fb923c" iconColor="#fb923c" />
        <StatCard icon={FileText} title="Avg Processing Time" value="4.9 hrs" color="#fb923c" iconColor="#fb923c" />
      </div>

      {/* Performance Graph & Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
        <Card className="p-6 col-span-2 flex flex-col h-[350px]">
          <h3 className="text-white text-[16px] font-semibold mb-1">Decisions by Admin User</h3>
          <p className="text-gray-500 text-[12px] mb-6">Number of approvals vs rejections per admin</p>
          <div className="w-full flex-1 min-h-0">
            <ResponsiveContainer>
              <BarChart data={performanceData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.02)" />
                <XAxis dataKey="name" stroke="#6c6a7e" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#6c6a7e' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#6c6a7e' }} />
                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.02)' }} contentStyle={{ backgroundColor: '#130f1e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} />
                <Bar dataKey="approved" fill="#22c55e" radius={[4, 4, 0, 0]} barSize={20} name="Approved" />
                <Bar dataKey="rejected" fill="#fb923c" radius={[4, 4, 0, 0]} barSize={20} name="Rejected" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 flex flex-col h-[350px]">
          <h3 className="text-white text-[16px] font-semibold mb-1">Administrative Overview</h3>
          <p className="text-gray-500 text-[12px] mb-6">Key efficiency pointers</p>
          <div className="flex flex-col gap-5 flex-1 justify-center">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="text-[#8c8a9e] text-[13px]">Top Performer</span>
              <span className="text-white text-[13px] font-semibold">Fatima Hassan (73)</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="text-[#8c8a9e] text-[13px]">Fastest Decision Rate</span>
              <span className="text-[#22c55e] text-[13px] font-semibold">3.8 hrs/app</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="text-[#8c8a9e] text-[13px]">Approval to Rejection Ratio</span>
              <span className="text-white text-[13px] font-semibold">3.6 : 1</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Admin Performance Table */}
      <Card className="flex flex-col flex-1 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">ADMIN</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">ROLE</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">TOTAL HANDLED</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">APPROVED</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">REJECTED</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">AVG TIME</th>
              </tr>
            </thead>
            <tbody>
              {adminReportData.map((item, index) => (
                <tr key={index} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-full bg-primary shrink-0"></div>
                      <div className="flex flex-col">
                        <p className="text-white text-[14px] font-medium mb-0.5">{item.name}</p>
                        <p className="text-gray-500 text-[11px] tracking-wide">{item.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-4 py-1.5 rounded-full text-[11px] font-semibold border inline-flex items-center justify-center ${item.role === 'Admin' ? 'text-primary bg-primary/10 border-primary/20' : 'text-[#fb923c] bg-[#fb923c]/10 border-[#fb923c]/20'}`}>
                      {item.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[13px] text-gray-300 font-semibold">{item.total}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-400">{item.approved}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-400">{item.rejected}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-400 font-semibold">{item.avgTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </PageLayout>
  );
};

export default AdminReport;
