import TryItBackground from "../../components/TryItBackground/TryItBackground";
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
      <div className="try_it_container">
        <p>
          Подписка на этот клуб - это подписка на жизнь, наполненную эстетикой тишины, связи с
          собой, глубины и осознанности.
        </p>

        <a href="https://app.leadteh.ru/w/cbj51">Попробовать бесплатно</a>
      </div>

      <TryItBackground scroll={scroll} offsetTop={reff.current ? reff.current.offsetTop : 0} />
    </div>
  );
});

export default TryItSection;
