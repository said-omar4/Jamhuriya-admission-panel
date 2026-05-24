import React, { useState } from 'react';
import { Settings as SettingsIcon, Shield, Bell, HardDrive, Save } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <PageLayout>
      {/* Header */}
      <div className="flex items-center gap-3 bg-transparent">
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary">
          <SettingsIcon size={20} />
        </div>
        <h1 className="text-white text-[22px] font-semibold tracking-tight">System Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[15px]">
        {/* Sidebar Navigation inside Settings */}
        <Card className="p-4 lg:col-span-1 flex flex-col gap-2 h-fit">
          <button
            onClick={() => setActiveTab('general')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-semibold transition-all cursor-pointer ${
              activeTab === 'general'
                ? 'bg-primary text-white'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <SettingsIcon size={16} />
            General
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-semibold transition-all cursor-pointer ${
              activeTab === 'security'
                ? 'bg-primary text-white'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Shield size={16} />
            Security
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-semibold transition-all cursor-pointer ${
              activeTab === 'notifications'
                ? 'bg-primary text-white'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Bell size={16} />
            Notifications
          </button>
        </Card>

        {/* Tab Contents */}
        <Card className="lg:col-span-3 p-8 flex flex-col gap-6">
          {activeTab === 'general' && (
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-white text-[16px] font-semibold mb-1">General Settings</h3>
                <p className="text-gray-500 text-[12px]">Manage global system names and values</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                <div className="flex flex-col">
                  <label className="text-white text-[13px] font-semibold mb-2.5 ml-1">University Name</label>
                  <input
                    type="text"
                    defaultValue="Jamhuriya University"
                    className="bg-[#070211] border border-white/5 text-white rounded-xl px-4 py-3.5 text-[13px] outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white text-[13px] font-semibold mb-2.5 ml-1">Support Email</label>
                  <input
                    type="email"
                    defaultValue="support@jamhuriya.edu.so"
                    className="bg-[#070211] border border-white/5 text-white rounded-xl px-4 py-3.5 text-[13px] outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white text-[13px] font-semibold mb-2.5 ml-1">Admissions Semester</label>
                  <select
                    className="bg-[#070211] border border-white/5 text-white rounded-xl px-4 py-3.5 text-[13px] outline-none appearance-none pr-10 cursor-pointer"
                    style={{
                      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%238c8a9e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>')`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center'
                    }}
                  >
                    <option>Fall 2026</option>
                    <option>Spring 2026</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-white text-[13px] font-semibold mb-2.5 ml-1">System Currency</label>
                  <select
                    className="bg-[#070211] border border-white/5 text-white rounded-xl px-4 py-3.5 text-[13px] outline-none appearance-none pr-10 cursor-pointer"
                    style={{
                      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%238c8a9e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>')`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center'
                    }}
                  >
                    <option>USD ($)</option>
                    <option>SOS (Sh.)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-white text-[16px] font-semibold mb-1">Security & Access</h3>
                <p className="text-gray-500 text-[12px]">Configure credentials and authorization safeguards</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                <div className="flex flex-col">
                  <label className="text-white text-[13px] font-semibold mb-2.5 ml-1">Current Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="bg-[#070211] border border-white/5 text-white rounded-xl px-4 py-3.5 text-[13px] outline-none focus:border-primary transition-colors placeholder-gray-700"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white text-[13px] font-semibold mb-2.5 ml-1">New Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="bg-[#070211] border border-white/5 text-white rounded-xl px-4 py-3.5 text-[13px] outline-none focus:border-primary transition-colors placeholder-gray-700"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl mt-4">
                <div className="flex flex-col gap-1">
                  <h4 className="text-white text-[14px] font-semibold">Require Two-Factor Auth (2FA)</h4>
                  <p className="text-gray-500 text-[12px]">Adds a mandatory verification code step during login</p>
                </div>
                <div className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-white text-[16px] font-semibold mb-1">Notification Preferences</h3>
                <p className="text-gray-500 text-[12px]">Choose what alerts are broadcasted to the team</p>
              </div>

              <div className="flex flex-col gap-4 mt-2">
                {[
                  { title: 'New Admissions', desc: 'Send daily emails for newly submitted student profiles.' },
                  { title: 'Payment Success Alerts', desc: 'Notify admins instantly upon any successful payment reference check.' },
                  { title: 'Weekly Reports Broadcast', desc: 'Generate and email the full dashboard summary report at the end of every week.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-[#070211]/50 border border-white/5 rounded-2xl">
                    <div className="flex flex-col gap-0.5">
                      <h4 className="text-white text-[13px] font-semibold">{item.title}</h4>
                      <p className="text-gray-500 text-[11px]">{item.desc}</p>
                    </div>
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={i < 2} />
                      <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="flex items-center justify-end gap-3 mt-6 border-t border-white/5 pt-6">
            <button className="px-6 py-3 rounded-xl border border-white/10 text-gray-400 text-[13px] font-semibold hover:text-white hover:border-white/20 transition-all bg-transparent cursor-pointer">
              Cancel
            </button>
            <button className="px-6 py-3 rounded-xl bg-primary text-white text-[13px] font-semibold cursor-pointer flex items-center gap-2 hover:bg-opacity-95 transition-all">
              <Save size={16} />
              Save Changes
            </button>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Settings;
