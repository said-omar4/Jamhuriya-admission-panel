import React from 'react';
import { FileText, User, DollarSign, Download, Info, Eye, Calendar } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import StatCard from '../components/StatCard';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';

// Chart Data (same as original)
const trendData = [
  { name: 'Jan', submitted: 35, paid: 25, target: 55 },
  { name: 'Feb', submitted: 33, paid: 23, target: 55 },
  { name: 'Mar', submitted: 30, paid: 20, target: 55 },
  { name: 'Apr', submitted: 35, paid: 25, target: 55 },
  { name: 'May', submitted: 40, paid: 30, target: 55 },
  { name: 'Jun', submitted: 45, paid: 25, target: 55 },
  { name: 'Jul', submitted: 42, paid: 30, target: 55 },
  { name: 'Aug', submitted: 45, paid: 35, target: 55 },
  { name: 'Sep', submitted: 48, paid: 38, target: 55 },
  { name: 'Oct', submitted: 50, paid: 40, target: 55 },
  { name: 'Nov', submitted: 52, paid: 42, target: 55 },
  { name: 'Dec', submitted: 55, paid: 45, target: 56 },
];

const sexData = [
  { name: 'Male', value: 30, color: '#f97316' },
  { name: 'Empty1', value: 15, color: 'transparent' },
  { name: 'Female', value: 40, color: '#9b51e0' },
  { name: 'Empty2', value: 15, color: 'transparent' }
];

const nationalityData = [
  { name: 'Local Somali', value: 30, color: '#9b51e0' },
  { name: 'International', value: 5, color: '#f97316' },
  { name: 'Empty', value: 65, color: 'transparent' }
];

const ageData = [
  { name: 'under 18', value: 60 },
  { name: '18-20', value: 80 },
  { name: '21-25', value: 50 },
  { name: '26-30', value: 90 },
  { name: 'over 30', value: 80 }
];

const facultyDemandData = [
  { name: 'Computer Science & IT', value: 20, color: '#f97316' },
  { name: 'Faculty of Education', value: 10, color: '#22c55e' },
  { name: 'Faculty of Engineering', value: 40, color: '#9b51e0' },
  { name: 'Faculty of Business & Economics', value: 30, color: '#3b82f6' },
  { name: 'Health Science', value: 30, color: '#fb923c' },
  { name: 'Faculty of Law & Sharia', value: 30, color: '#ef4444' }
];

const studyModeData = [
  { name: 'Full Time', value: 30, color: '#22c55e' },
  { name: 'Empty1', value: 15, color: 'transparent' },
  { name: 'Part Time', value: 40, color: '#3b82f6' },
  { name: 'Empty2', value: 15, color: 'transparent' }
];

const paymentPlanData = [
  { name: '4 semesters', value: 30, color: '#22c55e' },
  { name: 'Empty1', value: 15, color: 'transparent' },
  { name: '8 semesters', value: 40, color: '#3b82f6' },
  { name: 'Empty2', value: 15, color: 'transparent' }
];

const sourceData = [
  { name: 'Social media', value: 60 },
  { name: 'Friend / Family', value: 70 },
  { name: 'Radio / TV', value: 90 },
  { name: 'Website', value: 70 },
  { name: 'Banner / Poster', value: 40 },
  { name: 'Others', value: 40 }
];

const SectionTitle = ({ title, color = "#894EEF" }) => (
  <div className="flex items-center gap-3 mt-4 mb-2">
    <span className="w-4 h-4 rounded-full border-4 opacity-80" style={{ borderColor: color }}></span>
    <h2 className="text-white text-[18px] font-semibold">{title}</h2>
  </div>
);

const Reports = () => {
  return (
    <PageLayout>
      {/* Filter Reports Container */}
      <Card className="p-6 flex flex-col gap-5 mb-[15px]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <FileText size={16} />
          </div>
          <h2 className="text-white text-[15px] font-semibold tracking-wide">Filter Reports</h2>
        </div>
        
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[#8c8a9e] text-[12px] font-medium ml-1">Select Year</label>
              <select 
                className="bg-main-bg border border-white/5 text-white rounded-xl pl-4 pr-10 py-3 text-[13px] outline-none min-w-[140px] appearance-none cursor-pointer focus:border-primary transition-colors"
                style={{ 
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%238c8a9e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>')`, 
                  backgroundRepeat: 'no-repeat', 
                  backgroundPosition: 'right 16px center' 
                }}
              >
                <option>All Status</option>
                <option>2026</option>
                <option>2025</option>
                <option>2024</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[#8c8a9e] text-[12px] font-medium ml-1">From</label>
              <div className="relative">
                <input 
                  type="text" 
                  className="bg-main-bg border border-white/5 text-white rounded-xl pl-4 pr-10 py-3 text-[13px] outline-none w-[140px] focus:border-primary transition-colors" 
                  defaultValue="MM/DD/YYYY" 
                />
                <Calendar size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8c8a9e] pointer-events-none" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[#8c8a9e] text-[12px] font-medium ml-1">To</label>
              <div className="relative">
                <input 
                  type="text" 
                  className="bg-main-bg border border-white/5 text-white rounded-xl pl-4 pr-10 py-3 text-[13px] outline-none w-[140px] focus:border-primary transition-colors" 
                  defaultValue="MM/DD/YYYY" 
                />
                <Calendar size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8c8a9e] pointer-events-none" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 mt-auto">
              <button className="bg-primary hover:bg-opacity-90 text-white rounded-full px-8 py-3 text-[13px] font-semibold transition-colors cursor-pointer h-[46px] flex items-center justify-center">
                Reset
              </button>
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5 mt-auto">
            <button className="bg-primary hover:bg-opacity-90 text-white rounded-full px-6 py-3 text-[13px] font-semibold transition-colors cursor-pointer flex items-center gap-2 h-[46px] justify-center">
              <Download size={14} /> Export CSV
            </button>
          </div>
        </div>
      </Card>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px]">
        <StatCard icon={User} title="Total Applications" value="1,284" color="#22c55e" iconColor="#22c55e" />
        <StatCard icon={User} title="Acceptance Rate" value="26%" color="#d97706" iconColor="#d97706" />
        <StatCard icon={User} title="Rejection Rate" value="5%" color="#9b51e0" iconColor="#9b51e0" />
        <StatCard icon={DollarSign} title="Total Revenue" value="$600" color="#d97706" iconColor="#d97706" />
      </div>

      {/* Admission Demographics */}
      <SectionTitle title="Student Demographics" color="#22c55e" />
      <Card className="p-6">
        <h3 className="text-white text-[16px] font-semibold mb-1">Admissions Trend</h3>
        <p className="text-gray-500 text-[12px] mb-6">against Total submitted vs Paid</p>
        
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorSubmitted" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPaid" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9b51e0" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#9b51e0" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6c6a7e', fontSize: 10 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6c6a7e', fontSize: 10 }} domain={[0, 60]} />
              <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: '#130f1e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} />
              <Area type="monotone" dataKey="submitted" stroke="#22c55e" strokeWidth={2} fillOpacity={1} fill="url(#colorSubmitted)" />
              <Area type="monotone" dataKey="paid" stroke="#9b51e0" strokeWidth={2} fillOpacity={1} fill="url(#colorPaid)" />
              <Area type="step" dataKey="target" stroke="#f97316" strokeWidth={1} strokeDasharray="4 4" fill="none" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-8 mt-6">
          <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></div><span className="text-gray-400 text-[13px] font-medium">Submitted</span></div>
          <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#9b51e0]"></div><span className="text-gray-400 text-[13px] font-medium">Paid</span></div>
        </div>
      </Card>

      {/* Student Demographics grid */}
      <SectionTitle title="Student Demographics" color="#3b82f6" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
        <Card className="p-6 flex flex-col">
          <h3 className="text-white text-[16px] font-semibold mb-1">Sex Distribution</h3>
          <p className="text-gray-500 text-[12px] mb-6">Male vs Female applicants</p>
          <div className="relative h-[200px] w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={sexData} innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value" stroke="none" startAngle={90} endAngle={-270}>
                  {sexData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-white text-[22px] font-bold">1,284</p>
              <p className="text-gray-500 text-[11px] mt-1">Applicants</p>
            </div>
            <div className="absolute left-[10px] top-1/2 -translate-y-1/2 text-[#f97316] text-[12px] font-bold">30%</div>
            <div className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[#9b51e0] text-[12px] font-bold">40%</div>
          </div>
          <div className="flex justify-center gap-8 mt-6">
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#f97316]"></div><span className="text-gray-400 text-[13px] font-medium">Male</span></div>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#9b51e0]"></div><span className="text-gray-400 text-[13px] font-medium">Female</span></div>
          </div>
        </Card>

        <Card className="p-6 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-white text-[16px] font-semibold mb-1">Top 5 Geographic Analysis</h3>
              <p className="text-gray-500 text-[12px]">Districts with most applicants</p>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-white text-[11px] font-medium hover:bg-white/5 transition-colors"><Eye size={12} /> View all</button>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="pb-3 text-[11px] font-medium text-gray-500 uppercase">Districts</th>
                <th className="pb-3 text-[11px] font-medium text-gray-500 uppercase text-right">Applicants</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: '1   Hodon District', val: 300 },
                { name: '2   Waaberi District', val: 300 },
                { name: '3   Wadajir District', val: 240 },
                { name: '4   Dharkenley District', val: 100 },
                { name: '5   Yaaqshid District', val: 100 }
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0">
                  <td className="py-3.5 text-[13px] text-gray-300 font-medium">{row.name}</td>
                  <td className="py-3.5 text-[13px] text-gray-400 text-right">{row.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="p-6 flex flex-col">
          <h3 className="text-white text-[16px] font-semibold mb-1">Nationality</h3>
          <p className="text-gray-500 text-[12px] mb-6">Local vs International applicants</p>
          <div className="relative h-[200px] w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={nationalityData} innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value" stroke="none" startAngle={90} endAngle={-270}>
                  {nationalityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-white text-[22px] font-bold">1,284</p>
              <p className="text-gray-500 text-[11px] mt-1">Applicants</p>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            <div className="text-[13px] font-medium text-[#9b51e0]">Local (Somali) : 30%</div>
            <div className="text-[13px] font-medium text-[#f97316]">International : 5%</div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
        <Card className="p-6 col-span-1 lg:col-span-1 flex flex-col">
          <h3 className="text-white text-[16px] font-semibold mb-1">Top Region</h3>
          <p className="text-gray-500 text-[12px] mb-6">Top Regions where students are coming from</p>
          <table className="w-full text-left border-collapse mt-auto">
            <thead>
              <tr className="border-b border-white/5">
                <th className="pb-3 text-[11px] font-medium text-gray-500 uppercase">Faculty</th>
                <th className="pb-3 text-[11px] font-medium text-gray-500 uppercase text-right">Estimated</th>
              </tr>
            </thead>
            <tbody>
              {[
                '1   Banadir Region', '2   Banadir Region', '3   Jubaasi House', '4   Shabelle Dhexe', '5   Nugaal Region'
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0">
                  <td className="py-3 text-[13px] text-gray-300 font-medium">{row}</td>
                  <td className="py-3 text-[13px] text-gray-400 text-right">50</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="p-6 col-span-1 lg:col-span-2 flex flex-col">
          <h3 className="text-white text-[16px] font-semibold mb-1">Age Range</h3>
          <p className="text-gray-500 text-[12px] mb-6">Age range of applicants approved</p>
          <div className="w-full h-[220px] flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6c6a7e', fontSize: 11 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6c6a7e', fontSize: 11 }} domain={[0, 100]} tickFormatter={(val) => `${val}%`} />
                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: '#130f1e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} />
                <Bar dataKey="value" fill="#9b51e0" radius={[4, 4, 0, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Program Popularity */}
      <SectionTitle title="Program Popularity" color="#9b51e0" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
        <Card className="p-6 flex flex-col col-span-1">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-white text-[16px] font-semibold mb-1">Top 5 Secondary School Feeders</h3>
              <p className="text-gray-500 text-[12px]">Schools sending most applicants</p>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-white text-[11px] font-medium hover:bg-white/5 transition-colors shrink-0"><Eye size={12} /> View all</button>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="pb-3 text-[11px] font-medium text-gray-500 uppercase">Faculty</th>
                <th className="pb-3 text-[11px] font-medium text-gray-500 uppercase text-right">Estimated</th>
              </tr>
            </thead>
            <tbody>
              {[
                '1   Tawakkal Secondary School', '2   Al Furqan Secondary School', '3   Al Huda Secondary School', '4   Dhameyaale Secondary School', '5   Mujma\'a Secondary School'
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0">
                  <td className="py-3.5 text-[13px] text-gray-300 font-medium">{row}</td>
                  <td className="py-3.5 text-[13px] text-gray-400 text-right">50</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="p-6 flex flex-col col-span-1 lg:col-span-2">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-white text-[16px] font-semibold mb-1">Faculty Demand</h3>
              <p className="text-gray-500 text-[12px]">App count per faculty</p>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-white text-[11px] font-medium hover:bg-white/5 transition-colors shrink-0"><Eye size={12} /> View all</button>
          </div>
          
          <div className="flex items-center justify-center h-[200px] mb-6">
            <div className="relative w-[160px] h-[160px] shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={facultyDemandData} innerRadius={55} outerRadius={75} paddingAngle={2} dataKey="value" stroke="none">
                    {facultyDemandData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-white text-[20px] font-bold">1,284</p>
                <p className="text-gray-500 text-[11px] mt-1">Applicants</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 ml-8 flex-1">
              {facultyDemandData.map((entry, index) => (
                <div key={index} className="flex items-center gap-3 text-[12px] font-medium text-[#8c8a9e]">
                  <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: entry.color }}></div>
                  <span className="flex-1 truncate">{entry.name}</span>
                  <span className="text-white shrink-0">{entry.value}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-4 rounded-xl flex gap-3 items-start mt-auto">
            <Info size={16} className="text-[#894EEF] shrink-0 mt-0.5" />
            <span className="text-[#8c8a9e] text-[12px] leading-relaxed">As the most popular faculty, it's recommended to allocate more resources towards infrastructure, faculty hires, and marketing to keep up with the growing demand.</span>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
        <Card className="p-6 flex flex-col">
          <h3 className="text-white text-[16px] font-semibold mb-1">By Study Mode</h3>
          <p className="text-gray-500 text-[12px] mb-6">Full time vs Part time applicants</p>
          <div className="relative h-[200px] w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={studyModeData} innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value" stroke="none" startAngle={90} endAngle={-270}>
                  {studyModeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-white text-[22px] font-bold">1,284</p>
              <p className="text-gray-500 text-[11px] mt-1">Applicants</p>
            </div>
            <div className="absolute left-[10%] top-1/2 -translate-y-1/2 text-[#22c55e] text-[12px] font-bold">30%</div>
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 text-[#3b82f6] text-[12px] font-bold">40%</div>
          </div>
          <div className="flex justify-center gap-8 mt-6">
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></div><span className="text-gray-400 text-[13px] font-medium">Full Time</span></div>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]"></div><span className="text-gray-400 text-[13px] font-medium">Part Time</span></div>
          </div>
        </Card>

        <Card className="p-6 flex flex-col col-span-1 lg:col-span-2">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-white text-[16px] font-semibold mb-1">Top 5 Departments</h3>
              <p className="text-gray-500 text-[12px]">Top departments</p>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-white text-[11px] font-medium hover:bg-white/5 transition-colors shrink-0"><Eye size={12} /> View all</button>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="pb-3 text-[11px] font-medium text-gray-500 uppercase">Departments</th>
                <th className="pb-3 text-[11px] font-medium text-gray-500 uppercase text-right">Applicants</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: '1   Hodon District', val: 120 },
                { name: '2   Waaberi District', val: 130 },
                { name: '3   Wadajir District', val: 240 },
                { name: '4   Dharkenley District', val: 100 },
                { name: '5   Yaaqshid District', val: 100 }
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0">
                  <td className="py-4 text-[13px] text-gray-300 font-medium">{row.name}</td>
                  <td className="py-4 text-[13px] text-gray-400 text-right">{row.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>

      {/* Financial Projections */}
      <SectionTitle title="Financial Projections" color="#22c55e" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
        <Card className="p-6 col-span-1 lg:col-span-2 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-white text-[16px] font-semibold mb-1">Estimated Revenue by Program/Rate</h3>
              <p className="text-gray-500 text-[12px]">Estimated projected revenue</p>
            </div>
            <div className="flex items-start gap-6">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-white text-[11px] font-medium hover:bg-white/5 transition-colors shrink-0"><Eye size={12} /> View all</button>
              <div className="text-right">
                <p className="text-[11px] text-gray-500 mb-1 font-medium uppercase tracking-wider">Total Revenue</p>
                <p className="text-[20px] font-bold text-[#22c55e] m-0">$480</p>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="pb-4 text-[11px] font-medium text-gray-500 uppercase tracking-wider">Faculty</th>
                  <th className="pb-4 text-[11px] font-medium text-gray-500 uppercase tracking-wider">Fee</th>
                  <th className="pb-4 text-[11px] font-medium text-gray-500 uppercase tracking-wider">Applicants</th>
                  <th className="pb-4 text-[11px] font-medium text-gray-500 uppercase tracking-wider">Estimated</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { n: 'Faculty Of Computing & ICT', f: '$25', a: 4, e: '$100' },
                  { n: 'Faculty Of Education', f: '$25', a: 4, e: '$100' },
                  { n: 'Faculty Of Engineering', f: '$25', a: 3, e: '$75' },
                  { n: 'Faculty Of Business & Economics', f: '$25', a: 4, e: '$100' },
                  { n: 'Faculty Of Medicine & Health Sciences', f: '$25', a: 3, e: '$75' },
                  { n: 'Faculty Of Law & Sharia', f: '$15', a: 10, e: '$150' },
                  { n: 'Computer Science & IT', f: '$10', a: 3, e: '$30' }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9b51e0]"></div>
                        <span className="text-[13px] text-white font-medium">{row.n}</span>
                      </div>
                    </td>
                    <td className="py-4 text-[13px] text-gray-400 font-medium">{row.f}</td>
                    <td className="py-4 text-[13px] text-gray-400 font-medium">{row.a}</td>
                    <td className="py-4 text-[14px] text-[#22c55e] font-semibold">{row.e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-6 flex flex-col">
          <h3 className="text-white text-[16px] font-semibold mb-1">Payment Plan Trends</h3>
          <p className="text-gray-500 text-[12px] mb-6">4 semesters vs 8 semesters</p>
          <div className="relative h-[250px] w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={paymentPlanData} innerRadius={70} outerRadius={90} paddingAngle={2} dataKey="value" stroke="none" startAngle={90} endAngle={-270}>
                  {paymentPlanData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-white text-[24px] font-bold">1,284</p>
              <p className="text-gray-500 text-[12px] mt-1 font-medium">Total</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></div>
                <span className="text-[#22c55e] text-[13px] font-medium">Fall semester</span>
              </div>
              <span className="text-[#22c55e] text-[13px] font-bold">60%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]"></div>
                <span className="text-[#3b82f6] text-[13px] font-medium">Installment</span>
              </div>
              <span className="text-[#3b82f6] text-[13px] font-bold">40%</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Marketing Insights */}
      <SectionTitle title="Marketing Insights" color="#9b51e0" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
        <Card className="p-6 flex flex-col col-span-1 lg:col-span-2">
          <h3 className="text-white text-[16px] font-semibold mb-1">Source of Information</h3>
          <p className="text-gray-500 text-[12px] mb-6">How applicants heard about us</p>
          <div className="w-full h-[250px] flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sourceData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6c6a7e', fontSize: 11 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6c6a7e', fontSize: 11 }} domain={[0, 100]} tickFormatter={(val) => `${val}%`} />
                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: '#130f1e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} />
                <Bar dataKey="value" fill="#9b51e0" radius={[4, 4, 0, 0]} barSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-white text-[16px] font-semibold mb-1">Top Source of Informations</h3>
              <p className="text-gray-500 text-[12px]">Source vs Applicants</p>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-white text-[11px] font-medium hover:bg-white/5 transition-colors shrink-0"><Eye size={12} /> View all</button>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="pb-3 text-[11px] font-medium text-gray-500 uppercase tracking-wider">Source</th>
                <th className="pb-3 text-[11px] font-medium text-gray-500 uppercase tracking-wider text-right">Applicants</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: '1   Social Media', val: 400 },
                { name: '2   Friend / Family', val: 200 },
                { name: '3   Website', val: 100 },
                { name: '4   Banner / Poster', val: 120 },
                { name: '5   Others', val: 50 }
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                  <td className="py-4 text-[13px] text-gray-300 font-medium">{row.name}</td>
                  <td className="py-4 text-[13px] text-gray-400 text-right">{row.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>

    </PageLayout>
  );
};

export default Reports;
