import { useEffect, useRef, useState } from "react";
import "./App.css";
import StartBlock from "./blocks/StartBlock/StartBlock";
import BenefitsBlock from "./blocks/BenefitsBlock/BenefitsBlock";
import FormatsBlock from "./blocks/FormatsBlock/FormatsBlock";
import TryItBlock from "./blocks/TryItBlock/TryItBlock";

function App() {
  const [scroll, setScroll] = useState<number>(0);
  const [showBenefits, setShowBenefits] = useState<boolean>(false);
  const [showFormats, setShowFormats] = useState<boolean>(false);
  const [showTryIt, setShowTryIt] = useState<boolean>(false);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const formatsRef = useRef<HTMLDivElement>(null);
  const tryItRef = useRef<HTMLDivElement>(null);

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
    if (!showTryIt && tryItRef.current) {
      if (scroll + window.screen.height * 0.4 > tryItRef.current.offsetTop) {
        setShowTryIt(true);
        console.log("show tryIt");
      }
    }
  }, [scroll, benefitsRef, formatsRef]);

  return (
    <div className="benefits_page">
      <StartBlock />
      <BenefitsBlock ref={benefitsRef} active={showBenefits} />
      <FormatsBlock ref={formatsRef} active={showFormats} />
      <TryItBlock ref={tryItRef} active={showTryIt} scroll={scroll} />
    </div>
  );
}

export default App;
