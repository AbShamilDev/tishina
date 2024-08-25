import "./BenefitsLine.style.scss";
import BenefitCircle from "../BenefitCircle/BenefitCircle";
import { useState } from "react";

const BenefitsLine = () => {
  const [scroll, setScroll] = useState<number>(0);

  return (
    <div
      className="benefits_line_container"
      onScroll={(ev) => {
        const target = ev.target as HTMLElement;
        setScroll(target.scrollLeft / 10);
      }}
    >
      <div className="benefits_line">
        <BenefitCircle
          background="benefit_1.png"
          text={`Снизить уровень тревожности и \nстресса`}
          rotate={scroll}
        />
        <BenefitCircle
          background="benefit_2.png"
          text=" Соединиться с собой
 и почувствовать момент здесь 
и сейчас"
          rotate={scroll}
        />
        <BenefitCircle
          background="benefit_3.png"
          text="Снизить боли в теле и снять зажимы"
          rotate={scroll}
        />
        <BenefitCircle
          background="benefit_4.png"
          text="Добавить в жизнь больше вдохновения и счастья"
          rotate={scroll}
        />
        <BenefitCircle
          background="benefit_5.png"
          text="Стать выносливее и сильнее"
          rotate={scroll}
        />
      </div>
    </div>
  );
};

export default BenefitsLine;
