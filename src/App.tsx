import { useEffect, useRef, useState } from "react";
import "./App.css";
import StartSection from "./sections/StartSection/StartSection";
import BenefitsSection from "./sections/BenefitsSection/BenefitsSection";
import FormatsSection from "./sections/FormatsSection/FormatsSection";
import TryItSection from "./sections/TryItSection/TryItSection";

function App() {
  const [scroll, setScroll] = useState<number>(0);
  const [showAboutMe, setShowAboutMe] = useState<boolean>(false);
  const [showBenefits, setShowBenefits] = useState<boolean>(false);
  const [showFormats, setShowFormats] = useState<boolean>(false);
  const [showTryIt, setShowTryIt] = useState<boolean>(false);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const formatsRef = useRef<HTMLDivElement>(null);
  const tryItRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY));
    return window.removeEventListener("scroll", () => setScroll(window.scrollY));
  }, []);

  useEffect(() => {
    if (!showAboutMe && aboutMeRef.current) {
      if (scroll + window.screen.height * (1 / 3) > aboutMeRef.current.offsetTop) {
        setShowAboutMe(true);
        console.log("show aboutMe");
      }
    } else if (!showBenefits && benefitsRef.current) {
      if (scroll + window.screen.height * (1 / 2) > benefitsRef.current.offsetTop) {
        setShowBenefits(true);
        console.log("show benefits");
      }
    } else if (!showFormats && formatsRef.current) {
      if (scroll + window.screen.height * (1 / 2) > formatsRef.current.offsetTop) {
        setShowFormats(true);
        console.log("show formats");
      }
    } else if (!showTryIt && tryItRef.current) {
      if (scroll + window.screen.height * 0.4 > tryItRef.current.offsetTop) {
        setShowTryIt(true);
        console.log("show tryIt");
      }
    }
  }, [scroll, benefitsRef, formatsRef]);

  return (
    <div className="benefits_page">
      <StartSection ref={aboutMeRef} active={showAboutMe} />
      <BenefitsSection ref={benefitsRef} active={showBenefits} />
      <FormatsSection ref={formatsRef} active={showFormats} />
      <TryItSection ref={tryItRef} active={showTryIt} scroll={scroll} />
    </div>
  );
}

export default App;
