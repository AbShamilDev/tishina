import { useEffect, useState } from "react";
import "./TryItBackground.style.scss";

interface TryItBackgndProps {
  scroll: number;
  offsetTop: number;
}

const TryItBackground = ({ scroll, offsetTop }: TryItBackgndProps) => {
  const [Y, setY] = useState<number>(0);
  const layers = [
    Y * 0.7,
    Y * 0.6,
    Y * 0.5,
    Y * 0.4,
    Y * 0.35,
    Y * 0.32,
    Y * 0.3,
    Y * 0.25,
    Y * 0.2,
  ];

  useEffect(() => {
    scroll + 720 > offsetTop && setY((scroll - offsetTop) * 0.2);
  }, [scroll]);

  return (
    <div className="try_it_background">
      <img
        className="collage_image c  right"
        src="/images/collage3.png"
        alt="collage3.png"
        style={{ transform: `translateY(${layers[8]}px)` }}
      />
      <img
        className="collage_image e middle"
        src="/images/collage5.png"
        alt="collage5.png"
        style={{ transform: `translateY(${layers[8]}px) translateX(-50%)` }}
      />
      <img
        className="collage_image n left"
        src="/images/collage14.png"
        alt="collage14.png"
        style={{ transform: `translateY(${layers[7]}px)` }}
      />
      <img
        className="collage_image d left"
        src="/images/collage4.png"
        alt="collage4.png"
        style={{ transform: `translateY(${layers[7]}px)` }}
      />
      <img
        className="collage_image o middle"
        src="/images/collage15.png"
        alt="collage15.png"
        style={{ transform: `translateY(${layers[6]}px) translateX(-50%)` }}
      />
      <img
        className="collage_image g middle"
        src="/images/collage7.png"
        alt="collage7.png"
        style={{ transform: `translateY(${layers[6]}px) translateX(-50%)` }}
      />
      <img
        className="collage_image f right"
        src="/images/collage6.png"
        alt="collage6.png"
        style={{ transform: `translateY(${layers[6]}px)` }}
      />
      <img
        className="collage_image l left"
        src="/images/collage12.png"
        alt="collage12.png"
        style={{ transform: `translateY(${layers[5]}px)` }}
      />
      <img
        className="collage_image i left"
        src="/images/collage9.png"
        alt="collage9.png"
        style={{ transform: `translateY(${layers[4]}px)` }}
      />
      <img
        className="collage_image k middle"
        src="/images/collage11.png"
        alt="collage11.png"
        style={{ transform: `translateY(${layers[3]}px) translateX(-50%)` }}
      />
      <img
        className="collage_image p right"
        src="/images/collage16.png"
        alt="collage16.png"
        style={{ transform: `translateY(${layers[2]}px)` }}
      />
      <img
        className="collage_image h right"
        src="/images/collage8.png"
        alt="collage8.png"
        style={{ transform: `translateY(${layers[2]}px)` }}
      />
      <img
        className="collage_image m right"
        src="/images/collage13.png"
        alt="collage13.png"
        style={{ transform: `translateY(${layers[1]}px)` }}
      />
      <img
        className="collage_image b middle"
        src="/images/collage2.png"
        alt="collage2.png"
        style={{ transform: `translateY(${layers[1]}px) translateX(-50%)` }}
      />
      <img
        className="collage_image j right"
        src="/images/collage10.png"
        alt="collage10.png"
        style={{ transform: `translateY(${layers[0]}px)` }}
      />
      <img
        className="collage_image a left"
        src="/images/collage1.png"
        alt="collage1.png"
        style={{ transform: `translateY(${layers[0]}px)` }}
      />
    </div>
  );
};

export default TryItBackground;
