import BenefitsLine from "../../components/BenefitsLine/BenefitsLine";
import "./BenefitsSection.style.scss";
import { forwardRef, memo } from "react";

const BenefitsSection = memo(
  forwardRef<HTMLDivElement, { active: boolean }>(function BenefitsBlock({ active }, ref) {
    return (
      <section className={`benefit_wrapper ${active ? "active" : ""}`} ref={ref}>
        <h1>Практики в йога клубе помогут</h1>
        <BenefitsLine />
      </section>
    );
  })
);

export default BenefitsSection;
