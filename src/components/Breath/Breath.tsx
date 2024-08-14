import { useState } from "react";
import "./Breath.style.scss";

const Breath = () => {
  const [text, setText] = useState<string>("Вдох");

  if (text === "Вдох") setTimeout(() => setText("Выдох"), 3500);
  console.log("render");
  return (
    <div key={text} className="breath_container">
      <div className="text">
        <h1>{text}</h1>
        <span>
          <pre> .</pre>
        </span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
};

export default Breath;
