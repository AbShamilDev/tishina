import TryItBackground from "../../components/TryItBackground/TryItBackground";
import "./TryItBlock.style.scss";
import { forwardRef, RefObject } from "react";

interface TryItBlockProps {
  active: boolean;
  scroll: number;
}

const TryItBlock = forwardRef<HTMLDivElement, TryItBlockProps>(({ active, scroll }, ref) => {
  const reff = ref as RefObject<HTMLDivElement>;

  return (
    <div className={`try_it_wrapper ${active ? "active" : ""}`} ref={ref}>
      <div className="try_it_container">
        <p>
          Подписка на этот клуб - это подписка на жизнь, наполненную эстетикой тишины, связи с
          собой, глубины и осознанности.
        </p>

        <a href="https://t.me/misteriias">Попробовать бесплатно</a>
      </div>

      <TryItBackground scroll={scroll} offsetTop={reff.current ? reff.current.offsetTop : 0} />
    </div>
  );
});

export default TryItBlock;
