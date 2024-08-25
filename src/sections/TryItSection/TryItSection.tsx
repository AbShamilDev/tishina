import TryItBackground from "../../components/TryItBackground/TryItBackground";
import TryItLink from "../../components/TryItLink/TryItLink";
import "./TryItSection.style.scss";
import { forwardRef, RefObject } from "react";

interface TryItSectionProps {
  active: boolean;
  scroll: number;
}

const TryItSection = forwardRef<HTMLDivElement, TryItSectionProps>(({ active, scroll }, ref) => {
  const reff = ref as RefObject<HTMLDivElement>;

  return (
    <div className={`try_it_wrapper ${active ? "active" : ""}`} ref={ref}>
      <TryItLink />
      <TryItBackground scroll={scroll} offsetTop={reff.current ? reff.current.offsetTop : 0} />
    </div>
  );
});

export default TryItSection;
