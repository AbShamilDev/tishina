import "./BenefitsLine.style.scss";
import BenefitCircle from "../BenefitCircle/BenefitCircle";

const BenefitsLine = () => {
  return (
    <div className="benefits_line_container">
      <div className="benefits_line">
        <BenefitCircle
          background="benefit_1.png"
          text="Снизить боли в теле: спина, шея, головные боли"
        />
        <BenefitCircle background="benefit_2.webp" text="Снизить уровень тревожности и стресса" />
        <BenefitCircle background="benefit_3.webp" text="Научиться управлять своим настроением" />
        <BenefitCircle
          background="benefit_4.webp"
          text="Укрепить свое тело, сделать его более сильным и выносливым"
        />
      </div>
    </div>
  );
};

export default BenefitsLine;
