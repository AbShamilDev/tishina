import BenefitsLine from "../../components/BenefitsLine/BenefitsLine";
import "./BenefitsBlock.style.scss";
import { forwardRef, memo } from "react";

const BenefitsBlock = memo(
  forwardRef<HTMLDivElement, { active: boolean }>(function BenefitsBlock({ active }, ref) {
    return (
      <div className={`benefit_wrapper ${active ? "active" : ""}`} ref={ref}>
        <h1>Практики в йога клубе помогут</h1>
        <BenefitsLine />
      </div>
    );
  })
);

export default BenefitsBlock;
