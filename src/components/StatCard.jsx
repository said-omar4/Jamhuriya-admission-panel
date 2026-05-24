import React from 'react';
import Card from './Card';

const StatCard = ({ icon: Icon, title, value, color, iconColor }) => {
  return (
    <Card className="flex flex-col relative overflow-hidden h-[120px]">
      <div className="flex flex-col p-5 gap-3 h-full justify-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#1A1D2D] bg-opacity-50 flex items-center justify-center" style={{ color: iconColor }}>
            {Icon && <Icon size={16} strokeWidth={2.5} />}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-400 text-[13px] font-medium">{title}</p>
          <h3 className="text-white text-[28px] font-semibold tracking-tight">{value}</h3>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-[3px] w-[100%]" style={{ backgroundColor: color }}></div>
    </Card>
  );
};

export default StatCard;
