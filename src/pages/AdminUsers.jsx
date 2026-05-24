import React from 'react';
import { User, Eye } from 'lucide-react';
import StatCard from '../components/StatCard';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';

const adminUsersData = [
  { name: 'said omar ahmed mohamud', email: 'sayad465608@gmail.com', role: 'Officer', total: 20, approved: 10, rejected: '02', payments: 0, contacts: 0, date: '4/24/2026' },
  { name: 'said omar ahmed mohamud', email: 'sayad465608@gmail.com', role: 'Admin', total: 20, approved: 10, rejected: '02', payments: 0, contacts: 0, date: '4/24/2026' },
  { name: 'said omar ahmed mohamud', email: 'sayad465608@gmail.com', role: 'Officer', total: 20, approved: 10, rejected: '02', payments: 0, contacts: 0, date: '4/24/2026' },
  { name: 'said omar ahmed mohamud', email: 'sayad465608@gmail.com', role: 'Admin', total: 20, approved: 10, rejected: '02', payments: 0, contacts: 0, date: '4/24/2026' },
  { name: 'said omar ahmed mohamud', email: 'sayad465608@gmail.com', role: 'Officer', total: 20, approved: 10, rejected: '02', payments: 0, contacts: 0, date: '4/24/2026' },
  { name: 'said omar ahmed mohamud', email: 'sayad465608@gmail.com', role: 'Admin', total: 20, approved: 10, rejected: '02', payments: 0, contacts: 0, date: '4/24/2026' }
];

const AdminUsers = () => {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
        <StatCard icon={User} title="Total Programs" value="1,284" color="#22c55e" iconColor="#22c55e" />
        <StatCard icon={User} title="Total Faculties" value="1,284" color="#d97706" iconColor="#d97706" />
        <StatCard icon={User} title="Pending Application" value="1,284" color="#d97706" iconColor="#d97706" />
      </div>

      <Card className="flex items-center gap-[15px] p-4 flex-wrap">
        <div className="flex-1 relative min-w-[200px]">
          <input type="text" className="w-full bg-main-bg border border-white/5 text-white rounded-xl px-4 py-3.5 text-[13px] outline-none focus:border-primary transition-colors placeholder-gray-500" placeholder="user@example.com" />
        </div>
        <select className="bg-main-bg border border-white/5 text-white rounded-xl px-4 py-3.5 text-[13px] outline-none min-w-[160px] appearance-none pr-10 cursor-pointer" style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%238c8a9e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}>
          <option>Campus Admin</option>
        </select>
        <select className="bg-main-bg border border-white/5 text-white rounded-xl px-4 py-3.5 text-[13px] outline-none min-w-[160px] appearance-none pr-10 cursor-pointer" style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%238c8a9e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}>
          <option>Main Campus</option>
        </select>
        <button className="bg-primary hover:bg-opacity-90 text-white rounded-xl px-6 py-3.5 text-[13px] font-medium transition-colors ml-auto whitespace-nowrap">Export csv</button>
      </Card>

      <Card className="flex flex-col flex-1 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">ADMIN</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">ROLE</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">TOTAL</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">APPROVED</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">REJECTED</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">PAYMENTS</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">CONTACTS</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">DATE</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {adminUsersData.map((user, index) => (
                <tr key={index} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-full bg-primary shrink-0"></div>
                      <div className="flex flex-col">
                        <p className="text-white text-[14px] font-medium mb-0.5">{user.name}</p>
                        <p className="text-gray-500 text-[11px] tracking-wide">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-4 py-1.5 rounded-full text-[12px] font-medium border inline-flex items-center justify-center ${user.role === 'Admin' ? 'text-primary bg-primary/10 border-primary/20' : 'text-[#d97706] bg-[#d97706]/10 border-[#d97706]/20'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[13px] text-gray-400">{user.total}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-400">{user.approved}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-400">{user.rejected}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-400">{user.payments}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-400">{user.contacts}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-400">{user.date}</td>
                  <td className="px-6 py-4">
                    <button className="text-gray-500 hover:text-white transition-colors p-1">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex items-center justify-between p-6 mt-auto border-t border-white/5">
          <div className="text-[13px] font-medium text-gray-500">Page 1 of 2</div>
          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-full border border-white/10 text-gray-400 text-[13px] font-medium hover:text-white hover:border-white/20 transition-all bg-transparent cursor-pointer">Previous</button>
            <button className="px-5 py-2 rounded-full border border-primary bg-primary text-white text-[13px] font-medium cursor-pointer">Next</button>
          </div>
        </div>
      </Card>
    </PageLayout>
  );
};

export default AdminUsers;
