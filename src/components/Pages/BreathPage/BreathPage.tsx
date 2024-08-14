import Slider from "../../Slider/Slider";
import TextTyper from "../../TextTyper/TextTyper";
import "./SliderPage.style.scss";

const text =
  "Тишина - это красивый внутренний мир, в котором множество сил, мудрости, чтобы реализовать все задуманные цели и жить свою счастливую жизнь. ";

const SliderPage = ({ accept }: { accept: () => void }) => {
  return (
    <div className="slider_page">
      <Slider accept={accept} />
      <TextTyper text={text} />
    </div>
  );
};

export default SliderPage;
