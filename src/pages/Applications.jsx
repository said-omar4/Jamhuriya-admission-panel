import React from 'react';
import { User, Search, Eye } from 'lucide-react';
import StatCard from '../components/StatCard';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';

const applicationsData = Array(7).fill({
  name: 'said omar ahmed mohamud',
  id: '#JUM0D0LR63ZF0Z',
  faculty: 'CS',
  program: 'Information Technology',
  campus: 'Campus 3',
  status: 'Pending',
  date: '4/24/2026',
  avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
});

const Applications = () => {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px]">
        <StatCard icon={User} title="Total Applications" value="1,284" color="#22c55e" iconColor="#22c55e" />
        <StatCard icon={User} title="Approved Applications" value="1,284" color="#d97706" iconColor="#d97706" />
        <StatCard icon={User} title="Pending Application" value="1,284" color="#d97706" iconColor="#d97706" />
        <StatCard icon={User} title="Rejected Applications" value="1,284" color="#894EEF" iconColor="#894EEF" />
      </div>

      <Card className="flex items-center gap-[15px] p-4 flex-wrap">
        <div className="flex-1 relative min-w-[200px]">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input type="text" className="w-full bg-main-bg border border-white/5 text-white rounded-xl py-3.5 pl-[44px] pr-4 text-[13px] outline-none focus:border-primary transition-colors placeholder-gray-500" placeholder="Search Name, email ..." />
        </div>
        <select className="bg-main-bg border border-white/5 text-white rounded-xl px-4 py-3.5 text-[13px] outline-none min-w-[160px] appearance-none pr-10 cursor-pointer" style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%238c8a9e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}>
          <option>All Status</option>
        </select>
        <select className="bg-main-bg border border-white/5 text-white rounded-xl px-4 py-3.5 text-[13px] outline-none min-w-[160px] appearance-none pr-10 cursor-pointer" style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%238c8a9e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}>
          <option>All Faculties</option>
        </select>
        <select className="bg-main-bg border border-white/5 text-white rounded-xl px-4 py-3.5 text-[13px] outline-none min-w-[160px] appearance-none pr-10 cursor-pointer" style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%238c8a9e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}>
          <option>All Compuses</option>
        </select>
      </Card>

      <Card className="flex flex-col flex-1 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-6 py-5 w-[60px]"><div className="w-4 h-4 rounded-full border-[1.5px] border-primary opacity-70"></div></th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">APPLICANT</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">FACULTY</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">PROGRAM</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">CAMPUS</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">STATUS</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">DATE</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {applicationsData.map((app, index) => (
                <tr key={index} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
                  <td className="px-6 py-4"><div className="w-4 h-4 rounded-full border-[1.5px] border-primary opacity-70"></div></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img src={app.avatar} alt={app.name} className="w-9 h-9 rounded-full object-cover grayscale" />
                      <div className="flex flex-col">
                        <p className="text-white text-[14px] font-medium mb-0.5">{app.name}</p>
                        <p className="text-gray-500 text-[11px] tracking-wide">{app.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[13px] text-gray-400">{app.faculty}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-400">{app.program}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-400">{app.campus}</td>
                  <td className="px-6 py-4">
                    <span className="px-4 py-1.5 rounded-full text-[12px] font-medium border inline-flex items-center justify-center text-[#d97706] bg-[#d97706]/10 border-[#d97706]/20">
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[13px] text-gray-400">{app.date}</td>
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

export default Applications;
