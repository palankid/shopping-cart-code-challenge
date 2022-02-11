import React from "react";

export interface SectionProps {
  children: React.ReactNode;
  padding?: string;
}

const Section = ({ children, padding = "1.5rem" }: SectionProps) => {
  return <div style={{ padding }}>{children}</div>;
};

export default Section;
