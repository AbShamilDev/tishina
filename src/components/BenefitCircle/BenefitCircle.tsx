import { useEffect } from "react";
import "./BenefitCircle.style.scss";

interface CircleProps {
  text: string;
  background: string;
}

const BenefitCircle = ({ text, background }: CircleProps) => {
  return (
    <div className="circle_wrapper">
      <img src="/images/circle_border.png" alt="" style={{ transform: "rotate(3deg)" }} />
      <img src={`/images/${background}`} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default BenefitCircle;
