import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import StartSection from "./sections/StartSection/StartSection";
import BenefitsSection from "./sections/BenefitsSection/BenefitsSection";
import FormatsSection from "./sections/FormatsSection/FormatsSection";
import TryItSection from "./sections/TryItSection/TryItSection";

interface showBlockFcnType {
  (offsetTop: number, setShowFcn: Dispatch<SetStateAction<boolean>>, screenFraction: number): void;
}

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
    localStorage.setItem("open_time", JSON.stringify(new Date()));
    window.addEventListener("scroll", () => setScroll(window.scrollY));
    return window.removeEventListener("scroll", () => setScroll(window.scrollY));
  }, []);

  const showBlock: showBlockFcnType = (offsetTop, setShowFcn, screenFraction) => {
    scroll + window.screen.height * screenFraction > offsetTop && setShowFcn(true);
  };

  useEffect(() => {
    if (!showAboutMe && aboutMeRef.current)
      showBlock(aboutMeRef.current.offsetTop, setShowAboutMe, 1 / 3);
    else if (!showBenefits && benefitsRef.current)
      showBlock(benefitsRef.current.offsetTop, setShowBenefits, 1 / 2);
    else if (!showFormats && formatsRef.current)
      showBlock(formatsRef.current.offsetTop, setShowFormats, 1 / 2);
    else if (!showTryIt && tryItRef.current)
      showBlock(tryItRef.current.offsetTop, setShowTryIt, 0.4);
  }, [scroll, aboutMeRef, benefitsRef, formatsRef, tryItRef]);

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
