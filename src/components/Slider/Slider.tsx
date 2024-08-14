import { TouchEvent, useEffect, useRef, useState } from "react";
import "./Slider.style.scss";

const Slider = ({ accept }: { accept: () => void }) => {
  const [xStart, setXStart] = useState<number>(0);
  const [X, setX] = useState<number>(0);
  const wrapper = useRef<HTMLDivElement>(null);
  const LIMIT = useRef(1);

  useEffect(() => {
    LIMIT.current = wrapper.current ? wrapper.current.offsetWidth - 80 : 0;
  }, []);

  const sliderEventsHandler = (ev: TouchEvent<HTMLDivElement>) => {
    if (wrapper.current && X !== LIMIT.current)
      switch (ev.type) {
        case "touchstart":
          setXStart(ev.targetTouches[0].screenX);
          break;

        case "touchmove":
          if (ev.targetTouches[0].screenX < xStart) setX(0);
          else if (ev.targetTouches[0].screenX - xStart < LIMIT.current)
            setX(ev.targetTouches[0].screenX - xStart);
          else setX(LIMIT.current);
          break;
        default:
          setX(0);
          break;
      }
    else if (X === LIMIT.current) accept();
  };

  return (
    <div className={`slider_container ${LIMIT.current === X && "animate"}`} ref={wrapper}>
      <div
        className="gradient"
        style={{
          width: `${X === LIMIT.current ? 7000 : X}px`,
          transition: `${X === 0 ? "ease 1s" : X === LIMIT.current && "ease 4s"}`,
        }}
      ></div>
      <div
        className="slider"
        style={{
          marginLeft: `${X}px`,
          transition: `${(X === 0 || X === LIMIT.current) && "ease 1s"}`,
        }}
        onTouchStart={sliderEventsHandler}
        onTouchMove={sliderEventsHandler}
        onTouchEnd={sliderEventsHandler}
      >
        <img src="/images/arrow.webp" alt="" />
      </div>
    </div>
  );
};

export default Slider;
