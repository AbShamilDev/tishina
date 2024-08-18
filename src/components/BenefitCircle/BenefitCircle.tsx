import "./BenefitCircle.style.scss";

interface CircleProps {
  text: string;
  background: string;
  rotate: number;
}

const BenefitCircle = ({ text, background, rotate }: CircleProps) => {
  return (
    <div className="circle_wrapper">
      <img
        className="circle_border"
        src="/images/circle_border.png"
        alt=""
        style={{ transform: `rotate(${rotate}deg)` }}
      />
      <img src={`/images/${background}`} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default BenefitCircle;
