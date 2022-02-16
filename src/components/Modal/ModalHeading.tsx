import Typography from "components/Typography";
import React from "react";

export interface ModalHeadingProps {
  title: string;
  padding?: string;
  className?: string;
}

const ModalHeading = ({
  title,
  padding = "1.5rem",
  className,
}: ModalHeadingProps) => {
  return (
    <div className={className} style={{ padding }}>
      <Typography id="modalHeadingTitle" variant="h3">
        {title}
      </Typography>
    </div>
  );
};

export default ModalHeading;
