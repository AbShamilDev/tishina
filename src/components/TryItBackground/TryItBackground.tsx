import { useEffect, useRef, useState } from "react";
import "./TryItBackground.style.scss";

interface TryItBackgndProps {
  scroll: number;
  offsetTop: number;
}

const TryItBackground = ({ scroll, offsetTop }: TryItBackgndProps) => {
  const scale = window.innerWidth > 420 ? window.innerWidth / 420 : 1;
  const images = useRef<
    {
      id: string;
      pos: "left" | "middle" | "right";
      src: string;
      layer: number;
    }[]
  >([
    {
      id: "c",
      pos: "right",
      src: "collage3.png",
      layer: 8,
    },
    {
      id: "e",
      pos: "middle",
      src: "collage5.png",
      layer: 8,
    },
    {
      id: "d",
      pos: "left",
      src: "collage4.png",
      layer: 7,
    },
    {
      id: "n",
      pos: "left",
      src: "collage14.png",
      layer: 7,
    },
    {
      id: "o",
      pos: "middle",
      src: "collage15.png",
      layer: 6,
    },
    {
      id: "f",
      pos: "right",
      src: "collage6.png",
      layer: 6,
    },
    {
      id: "g",
      pos: "middle",
      src: "collage7.png",
      layer: 6,
    },
    {
      id: "l",
      pos: "left",
      src: "collage12.png",
      layer: 5,
    },
    {
      id: "i",
      pos: "left",
      src: "collage9.png",
      layer: 4,
    },
    {
      id: "k",
      pos: "middle",
      src: "collage11.png",
      layer: 3,
    },
    {
      id: "p",
      pos: "right",
      src: "collage16.png",
      layer: 2,
    },
    {
      id: "h",
      pos: "right",
      src: "collage8.png",
      layer: 2,
    },
    {
      id: "m",
      pos: "right",
      src: "collage13.png",
      layer: 1,
    },
    {
      id: "b",
      pos: "middle",
      src: "collage2.png",
      layer: 1,
    },
    {
      id: "a",
      pos: "left",
      src: "collage1.png",
      layer: 0,
    },
    {
      id: "j",
      pos: "right",
      src: "collage10.png",
      layer: 0,
    },
  ]);
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
      {images.current.map((image) => (
        <img
          key={image.id}
          className={`collage_image ${image.id} ${image.pos}`}
          src={`/images/${image.src}`}
          style={{
            transform: `translateY(${layers[image.layer] * scale}px) ${
              image.pos === "middle" ? "translateX(-50%)" : ""
            } scale(${scale})`,
          }}
        />
      ))}
    </div>
  );
};

export default TryItBackground;
