import React from 'react';
import { DollarSign, Search } from 'lucide-react';
import StatCard from '../components/StatCard';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';

const paymentsData = [
  { reference: '#JUMODOLR63ZFOZ', amount: '$100', method: 'EVC PLUS', transaction: '02', date: '4/24/2026' },
  { reference: '#JUMODOLR63ZFOZ', amount: '$10', method: 'Zaad', transaction: '02', date: '4/24/2026' },
  { reference: '#JUMODOLR63ZFOZ', amount: '$50', method: 'eDahab', transaction: '02', date: '4/24/2026' },
  { reference: '#JUMODOLR63ZFOZ', amount: '$40', method: 'EVC PLUS', transaction: '02', date: '4/24/2026' },
  { reference: '#JUMODOLR63ZFOZ', amount: '$67', method: 'Zaad', transaction: '02', date: '4/24/2026' },
  { reference: '#JUMODOLR63ZFOZ', amount: '$10', method: 'EVC PLUS', transaction: '02', date: '4/24/2026' }
];

const Payments = () => {
  const getMethodBadge = (method) => {
    switch (method) {
      case 'EVC PLUS':
        return (
          <span className="px-4 py-1.5 rounded-full text-[11px] font-semibold border text-[#a855f7] bg-[#a855f7]/10 border-[#a855f7]/20 inline-flex items-center justify-center">
            EVC PLUS
          </span>
        );
      case 'Zaad':
        return (
          <span className="px-4 py-1.5 rounded-full text-[11px] font-semibold border text-[#22c55e] bg-[#22c55e]/10 border-[#22c55e]/20 inline-flex items-center justify-center">
            Zaad
          </span>
        );
      case 'eDahab':
        return (
          <span className="px-4 py-1.5 rounded-full text-[11px] font-semibold border text-[#fb923c] bg-[#fb923c]/10 border-[#fb923c]/20 inline-flex items-center justify-center">
            eDahab
          </span>
        );
      default:
        return (
          <span className="px-4 py-1.5 rounded-full text-[11px] font-semibold border text-gray-400 bg-gray-400/10 border-gray-400/20 inline-flex items-center justify-center">
            {method}
          </span>
        );
    }
  };

  return (
    <PageLayout>
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
        <StatCard icon={DollarSign} title="Total Collected" value="$6,284" color="#22c55e" iconColor="#22c55e" />
        <StatCard icon={DollarSign} title="Today" value="$1,284" color="#fb923c" iconColor="#fb923c" />
        <StatCard icon={DollarSign} title="Transactions" value="284" color="#fb923c" iconColor="#fb923c" />
      </div>

      {/* Filters */}
      <Card className="flex items-center gap-[15px] p-4 flex-wrap">
        <div className="flex-1 relative min-w-[200px]">
          <input
            type="text"
            placeholder="Search for transaction"
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
            <option>Method</option>
          </select>
        </div>
        <button className="bg-primary hover:bg-opacity-90 text-white rounded-xl px-6 py-3.5 text-[13px] font-medium transition-colors ml-auto whitespace-nowrap cursor-pointer">
          Export csv
        </button>
      </Card>

      {/* Table */}
      <Card className="flex flex-col flex-1 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">REFERENCE</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">AMOUNT</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">METHOD</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">TRANSACTION</th>
                <th className="px-6 py-5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">DATE</th>
              </tr>
            </thead>
            <tbody>
              {paymentsData.map((item, index) => (
                <tr key={index} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
                  <td className="px-6 py-4 text-[13px] font-medium text-gray-300">
                    {item.reference}
                  </td>
                  <td className="px-6 py-4 text-[13px] text-gray-300 font-semibold">
                    {item.amount}
                  </td>
                  <td className="px-6 py-4">
                    {getMethodBadge(item.method)}
                  </td>
                  <td className="px-6 py-4 text-[13px] text-gray-500 font-medium">
                    {item.transaction}
                  </td>
                  <td className="px-6 py-4 text-[13px] text-gray-500 font-medium">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-6 mt-auto border-t border-white/5">
          <div className="text-[13px] font-medium text-gray-500">Page 1 of 2</div>
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

export default Payments;
