import { EventHandler, useEffect, useState } from "react";
import BenefitCircle from "../../components/BenefitCircle/BenefitCircle";
import "./MainPage.style.scss";
import FormatBlock from "../../components/FormatBlock/FormatBlock";

const MainPage = () => {
  const [benefitsMargin, setBenefitsMargin] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      setBenefitsMargin(scrollPosition);
    });
  }, []);

  return (
    <div className="main_page">
      <div className="benefit_wrapper">
        <div className="benefit_container">
          <h1>Занятия в йога-клубе помогут</h1>
          <div
            className="benefits_line"
            style={{ left: `calc(${benefitsMargin > 1000 ? -1000 : -benefitsMargin}px + 50%)` }}
          >
            <BenefitCircle
              background="benefit_1.webp"
              text="Снизить боли в теле: спина, шея, головные боли"
            />
            <BenefitCircle
              background="benefit_2.webp"
              text="Снизить уровень тревожности и стресса"
            />
            <BenefitCircle
              background="benefit_3.webp"
              text="Научиться управлять своим настроением
"
            />
            <BenefitCircle
              background="benefit_4.webp"
              text="Укрепить свое тело, сделать его более сильным и выносливым"
            />
          </div>
        </div>
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

export default MainPage;
