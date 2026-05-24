import React from 'react';
import { User, Search, Eye } from 'lucide-react';
import StatCard from '../components/StatCard';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';

const contactMessagesData = Array(7).fill({
  name: 'said omar ahmed mohamud',
  email: 'sayad465608@gmail.com',
  phone: '614465608',
  type: 'Admission',
  message: 'fadlan iga caawiya iima shaqeynayo\nin aan isdiiwaan geliyo oo aan...',
  status: 'Resolved'
});

const ContactMessages = () => {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
        <StatCard icon={User} title="Replied contact" value="1,284" color="#22c55e" iconColor="#22c55e" />
        <StatCard icon={User} title="Pending contact" value="1,284" color="#d97706" iconColor="#d97706" />
        <StatCard icon={User} title="Cancelled contacts" value="1,284" color="#d97706" iconColor="#d97706" />
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
          <option>Type of contact</option>
        </select>
      </Card>

      <Card className="flex flex-col flex-1 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-6 py-5 w-[60px]"><div className="w-4 h-4 rounded-full border-[1.5px] border-primary opacity-70"></div></th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">FROM</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">PHINE NUMBER</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">TYPE OF CONTACT</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">TYPE OF CONTACT</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">STATUS</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {contactMessagesData.map((contact, index) => (
                <tr key={index} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
                  <td className="px-6 py-4"><div className="w-4 h-4 rounded-full border-[1.5px] border-primary opacity-70"></div></td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <p className="text-white text-[14px] font-medium mb-0.5">{contact.name}</p>
                      <p className="text-gray-500 text-[11px] tracking-wide">{contact.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[13px] text-gray-400">{contact.phone}</td>
                  <td className="px-6 py-4">
                    <span className="px-4 py-1.5 rounded-full text-[12px] font-medium border inline-flex items-center justify-center text-[#a855f7] bg-[#a855f7]/10 border-[#a855f7]/20">
                      {contact.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[13px] text-gray-400 max-w-[300px] truncate">{contact.message}</td>
                  <td className="px-6 py-4">
                    <span className="px-4 py-1.5 rounded-full text-[12px] font-medium border inline-flex items-center justify-center text-[#22c55e] bg-[#22c55e]/10 border-[#22c55e]/20">
                      {contact.status}
                    </span>
                  </td>
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

export default ContactMessages;
