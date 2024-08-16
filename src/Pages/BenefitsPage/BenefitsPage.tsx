import { EventHandler, useEffect, useState } from "react";
import BenefitCircle from "../../components/BenefitCircle/BenefitCircle";
import "./BenefitsPage.style.scss";
import FormatBlock from "../../components/FormatBlock/FormatBlock";
import BenefitsLine from "../../components/BenefitsLine/BenefitsLine";

const BenefitsPage = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY));
    return window.removeEventListener("scroll", () => console.log("scroll"));
  }, []);

  return (
    <div className="benefits_page">
      <div className="benefit_wrapper">
        <h1>Практики в йога клубе помогут</h1>
        <BenefitsLine />
      </div>

      <div className="formats_wrapper">
        <div className="top_text_block">
          <h1>Формат йога-клуба</h1>
          <p>тг--канал, в котором 3 раза в неделю будут выходить практики йоги</p>
        </div>
        <FormatBlock
          label="7-15 минут простые и легкие"
          children={
            <ul>
              <li>Настрой на день</li>
              <li>Перерыв в течение дня, чтобы переключить центр и отдохнуть</li>
              <li>Вечером расслабиться и настроиться на сон</li>
            </ul>
          }
        />
        <FormatBlock
          label="25-35 минут средние и насыщенные "
          children={
            <ul>
              <li>Силовые на ноги, пресс, руки, спину</li>
              <li>Вытяжение, растяжка, шпагаты</li>
              <li>Здоровая спина и др.</li>
            </ul>
          }
        />
        <FormatBlock
          label="45-60 минут глубокие и длинные"
          children={
            <ul>
              <li>Универсальная йога на все тело</li>
              <li>Длинный настрой через пранаямы</li>
              <li>Глубокая проработка каждого участка тела</li>
              <li>Полная перезагрузка</li>
            </ul>
          }
        />
        <FormatBlock
          label="ЕЖЕДНЕВНОЕ ВДОХНОВЕНИЕ"
          children={
            <p>Утренняя цитата/аффирмация/мудрость дня, которую вы можете забрать в свой день!</p>
          }
          center
        />
        <img src="/images/yogaman.png" alt="" />
      </div>
    </div>
  );
};

export default BenefitsPage;
