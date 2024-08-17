import { useEffect, useRef, useState } from "react";
import FormatsBlock from "./components/FormatsBlock/FormatsBlock";
import BenefitsBlock from "./components/BenefitsBlock/BenefitsBlock";

const BenefitsPage = () => {
  const [scroll, setScroll] = useState<number>(0);
  const [showBenefits, setShowBenefits] = useState<boolean>(false);
  const [showFormats, setShowFormats] = useState<boolean>(false);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const formatsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY));
    return window.removeEventListener("scroll", () => setScroll(window.scrollY));
  }, []);

  useEffect(() => {
    if (!showBenefits && benefitsRef.current) {
      if (scroll + window.screen.height * (1 / 2) > benefitsRef.current.offsetTop) {
        setShowBenefits(true);
        console.log("show benefits");
      }
    }
    if (!showFormats && formatsRef.current) {
      if (scroll + window.screen.height * (1 / 2) > formatsRef.current.offsetTop) {
        setShowFormats(true);
        console.log("show formats");
      }
    }
  }, [scroll, benefitsRef, formatsRef]);

  return (
    <div className="benefits_page">
      <BenefitsBlock ref={benefitsRef} active={showBenefits} />
      <FormatsBlock ref={formatsRef} active={showFormats} />
    </div>
  );
};

export default BenefitsPage;
