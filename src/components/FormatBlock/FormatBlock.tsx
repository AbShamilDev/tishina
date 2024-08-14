import { ReactNode } from "react";
import "./FormatBlock.style.scss";

interface FormatProps {
  label: string;
  children: ReactNode;
  center?: boolean;
}

const FormatBlock = ({ label, children, center }: FormatProps) => {
  return (
    <div className={`format_wrapper ${center && "center"}`}>
      <p className="label">{label}</p>
      <div className="info_block">{children}</div>
    </div>
  );
};

export default FormatBlock;
