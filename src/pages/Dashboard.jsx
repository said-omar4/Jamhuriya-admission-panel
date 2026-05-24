import React from 'react';
import { UserCheck, UserX, Clock, Users, Bell } from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
  AreaChart, Area, CartesianGrid 
} from 'recharts';
import StatCard from '../components/StatCard';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';

const barData = [
  { name: 'Mon', applications: 42, approved: 32 },
  { name: 'Tue', applications: 50, approved: 37 },
  { name: 'Wed', applications: 36, approved: 26 },
  { name: 'Thu', applications: 54, approved: 39 },
  { name: 'Fri', applications: 49, approved: 34 },
];

const pieData = [
  { name: 'Computer Science & IT', value: 20, color: '#f97316' },
  { name: 'Faculty of Education', value: 10, color: '#22c55e' },
  { name: 'Faculty of Engineering', value: 40, color: '#a855f7' },
  { name: 'Faculty of Business & Economics', value: 30, color: '#3b82f6' },
  { name: 'Health Science', value: 30, color: '#ec4899' },
  { name: 'Faculty of Law & Sharia', value: 30, color: '#8b5cf6' },
];

const areaData = [
  { name: 'Feb 16', submitted: 70, rejected: 130, accepted: 100 },
  { name: 'Feb 22', submitted: 80, rejected: 125, accepted: 90 },
  { name: 'Mar 1', submitted: 90, rejected: 128, accepted: 120 },
  { name: 'Mar 7', submitted: 110, rejected: 135, accepted: 100 },
  { name: 'Mar 14', submitted: 100, rejected: 132, accepted: 115 },
  { name: 'Mar 17', submitted: 115, rejected: 130, accepted: 110 },
];

const recentAdmissions = [
  { id: 1, name: 'Thereso Webb', program: 'Computer application', time: '3 min', avatar: 'https://ui-avatars.com/api/?name=Thereso+Webb' },
  { id: 2, name: 'Thereso Webb', program: 'Computer application', time: '3 min', avatar: 'https://ui-avatars.com/api/?name=Thereso+Webb' },
  { id: 3, name: 'Thereso Webb', program: 'Computer application', time: '3 min', avatar: 'https://ui-avatars.com/api/?name=Thereso+Webb' },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#130f1e] p-3 border border-white/5 rounded-lg shadow-lg">
        <p className="text-white mb-2 text-[13px] font-medium">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></div>
            <span className="text-[#8c8a9e] text-[12px]">{entry.name}: <span className="text-white">{entry.value}</span></span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const CustomBarShape = (props) => {
  const { fill, x, y, width, height, radius } = props;
  return (
    <g>
      <path
        d={`M ${x},${y + radius[0]} 
            a ${radius[0]},${radius[0]} 0 0 1 ${radius[0]},-${radius[0]} 
            h ${width - 2 * radius[0]} 
            a ${radius[0]},${radius[0]} 0 0 1 ${radius[0]},${radius[0]} 
            v ${height - radius[0]} 
            h -${width} 
            Z`}
        fill={fill}
      />
      {height > 10 && (
        <rect x={x + width / 2 - 4} y={y + 4} width={8} height={2} fill="rgba(255,255,255,0.6)" rx={1} />
      )}
    </g>
  );
};


const Dashboard = () => {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px]">
        <StatCard icon={Users} title="Total Applications" value="1,284" color="#22c55e" iconColor="#22c55e" />
        <StatCard icon={UserCheck} title="Approved Applications" value="1,284" color="#f97316" iconColor="#f97316" />
        <StatCard icon={Clock} title="Pending Application" value="1,284" color="#f97316" iconColor="#f97316" />
        <StatCard icon={UserX} title="Rejected Applications" value="1,284" color="#9b51e0" iconColor="#9b51e0" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px]">
        <Card className="flex flex-col p-6 h-[400px]">
          <h3 className="text-white text-[16px] font-semibold mb-1">Weekly Admissions</h3>
          <p className="text-gray-500 text-[12px] mb-6">New vs approved (last 7 days)</p>
          <div className="w-full flex-1 min-h-0">
            <ResponsiveContainer>
              <BarChart data={barData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }} barGap={12}>
                <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.02)" />
                <XAxis dataKey="name" stroke="#6c6a7e" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6c6a7e'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6c6a7e'}} ticks={[15, 30, 45, 60]} />
                <RechartsTooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.02)'}} />
                <Bar dataKey="applications" fill="#4b4b5a" radius={[6, 6, 0, 0]} barSize={28} name="Applications" shape={<CustomBarShape />} />
                <Bar dataKey="approved" fill="#9b51e0" radius={[6, 6, 0, 0]} barSize={28} name="Approved" shape={<CustomBarShape />} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-8 mt-4">
             <div className="flex items-center gap-2">
                <div className="w-3 h-1.5 rounded bg-[#4b4b5a]"></div>
                <span className="text-[#6c6a7e] text-[13px] font-medium">Applications</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-3 h-1.5 rounded bg-[#3b82f6]"></div>
                <span className="text-[#3b82f6] text-[13px] font-medium">Approved</span>
             </div>
          </div>
        </Card>

        <Card className="flex flex-col p-6 h-[400px]">
          <h3 className="text-white text-[16px] font-semibold mb-1">Faculty Demand</h3>
          <p className="text-gray-500 text-[12px] mb-6">Application volume per faculty</p>
          <div className="flex items-center h-full pb-5">
            <div className="w-[140px] h-[140px] relative">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={55}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <span className="text-white text-[20px] font-bold">1,284</span>
                 <span className="text-[#6c6a7e] text-[11px] mt-0.5">Applicants</span>
              </div>
            </div>
            
            <div className="flex-1 pl-6">
              {pieData.map((item, index) => (
                <div key={index} className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[#6c6a7e] text-[12px]">{item.name}</span>
                  </div>
                  <span className="text-white text-[12px] font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-4 rounded-xl mt-auto flex gap-3 items-start">
            <Bell size={16} className="text-[#6c6a7e] shrink-0 mt-0.5" />
            <p className="text-[#8c8a9e] text-[11px] leading-relaxed m-0">
              In the coming months, we anticipate a significant shift in health schedules as more people prioritize wellness. With the rise of telehealth services, individuals will have greater access to healthcare professionals, leading to timely interventions.
            </p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
        <Card className="col-span-2 flex flex-col p-6 h-[350px]">
          <h3 className="text-white text-[16px] font-semibold mb-1">Admissions -- 30 Day Trend</h3>
          <p className="text-gray-500 text-[12px] mb-6">Applications submitted vs paid</p>
          <div className="w-full flex-1 min-h-0">
            <ResponsiveContainer>
              <AreaChart data={areaData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAccepted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9b51e0" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#9b51e0" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorSubmitted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.02)" />
                <XAxis dataKey="name" stroke="#6c6a7e" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6c6a7e'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6c6a7e'}} ticks={[20, 60, 100, 140]} />
                <RechartsTooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="rejected" stroke="#f97316" fill="none" strokeWidth={2} strokeDasharray="4 4" name="Rejected" />
                <Area type="monotone" dataKey="accepted" stroke="#9b51e0" fillOpacity={1} fill="url(#colorAccepted)" strokeWidth={2} name="Accepted" />
                <Area type="monotone" dataKey="submitted" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorSubmitted)" strokeWidth={2} name="Submitted" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-8 mt-4">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
                <span className="text-[#6c6a7e] text-[13px] font-medium">Submitted</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#9b51e0]"></div>
                <span className="text-[#6c6a7e] text-[13px] font-medium">Rejected</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#9b51e0]"></div>
                <span className="text-[#6c6a7e] text-[13px] font-medium">Accepted</span>
             </div>
          </div>
        </Card>

        <Card className="flex flex-col p-6 h-[350px]">
          <h3 className="text-white text-[16px] font-semibold mb-1">Last Admissions</h3>
          <p className="text-gray-500 text-[12px] mb-4">Applications submitted vs paid</p>
          <div className="flex flex-col gap-4 overflow-y-auto custom-scrollbar pr-2 flex-1">
            {recentAdmissions.map((item, index) => (
              <div key={index} className={`flex items-center justify-between pb-4 ${index < recentAdmissions.length - 1 ? 'border-b border-white/5' : ''}`}>
                <div className="flex items-center gap-4">
                  <img src={item.avatar} alt={item.name} className="w-11 h-11 rounded-full object-cover grayscale" />
                  <div>
                    <h4 className="text-white text-[14px] font-medium mb-1">{item.name}</h4>
                    <p className="text-[#6c6a7e] text-[12px]">{item.program}</p>
                  </div>
                </div>
                <span className="text-[#6c6a7e] text-[12px] font-medium">{item.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
