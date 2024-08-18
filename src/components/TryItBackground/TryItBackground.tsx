import { useEffect, useRef, useState } from "react";
import "./TryItBackground.style.scss";

interface TryItBackgndProps {
  scroll: number;
  offsetTop: number;
}

const TryItBackground = ({ scroll, offsetTop }: TryItBackgndProps) => {
  const [Y, setY] = useState<number>(0);
  const oneLayer = Y * 0.6;
  const twoLayer = Y * 0.5;
  const thrLayer = Y * 0.48;
  const fouLayer = Y * 0.4;
  const fivLayer = Y * 0.35;
  const sixLayer = Y * 0.3;
  const sevLayer = Y * 0.2;
  const eigLayer = Y * 0.2;
  const nineLayer = Y * 0.1;

  useEffect(() => {
    scroll + 720 > offsetTop && setY((scroll - offsetTop) * 0.2);
  }, [scroll]);
  console.log(Y);

  return (
    <div className="try_it_background">
      <img
        className="collage_image a z1 left"
        src="/images/collage1.png"
        alt="collage1.png"
        style={{ transform: `translateY(${oneLayer}px)` }}
      />
      <img
        className="collage_image b z2 middle"
        src="/images/collage2.png"
        alt="collage2.png"
        style={{ transform: `translateY(${twoLayer}px) translateX(-50%)` }}
      />
      <img
        className="collage_image c z10 right"
        src="/images/collage3.png"
        alt="collage3.png"
        style={{ transform: `translateY(${nineLayer}px)` }}
      />
      <img
        className="collage_image d z8 left"
        src="/images/collage4.png"
        alt="collage4.png"
        style={{ transform: `translateY(${eigLayer}px)` }}
      />
      <img
        className="collage_image e z9 middle"
        src="/images/collage5.png"
        alt="collage5.png"
        style={{ transform: `translateY(${nineLayer}px) translateX(-50%)` }}
      />
      <img
        className="collage_image f z7 right"
        src="/images/collage6.png"
        alt="collage6.png"
        style={{ transform: `translateY(${sevLayer}px)` }}
      />
      <img
        className="collage_image g z7 middle"
        src="/images/collage7.png"
        alt="collage7.png"
        style={{ transform: `translateY(${sevLayer}px) translateX(-50%)` }}
      />
      <img
        className="collage_image h z3 right"
        src="/images/collage8.png"
        alt="collage8.png"
        style={{ transform: `translateY(${thrLayer}px)` }}
      />
      <img
        className="collage_image i z5 left"
        src="/images/collage9.png"
        alt="collage9.png"
        style={{ transform: `translateY(${fivLayer}px)` }}
      />
      <img
        className="collage_image j z1 right"
        src="/images/collage10.png"
        alt="collage10.png"
        style={{ transform: `translateY(${oneLayer}px)` }}
      />
      <img
        className="collage_image k z4 middle"
        src="/images/collage11.png"
        alt="collage11.png"
        style={{ transform: `translateY(${fouLayer}px) translateX(-50%)` }}
      />
      <img
        className="collage_image l z6 left"
        src="/images/collage12.png"
        alt="collage12.png"
        style={{ transform: `translateY(${sixLayer}px)` }}
      />
      <img
        className="collage_image m z2 right"
        src="/images/collage13.png"
        alt="collage13.png"
        style={{ transform: `translateY(${twoLayer}px)` }}
      />
      <img
        className="collage_image n z8 left"
        src="/images/collage14.png"
        alt="collage14.png"
        style={{ transform: `translateY(${eigLayer}px)` }}
      />
      <img
        className="collage_image o z7 middle"
        src="/images/collage15.png"
        alt="collage15.png"
        style={{ transform: `translateY(${sevLayer}px) translateX(-50%)` }}
      />
      <img
        className="collage_image p z3 right"
        src="/images/collage16.png"
        alt="collage16.png"
        style={{ transform: `translateY(${thrLayer}px)` }}
      />
    </div>
  );
};

export default TryItBackground;
