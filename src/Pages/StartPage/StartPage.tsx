import { useState } from "react";
import Slider from "../../components/Slider/Slider";
import TextTyper from "../../components/TextTyper/TextTyper";
import "./StartPage.style.scss";
import Breath from "../../components/Breath/Breath";

const text =
  "Тишина - это красивый внутренний мир, в котором множество сил, мудрости, чтобы реализовать все задуманные цели и жить свою счастливую жизнь. ";

const StartPage = ({ toMain }: { toMain: () => void }) => {
  const [breath, setBreath] = useState<boolean>(false);

  if (breath) setTimeout(() => toMain(), 7000);

  return breath ? (
    <Breath />
  ) : (
    <div className="start_page">
      <Slider
        accept={() => {
          setTimeout(() => setBreath(true), 2000);
        }}
      />
      <TextTyper text={text} />
    </div>
  );
};

export default StartPage;
