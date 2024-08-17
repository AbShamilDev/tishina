import { ReactNode } from "react";
import "./FormatBlock.style.scss";

export interface FormatProps {
  label: string;
  children: ReactNode;
  delay?: number;
  center?: boolean;
}

const FormatBlock = ({ label, children, center, delay }: FormatProps) => {
  return (
    <div
      className={`format_wrapper ${center && "center"}`}
      style={{ animationDelay: delay ? `${delay * 0.2}s` : "none" }}
    >
      <p className="label">{label}</p>
      <div className="info_block">{children}</div>
    </div>
  );
};

export default FormatBlock;
