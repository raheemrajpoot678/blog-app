import React, { ReactNode } from "react";

interface GutterProps {
  children: ReactNode;
  className?: string;
}

const Gutter: React.FC<GutterProps> = ({ children, className = "" }) => {
  return (
    <div className={`px-4 sm:px-10 md:px-12 lg:px-16 ${className}`}>
      {children}
    </div>
  );
};

export default Gutter;
