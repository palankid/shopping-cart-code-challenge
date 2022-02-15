import React from "react";

export interface SectionProps {
  children: React.ReactNode;
  padding?: string;
  className?: string;
}

const Section = ({ children, padding = "1.5rem", className }: SectionProps) => {
  return (
    <div className={className} style={{ padding }}>
      {children}
    </div>
  );
};

export default Section;
