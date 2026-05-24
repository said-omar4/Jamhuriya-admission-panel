import React from 'react';

const PageLayout = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-col gap-[15px] w-full h-full ${className}`}>
      {children}
    </div>
  );
};

export default PageLayout;
